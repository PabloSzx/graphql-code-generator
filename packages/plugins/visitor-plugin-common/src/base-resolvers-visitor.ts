import { ParsedConfig, RawConfig, BaseVisitor } from './base-visitor';
import * as autoBind from 'auto-bind';
import { DEFAULT_SCALARS } from './scalars';
import { ScalarsMap, ConvertFn } from './types';
import { DeclarationBlock, DeclarationBlockConfig, indent, getBaseTypeNode, buildScalars, getConfigValue } from './utils';
import { NameNode, ListTypeNode, NamedTypeNode, FieldDefinitionNode, ObjectTypeDefinitionNode, GraphQLSchema, NonNullTypeNode, UnionTypeDefinitionNode, ScalarTypeDefinitionNode, InterfaceTypeDefinitionNode } from 'graphql';
import { DirectiveDefinitionNode, GraphQLObjectType, InputValueDefinitionNode } from 'graphql';
import { OperationVariablesToObject } from './variables-to-object';
import { ParsedMapper, parseMapper, transformMappers } from './mappers';

export interface ParsedResolversConfig extends ParsedConfig {
  contextType: ParsedMapper;
  mappers: {
    [typeName: string]: ParsedMapper;
  };
  defaultMapper: ParsedMapper | null;
  avoidOptionals: boolean;
}

export interface RawResolversConfig extends RawConfig {
  /**
   * @name contextType
   * @type string
   * @description Use this configuration to set a custom type for your `context`, and it will
   * effect all the resolvers, without the need to override it using generics each time.
   * If you wish to use an external type and import it from another file, you can use `add` plugin
   * and add the required `import` statement, or you can use a `module#type` syntax.
   *
   * @example Custom Context Type
   * ```yml
   * plugins
   *   config:
   *     contextType: MyContext
   * ```
   * @example Custom Context Type
   * ```yml
   * plugins
   *   config:
   *     contextType: ./my-types#MyContext
   * ```
   */
  contextType?: string;
  /**
   * @name mappers
   * @type Object
   * @description Replaces a GraphQL type usage with a custom type, allowing you to return custom object from
   * your resolvers.
   * You can use a `module#type` syntax.
   *
   * @example Custom Context Type
   * ```yml
   * plugins
   *   config:
   *     mappers:
   *       User: ./my-models#UserDbObject
   * ```
   */
  mappers?: { [typeName: string]: string };
  /**
   * @name defaultMapper
   * @type string
   * @description Allow you to set the default mapper when it's not being override by `mappers` or generics.
   * You can specify a type name, or specify a string in `module#type` format.
   * The defualt value of mappers it the TypeScript type generated by `typescript` package.
   *
   * @example Replace with any
   * ```yml
   * plugins
   *   config:
   *     defaultMapper: any
   * ```
   *
   * @example Custom Base Object
   * ```yml
   * plugins
   *   config:
   *     defaultMapper: ./my-file#BaseObject
   * ```
   */
  defaultMapper?: string;
  /**
   * @name avoidOptionals
   * @type boolean
   * @description This will cause the generator to avoid using TypeScript optionals (`?`),
   * so all field resolvers must be implemented in order to avoid compilation errors.
   *
   * @default false
   *
   * @example
   * ```yml
   * generates:
   * path/to/file.ts:
   *  plugins:
   *    - typescript
   *    - typescript-resolvers
   *  config:
   *    avoidOptionals: true
   * ```
   */
  avoidOptionals?: boolean;
}

export class BaseResolversVisitor<TRawConfig extends RawResolversConfig = RawResolversConfig, TPluginConfig extends ParsedResolversConfig = ParsedResolversConfig> extends BaseVisitor<TRawConfig, TPluginConfig> {
  protected _parsedConfig: TPluginConfig;
  protected _declarationBlockConfig: DeclarationBlockConfig = {};
  protected _collectedResolvers: { [key: string]: string } = {};
  protected _collectedDirectiveResolvers: { [key: string]: string } = {};
  protected _variablesTransfomer: OperationVariablesToObject;

  constructor(rawConfig: TRawConfig, additionalConfig: TPluginConfig, private _schema: GraphQLSchema, defaultScalars: ScalarsMap = DEFAULT_SCALARS) {
    super(
      rawConfig,
      {
        contextType: parseMapper(rawConfig.contextType || 'any'),
        avoidOptionals: getConfigValue(rawConfig.avoidOptionals, false),
        defaultMapper: rawConfig.defaultMapper ? parseMapper(rawConfig.defaultMapper || 'any') : null,
        mappers: transformMappers(rawConfig.mappers || {}),
        ...(additionalConfig || {}),
      } as any,
      buildScalars(_schema, defaultScalars)
    );

    autoBind(this);
    this._variablesTransfomer = new OperationVariablesToObject(this.scalars, this.convertName);
  }

  public get schema(): GraphQLSchema {
    return this._schema;
  }

  public get defaultMapperType(): string {
    return this.config.defaultMapper.type;
  }

