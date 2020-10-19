(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return b}));var a=n(4),o=n(9),i=(n(1),n(321)),l={},p={unversionedId:"generated-config/typescript-react-apollo",id:"generated-config/typescript-react-apollo",isDocsHomePage:!1,title:"typescript-react-apollo",description:"This plugin generates React Apollo components and HOC with TypeScript typings.",source:"@site/docs/generated-config/typescript-react-apollo.md",slug:"/generated-config/typescript-react-apollo",permalink:"/docs/generated-config/typescript-react-apollo",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/typescript-react-apollo.md",version:"current"},r=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>withComponent</code>",id:"withcomponent",children:[]},{value:"<code>withHOC</code>",id:"withhoc",children:[]},{value:"<code>withHooks</code>",id:"withhooks",children:[]},{value:"<code>withMutationFn</code>",id:"withmutationfn",children:[]},{value:"<code>withRefetchFn</code>",id:"withrefetchfn",children:[]},{value:"<code>apolloReactCommonImportFrom</code>",id:"apolloreactcommonimportfrom",children:[]},{value:"<code>apolloReactComponentsImportFrom</code>",id:"apolloreactcomponentsimportfrom",children:[]},{value:"<code>apolloReactHocImportFrom</code>",id:"apolloreacthocimportfrom",children:[]},{value:"<code>apolloReactHooksImportFrom</code>",id:"apolloreacthooksimportfrom",children:[]},{value:"<code>componentSuffix</code>",id:"componentsuffix",children:[]},{value:"<code>reactApolloVersion</code>",id:"reactapolloversion",children:[]},{value:"<code>withResultType</code>",id:"withresulttype",children:[]},{value:"<code>withMutationOptionsType</code>",id:"withmutationoptionstype",children:[]},{value:"<code>addDocBlocks</code>",id:"adddocblocks",children:[]},{value:"<code>noGraphQLTag</code>",id:"nographqltag",children:[]},{value:"<code>gqlImport</code>",id:"gqlimport",children:[]},{value:"<code>documentNodeImport</code>",id:"documentnodeimport",children:[]},{value:"<code>noExport</code>",id:"noexport",children:[]},{value:"<code>dedupeOperationSuffix</code>",id:"dedupeoperationsuffix",children:[]},{value:"<code>omitOperationSuffix</code>",id:"omitoperationsuffix",children:[]},{value:"<code>operationResultSuffix</code>",id:"operationresultsuffix",children:[]},{value:"<code>documentVariablePrefix</code>",id:"documentvariableprefix",children:[]},{value:"<code>documentVariableSuffix</code>",id:"documentvariablesuffix",children:[]},{value:"<code>fragmentVariablePrefix</code>",id:"fragmentvariableprefix",children:[]},{value:"<code>fragmentVariableSuffix</code>",id:"fragmentvariablesuffix",children:[]},{value:"<code>documentMode</code>",id:"documentmode",children:[]},{value:"<code>importOperationTypesFrom</code>",id:"importoperationtypesfrom",children:[]},{value:"<code>importDocumentNodeExternallyFrom</code>",id:"importdocumentnodeexternallyfrom",children:[]},{value:"<code>pureMagicComment</code>",id:"puremagiccomment",children:[]},{value:"<code>scalars</code>",id:"scalars",children:[]},{value:"<code>namingConvention</code>",id:"namingconvention",children:[]},{value:"<code>typesPrefix</code>",id:"typesprefix",children:[]},{value:"<code>typesSuffix</code>",id:"typessuffix",children:[]},{value:"<code>skipTypename</code>",id:"skiptypename",children:[]},{value:"<code>nonOptionalTypename</code>",id:"nonoptionaltypename",children:[]},{value:"<code>useTypeImports</code>",id:"usetypeimports",children:[]}]}],c={rightToc:r};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This plugin generates React Apollo components and HOC with TypeScript typings."),Object(i.b)("p",null,"It extends the basic TypeScript plugins: ",Object(i.b)("inlineCode",{parentName:"p"},"@graphql-codegen/typescript"),", ",Object(i.b)("inlineCode",{parentName:"p"},"@graphql-codegen/typescript-operations")," - and thus shares a similar configuration."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("img",{alt:"typescript-react-apollo plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/typescript-react-apollo?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(i.b)("div",{className:"admonition admonition-shell"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(i.b)("path",Object(a.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(i.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn add -D @graphql-codegen/typescript-react-apollo\n")))),Object(i.b)("h2",{id:"api-reference"},"API Reference"),Object(i.b)("h3",{id:"withcomponent"},Object(i.b)("inlineCode",{parentName:"h3"},"withComponent")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"Customize the output by enabling/disabling the generated Component (deprecated since Apollo-Client v3). For more details: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/react/api/react/components/"}),"https://www.apollographql.com/docs/react/api/react/components/")),Object(i.b)("h4",{id:"usage-examples"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-react-apollo\n config:\n   withComponent: true\n")),Object(i.b)("h3",{id:"withhoc"},Object(i.b)("inlineCode",{parentName:"h3"},"withHOC")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"Customize the output by enabling/disabling the HOC (deprecated since Apollo-Client v3). For more details: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/react/api/react/hoc/"}),"https://www.apollographql.com/docs/react/api/react/hoc/")),Object(i.b)("h4",{id:"usage-examples-1"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-react-apollo\n config:\n   withHOC: true\n")),Object(i.b)("h3",{id:"withhooks"},Object(i.b)("inlineCode",{parentName:"h3"},"withHooks")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"true")),Object(i.b)("p",null,"Customized the output by enabling/disabling the generated React Hooks. For more details: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/react/api/react/hooks/"}),"https://www.apollographql.com/docs/react/api/react/hooks/")),Object(i.b)("h4",{id:"usage-examples-2"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-react-apollo\n config:\n   withHooks: true\n")),Object(i.b)("h3",{id:"withmutationfn"},Object(i.b)("inlineCode",{parentName:"h3"},"withMutationFn")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"true")),Object(i.b)("p",null,"Customized the output by enabling/disabling the generated mutation function signature."),Object(i.b)("h4",{id:"usage-examples-3"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-react-apollo\n config:\n   withMutationFn: true\n")),Object(i.b)("h3",{id:"withrefetchfn"},Object(i.b)("inlineCode",{parentName:"h3"},"withRefetchFn")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"Enable generating a function to be used with refetchQueries"),Object(i.b)("h4",{id:"usage-examples-4"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-react-apollo\n config:\n   withRefetchFn: false\n")),Object(i.b)("h3",{id:"apolloreactcommonimportfrom"},Object(i.b)("inlineCode",{parentName:"h3"},"apolloReactCommonImportFrom")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},'"')),Object(i.b)("p",null,"Customize the package where apollo-react common lib is loaded from."),Object(i.b)("h3",{id:"apolloreactcomponentsimportfrom"},Object(i.b)("inlineCode",{parentName:"h3"},"apolloReactComponentsImportFrom")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},'"')),Object(i.b)("p",null,"Customize the package where apollo-react component lib is loaded from."),Object(i.b)("h3",{id:"apolloreacthocimportfrom"},Object(i.b)("inlineCode",{parentName:"h3"},"apolloReactHocImportFrom")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},'"')),Object(i.b)("p",null,"Customize the package where apollo-react HOC lib is loaded from."),Object(i.b)("h3",{id:"apolloreacthooksimportfrom"},Object(i.b)("inlineCode",{parentName:"h3"},"apolloReactHooksImportFrom")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},'"')),Object(i.b)("p",null,"Customize the package where apollo-react hooks lib is loaded from."),Object(i.b)("h3",{id:"componentsuffix"},Object(i.b)("inlineCode",{parentName:"h3"},"componentSuffix")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"Component")),Object(i.b)("p",null,"You can specify a suffix that gets attached to the name of the generated component."),Object(i.b)("h3",{id:"reactapolloversion"},Object(i.b)("inlineCode",{parentName:"h3"},"reactApolloVersion")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"number (values: 2, 3)"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"3")),Object(i.b)("p",null,"Sets the version of react-apollo.\nIf you are using the old (deprecated) package of ",Object(i.b)("inlineCode",{parentName:"p"},"react-apollo"),", please set this configuration to ",Object(i.b)("inlineCode",{parentName:"p"},"2"),".\nIf you are using Apollo-Client v3, please set this to ",Object(i.b)("inlineCode",{parentName:"p"},"3"),"."),Object(i.b)("h4",{id:"usage-examples-5"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-react-apollo\n config:\n   reactApolloVersion: 2\n")),Object(i.b)("h3",{id:"withresulttype"},Object(i.b)("inlineCode",{parentName:"h3"},"withResultType")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"true")),Object(i.b)("p",null,"Customized the output by enabling/disabling the generated result type."),Object(i.b)("h4",{id:"usage-examples-6"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-react-apollo\n config:\n   withResultType: true\n")),Object(i.b)("h3",{id:"withmutationoptionstype"},Object(i.b)("inlineCode",{parentName:"h3"},"withMutationOptionsType")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"true")),Object(i.b)("p",null,"Customized the output by enabling/disabling the generated mutation option type."),Object(i.b)("h4",{id:"usage-examples-7"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-react-apollo\n config:\n   withMutationOptionsType: true\n")),Object(i.b)("h3",{id:"adddocblocks"},Object(i.b)("inlineCode",{parentName:"h3"},"addDocBlocks")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"true")),Object(i.b)("p",null,"Allows you to enable/disable the generation of docblocks in generated code.\nSome IDE's (like VSCode) add extra inline information with docblocks, you can disable this feature if your preferred IDE does not."),Object(i.b)("h4",{id:"usage-examples-8"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-operations\n   - typescript-react-apollo\n config:\n   addDocBlocks: true\n")),Object(i.b)("h3",{id:"nographqltag"},Object(i.b)("inlineCode",{parentName:"h3"},"noGraphQLTag")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"Deprecated. Changes the documentMode to ",Object(i.b)("inlineCode",{parentName:"p"},"documentNode"),"."),Object(i.b)("h3",{id:"gqlimport"},Object(i.b)("inlineCode",{parentName:"h3"},"gqlImport")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-tag#gql")),Object(i.b)("p",null,"Customize from which module will ",Object(i.b)("inlineCode",{parentName:"p"},"gql")," be imported from.\nThis is useful if you want to use modules other than ",Object(i.b)("inlineCode",{parentName:"p"},"graphql-tag"),", e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"graphql.macro"),"."),Object(i.b)("h4",{id:"usage-examples-9"},"Usage Examples"),Object(i.b)("h5",{id:"graphqlmacro"},"graphql.macro"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  gqlImport: graphql.macro#gql\n")),Object(i.b)("h5",{id:"gatsby"},"Gatsby"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  gqlImport: gatsby#graphql\n")),Object(i.b)("h3",{id:"documentnodeimport"},Object(i.b)("inlineCode",{parentName:"h3"},"documentNodeImport")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"graphql#DocumentNode")),Object(i.b)("p",null,"Customize from which module will ",Object(i.b)("inlineCode",{parentName:"p"},"DocumentNode")," be imported from.\nThis is useful if you want to use modules other than ",Object(i.b)("inlineCode",{parentName:"p"},"graphql"),", e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"@graphql-typed-document-node"),"."),Object(i.b)("h3",{id:"noexport"},Object(i.b)("inlineCode",{parentName:"h3"},"noExport")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"Set this configuration to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if you wish to tell codegen to generate code with no ",Object(i.b)("inlineCode",{parentName:"p"},"export")," identifier."),Object(i.b)("h3",{id:"dedupeoperationsuffix"},Object(i.b)("inlineCode",{parentName:"h3"},"dedupeOperationSuffix")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"Set this configuration to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if you wish to make sure to remove duplicate operation name suffix."),Object(i.b)("h3",{id:"omitoperationsuffix"},Object(i.b)("inlineCode",{parentName:"h3"},"omitOperationSuffix")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"Set this configuration to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if you wish to disable auto add suffix of operation name, like ",Object(i.b)("inlineCode",{parentName:"p"},"Query"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Mutation"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Subscription"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Fragment"),"."),Object(i.b)("h3",{id:"operationresultsuffix"},Object(i.b)("inlineCode",{parentName:"h3"},"operationResultSuffix")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(i.b)("p",null,"Adds a suffix to generated operation result type names"),Object(i.b)("h3",{id:"documentvariableprefix"},Object(i.b)("inlineCode",{parentName:"h3"},"documentVariablePrefix")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(i.b)("p",null,"Changes the GraphQL operations variables prefix."),Object(i.b)("h3",{id:"documentvariablesuffix"},Object(i.b)("inlineCode",{parentName:"h3"},"documentVariableSuffix")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"Document")),Object(i.b)("p",null,"Changes the GraphQL operations variables suffix."),Object(i.b)("h3",{id:"fragmentvariableprefix"},Object(i.b)("inlineCode",{parentName:"h3"},"fragmentVariablePrefix")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(i.b)("p",null,"Changes the GraphQL fragments variables prefix."),Object(i.b)("h3",{id:"fragmentvariablesuffix"},Object(i.b)("inlineCode",{parentName:"h3"},"fragmentVariableSuffix")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"FragmentDoc")),Object(i.b)("p",null,"Changes the GraphQL fragments variables suffix."),Object(i.b)("h3",{id:"documentmode"},Object(i.b)("inlineCode",{parentName:"h3"},"documentMode")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"DocumentMode"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"graphQLTag")),Object(i.b)("p",null,"Declares how DocumentNode are created:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"graphQLTag"),": ",Object(i.b)("inlineCode",{parentName:"li"},"graphql-tag")," or other modules (check ",Object(i.b)("inlineCode",{parentName:"li"},"gqlImport"),") will be used to generate document nodes. If this is used, document nodes are generated on client side i.e. the module used to generate this will be shipped to the client"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"documentNode"),": document nodes will be generated as objects when we generate the templates."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"documentNodeImportFragments"),": Similar to documentNode except it imports external fragments instead of embedding them."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"external"),": document nodes are imported from an external file. To be used with ",Object(i.b)("inlineCode",{parentName:"li"},"importDocumentNodeExternallyFrom"))),Object(i.b)("h3",{id:"importoperationtypesfrom"},Object(i.b)("inlineCode",{parentName:"h3"},"importOperationTypesFrom")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(i.b)("p",null,"This config is used internally by presets, but you can use it manually to tell codegen to prefix all base types that it's using.\nThis is useful if you wish to generate base types from ",Object(i.b)("inlineCode",{parentName:"p"},"typescript-operations")," plugin into a different file, and import it from there."),Object(i.b)("h3",{id:"importdocumentnodeexternallyfrom"},Object(i.b)("inlineCode",{parentName:"h3"},"importDocumentNodeExternallyFrom")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(i.b)("p",null,"This config should be used if ",Object(i.b)("inlineCode",{parentName:"p"},"documentMode")," is ",Object(i.b)("inlineCode",{parentName:"p"},"external"),". This has 2 usage:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"any string: This would be the path to import document nodes from. This can be used if we want to manually create the document nodes e.g. Use ",Object(i.b)("inlineCode",{parentName:"li"},"graphql-tag")," in a separate file and export the generated document"),Object(i.b)("li",{parentName:"ul"},"'near-operation-file': This is a special mode that is intended to be used with ",Object(i.b)("inlineCode",{parentName:"li"},"near-operation-file")," preset to import document nodes from those files. If these files are ",Object(i.b)("inlineCode",{parentName:"li"},".graphql")," files, we make use of webpack loader.")),Object(i.b)("h4",{id:"usage-examples-10"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  documentMode: external\n  importDocumentNodeExternallyFrom: path/to/document-node-file\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  documentMode: external\n  importDocumentNodeExternallyFrom: near-operation-file\n")),Object(i.b)("h3",{id:"puremagiccomment"},Object(i.b)("inlineCode",{parentName:"h3"},"pureMagicComment")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"This config adds PURE magic comment to the static variables to enforce treeshaking for your bundler."),Object(i.b)("h3",{id:"scalars"},Object(i.b)("inlineCode",{parentName:"h3"},"scalars")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(i.b)("p",null,"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(i.b)("h4",{id:"usage-examples-11"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(i.b)("h3",{id:"namingconvention"},Object(i.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"pascal-case#pascalCase")),Object(i.b)("p",null,"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(i.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(i.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(i.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(i.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(i.b)("h4",{id:"usage-examples-12"},"Usage Examples"),Object(i.b)("h5",{id:"override-all-names"},"Override All Names"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(i.b)("h5",{id:"upper-case-enum-values"},"Upper-case enum values"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(i.b)("h5",{id:"keep-names-as-is"},"Keep names as is"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(i.b)("h5",{id:"remove-underscores"},"Remove Underscores"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(i.b)("h3",{id:"typesprefix"},Object(i.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(i.b)("p",null,"Prefixes all the generated types."),Object(i.b)("h4",{id:"usage-examples-13"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(i.b)("h3",{id:"typessuffix"},Object(i.b)("inlineCode",{parentName:"h3"},"typesSuffix")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(i.b)("p",null,"Suffixes all the generated types."),Object(i.b)("h4",{id:"usage-examples-14"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesSuffix: I\n")),Object(i.b)("h3",{id:"skiptypename"},Object(i.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(i.b)("h4",{id:"usage-examples-15"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(i.b)("h3",{id:"nonoptionaltypename"},Object(i.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"Automatically adds ",Object(i.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(i.b)("h4",{id:"usage-examples-16"},"Usage Examples"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n")),Object(i.b)("h3",{id:"usetypeimports"},Object(i.b)("inlineCode",{parentName:"h3"},"useTypeImports")),Object(i.b)("p",null,"type: ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("p",null,"Will use ",Object(i.b)("inlineCode",{parentName:"p"},"import type {}")," rather than ",Object(i.b)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option'))}b.isMDXComponent=!0},321:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(1),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,u=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return n?o.a.createElement(u,p(p({ref:t},c),{},{components:n})):o.a.createElement(u,p({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var r in t)hasOwnProperty.call(t,r)&&(p[r]=t[r]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<i;c++)l[c]=n[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);