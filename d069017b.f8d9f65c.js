(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{285:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(4),o=r(9),a=(r(1),r(321)),i={id:"federation",title:"Apollo Federation"},c={unversionedId:"integrations/federation",id:"integrations/federation",isDocsHomePage:!1,title:"Apollo Federation",description:"The typescript-resolvers plugin also supports Apollo Federation.",source:"@site/docs/integrations/federation.md",slug:"/integrations/federation",permalink:"/docs/integrations/federation",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/integrations/federation.md",version:"current",sidebar:"sidebar",previous:{title:"Prettier & Linters",permalink:"/docs/integrations/prettier"},next:{title:"What are Plugins?",permalink:"/docs/custom-codegen/index"}},p=[],l={rightToc:p};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"typescript-resolvers")," plugin also supports ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/apollo-server/federation/introduction/"}),"Apollo Federation"),"."),Object(a.b)("p",null,"In order to use it, add ",Object(a.b)("inlineCode",{parentName:"p"},"federation: true")," to your configuration:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  ./src/types.ts:\n    plugins:\n      - typescript\n      - typescript-resolvers\n    config:\n      federation: true\n")),Object(a.b)("p",null,"It will make sure to add the required GraphQL directives to your codegen schema, and will generate a compatible resolvers signature for Apollo Federation."))}s.isMDXComponent=!0},321:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(1),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,b=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return r?o.a.createElement(b,c(c({ref:t},l),{},{components:r})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);