  public get mappersImports(): string[] {
    const groupedMappers: { [sourceFile: string]: string[] } = {};

    Object.keys(this.config.mappers)
      .filter(gqlTypeName => this.config.mappers[gqlTypeName].isExternal)
      .forEach(gqlTypeName => {
        const mapper = this.config.mappers[gqlTypeName];

        if (!groupedMappers[mapper.source]) {
          groupedMappers[mapper.source] = [];
        }

        if (!groupedMappers[mapper.source].includes(mapper.type)) {
          groupedMappers[mapper.source].push(mapper.type);
        }
      });

    if (this.config.contextType.isExternal) {
      if (!groupedMappers[this.config.contextType.source]) {
        groupedMappers[this.config.contextType.source] = [];
      }

      groupedMappers[this.config.contextType.source].push(this.config.contextType.type);
    }

    if (this.config.defaultMapper && this.config.defaultMapper.isExternal) {
      if (!groupedMappers[this.config.defaultMapper.source]) {
        groupedMappers[this.config.defaultMapper.source] = [];
      }

      groupedMappers[this.config.defaultMapper.source].push(this.config.defaultMapper.type);
    }

    return Object.keys(groupedMappers).map(source => this.buildMapperImport(source, groupedMappers[source]));
  }

  protected buildMapperImport(source: string, types: string[]): string {
    return `import { ${types.join(', ')} } from '${source}';`;
  }

  setDeclarationBlockConfig(config: DeclarationBlockConfig): void {
    this._declarationBlockConfig = config;
  }

  setVariablesTransformer(variablesTransfomer: OperationVariablesToObject): void {
    this._variablesTransfomer = variablesTransfomer;
  }

  public getRootResolver(): string {
    const name = this.convertName('Resolvers');
    const contextType = `<Context = ${this.config.contextType.type}>`;

    // This is here because we don't want to break IResolvers, so there is a mapping by default,
    // and if the developer is overriding typesPrefix, it won't get generated at all.
    const deprecatedIResolvers = !this.config.typesPrefix
      ? `
/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers${contextType} = ${name}<Context>;`
      : '';

    return [
      new DeclarationBlock(this._declarationBlockConfig)
        .export()
        .asKind('type')
        .withName(name, contextType)
        .withBlock(
          Object.keys(this._collectedResolvers)
            .map(schemaTypeName => {
              const resolverType = this._collectedResolvers[schemaTypeName];

              return indent(this.formatRootResolver(schemaTypeName, resolverType));
            })
            .join('\n')
        ).string,
      deprecatedIResolvers,
    ].join('\n');
  }

  protected formatRootResolver(schemaTypeName: string, resolverType: string): string {
    return `${schemaTypeName}${this.config.avoidOptionals ? '' : '?'}: ${resolverType},`;
  }

  public getAllDirectiveResolvers(): string {
    if (Object.keys(this._collectedDirectiveResolvers).length) {
      const name = this.convertName('DirectiveResolvers');
      const contextType = `<Context = ${this.config.contextType.type}>`;

      // This is here because we don't want to break IResolvers, so there is a mapping by default,
      // and if the developer is overriding typesPrefix, it won't get generated at all.
      const deprecatedIResolvers = !this.config.typesPrefix
        ? `
/**
* @deprecated
* Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
*/
export type IDirectiveResolvers${contextType} = ${name}<Context>;`
        : '';

      return [
        new DeclarationBlock(this._declarationBlockConfig)
          .export()
          .asKind('type')
          .withName(name, contextType)
          .withBlock(
            Object.keys(this._collectedDirectiveResolvers)
              .map(schemaTypeName => {
                const resolverType = this._collectedDirectiveResolvers[schemaTypeName];

                return indent(this.formatRootResolver(schemaTypeName, resolverType));
              })
              .join('\n')
          ).string,
        deprecatedIResolvers,
      ].join('\n');
    }

    return '';
  }

  Name(node: NameNode): string {
    return node.value;
  }

  ListType(node: ListTypeNode): string {
    const asString = (node.type as any) as string;

    return `Array<${asString}>`;
  }

  protected _getScalar(name: string): string {
    return `Scalars['${name}']`;
  }

  NamedType(node: NamedTypeNode): string {
    const nameStr = (node.name as any) as string;

    if (this.config.scalars[nameStr]) {
      return this._getScalar(nameStr);
    }

    return this.convertName(node);
  }

  NonNullType(node: NonNullTypeNode): string {
    const asString = (node.type as any) as string;

    return asString;
  }

  protected getTypeToUse(name: string, node: { name: any }): string {
    if (this.config.mappers[name]) {
      return this.config.mappers[name].type;
    } else if (this.config.defaultMapper) {
      return this.config.defaultMapper.type;
    } else if (this.config.scalars[name]) {
      return this._getScalar(name);
    }

    return this.convertName(typeof node.name === 'string' ? node.name : node.name.value);
  }

  FieldDefinition(node: FieldDefinitionNode, key: string | number, parent: any) {
    const hasArguments = node.arguments && node.arguments.length > 0;

    return (parentName: string) => {
      const original = parent[key];
      const baseType = getBaseTypeNode(original.type);
      const realType = baseType.name.value;
      const typeToUse = this.getTypeToUse(realType, baseType);
      const mappedType = this._variablesTransfomer.wrapAstTypeWithModifiers(typeToUse, original.type);
      const subscriptionType = this._schema.getSubscriptionType();
      const isSubscriptionType = subscriptionType && subscriptionType.name === parentName;

      return indent(
        `${node.name}${this.config.avoidOptionals ? '' : '?'}: ${isSubscriptionType ? 'SubscriptionResolver' : 'Resolver'}<${mappedType}, ParentType, Context${
          hasArguments
            ? `, ${this.convertName(parentName, {
                useTypesPrefix: true,
              }) +
                this.convertName(node.name, {
                  useTypesPrefix: false,
                }) +
                'Args'}`
            : ''
        }>,`
      );
    };
  }

  ObjectTypeDefinition(node: ObjectTypeDefinitionNode, key: string | number, parent: any) {
    const name = this.convertName(node, {
      suffix: 'Resolvers',
    });
    const type = this.getTypeToUse((node.name as any) as string, node);

    const block = new DeclarationBlock(this._declarationBlockConfig)
      .export()
      .asKind('type')
      .withName(name, `<Context = ${this.config.contextType.type}, ParentType = ${type}>`)
      .withBlock(node.fields.map((f: any) => f(node.name)).join('\n'));

    this._collectedResolvers[node.name as any] = name + '<Context>';

    return block.string;
  }

  UnionTypeDefinition(node: UnionTypeDefinitionNode, key: string | number, parent: any): string {
    const name = this.convertName(node, {
      suffix: 'Resolvers',
    });
    const originalNode = parent[key] as UnionTypeDefinitionNode;
    const possibleTypes = originalNode.types
      .map(node => this.convertName(node))
      .map(f => `'${f}'`)
      .join(' | ');

    this._collectedResolvers[node.name as any] = name;
    const type = this.getTypeToUse((node.name as any) as string, node);

    return new DeclarationBlock(this._declarationBlockConfig)
      .export()
      .asKind('type')
      .withName(name, `<Context = ${this.config.contextType.type}, ParentType = ${type}>`)
      .withBlock(indent(`__resolveType: TypeResolveFn<${possibleTypes}, ParentType, Context>`)).string;
  }

  ScalarTypeDefinition(node: ScalarTypeDefinitionNode): string {
    const nameAsString = (node.name as any) as string;
    const baseName = this.scalars[nameAsString] ? this._getScalar(nameAsString) : this.convertName(node);

    this._collectedResolvers[node.name as any] = 'GraphQLScalarType';

    return new DeclarationBlock({
      ...this._declarationBlockConfig,
      blockTransformer(block) {
        return block;
      },
    })
      .export()
      .asKind('interface')
      .withName(
        this.convertName(node, {
          suffix: 'ScalarConfig',
        }),
        ` extends GraphQLScalarTypeConfig<${baseName}, any>`
      )
      .withBlock(indent(`name: '${node.name}'`)).string;
  }

  DirectiveDefinition(node: DirectiveDefinitionNode): string {
    const directiveName = this.convertName(node, {
      suffix: 'DirectiveResolver',
    });
    const hasArguments = node.arguments && node.arguments.length > 0;
    const directiveArgs = hasArguments ? this._variablesTransfomer.transform<InputValueDefinitionNode>(node.arguments) : '';

    this._collectedDirectiveResolvers[node.name as any] = directiveName + '<any, any, Context>';

    return new DeclarationBlock({
      ...this._declarationBlockConfig,
      blockTransformer(block) {
        return block;
      },
    })
      .export()
      .asKind('type')
      .withName(directiveName, `<Result, Parent, Context = ${this.config.contextType.type}, Args = { ${directiveArgs} }>`)
      .withContent(`DirectiveResolverFn<Result, Parent, Context, Args>`).string;
  }

  InterfaceTypeDefinition(node: InterfaceTypeDefinitionNode): string {
    const name = this.convertName(node, {
      suffix: 'Resolvers',
    });
    const allTypesMap = this._schema.getTypeMap();
    const implementingTypes: string[] = [];

    this._collectedResolvers[node.name as any] = name;

    for (const graphqlType of Object.values(allTypesMap)) {
      if (graphqlType instanceof GraphQLObjectType) {
        const allInterfaces = graphqlType.getInterfaces();
        if (allInterfaces.find(int => int.name === ((node.name as any) as string))) {
          implementingTypes.push(graphqlType.name);
        }
      }
    }

    const type = this.getTypeToUse((node.name as any) as string, node);

    return new DeclarationBlock(this._declarationBlockConfig)
      .export()
      .asKind('type')
      .withName(name, `<Context = ${this.config.contextType.type}, ParentType = ${type}>`)
      .withBlock([indent(`__resolveType: TypeResolveFn<${implementingTypes.map(name => `'${name}'`).join(' | ')}, ParentType, Context>,`), ...(node.fields || []).map((f: any) => f(node.name))].join('\n')).string;
  }

  SchemaDefinition() {
    return null;
  }
}