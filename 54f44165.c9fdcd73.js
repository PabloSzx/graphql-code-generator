(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{165:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return m})),a.d(t,"rightToc",(function(){return r})),a.d(t,"default",(function(){return p}));var n=a(4),i=a(9),c=(a(1),a(321)),b={id:"installation",title:"Installation"},m={unversionedId:"getting-started/installation",id:"getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"Installing Codegen",source:"@site/docs/getting-started/installation.md",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/getting-started/installation.md",version:"current",sidebar:"sidebar",previous:{title:"What is GraphQL Code Generator?",permalink:"/docs/getting-started/index"},next:{title:"codegen.yml",permalink:"/docs/getting-started/codegen-config"}},r=[{value:"Installing Codegen",id:"installing-codegen",children:[]},{value:"Initialization Wizard",id:"initialization-wizard",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Running the codegen",id:"running-the-codegen",children:[]}],o={rightToc:r};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"installing-codegen"},"Installing Codegen"),Object(c.b)("p",null,"First we need to make sure that the basic GraphQL package is within our dependencies, since GraphQL Code Generator depends on it:"),Object(c.b)("div",{className:"admonition admonition-shell"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(c.b)("path",Object(n.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"With ",Object(c.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn add graphql\n")))),Object(c.b)("div",{className:"admonition admonition-shell"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(c.b)("path",Object(n.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"With ",Object(c.b)("inlineCode",{parentName:"h5"},"npm"))),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install --save graphql  \n")))),Object(c.b)("p",null,"Then we can install GraphQL Code Generator using ",Object(c.b)("inlineCode",{parentName:"p"},"yarn")," (or ",Object(c.b)("inlineCode",{parentName:"p"},"npm"),"):"),Object(c.b)("div",{className:"admonition admonition-shell"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(c.b)("path",Object(n.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"With ",Object(c.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn add -D @graphql-codegen/cli\n")))),Object(c.b)("div",{className:"admonition admonition-shell"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(c.b)("path",Object(n.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"With ",Object(c.b)("inlineCode",{parentName:"h5"},"npm"))),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install --save-dev @graphql-codegen/cli\n")))),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Global Installation")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Please avoid installing ",Object(c.b)("inlineCode",{parentName:"p"},"graphql"),", ",Object(c.b)("inlineCode",{parentName:"p"},"@graphql-codegen/cli")," and its plugins as global dependencies. This will cause issues because of duplications of the ",Object(c.b)("inlineCode",{parentName:"p"},"graphql")," package. Install it only locally in your project."))),Object(c.b)("h2",{id:"initialization-wizard"},"Initialization Wizard"),Object(c.b)("p",null,"GraphQL Code Generator lets you set up everything by simply running the following command:"),Object(c.b)("div",{className:"admonition admonition-shell"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(c.b)("path",Object(n.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"With ",Object(c.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn graphql-codegen init\n")))),Object(c.b)("div",{className:"admonition admonition-shell"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(c.b)("path",Object(n.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"With ",Object(c.b)("inlineCode",{parentName:"h5"},"npm"))),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"npx graphql-codegen init\n")))),Object(c.b)("p",null,"Question by question, it will guide you through the whole process of setting up a schema, selecting and installing plugins, picking a destination to where your files are generated, and a lot more."),Object(c.b)("p",null,"If you don't want to use the wizard, we've got you covered, just continue reading the next sections."),Object(c.b)("h2",{id:"setup"},"Setup"),Object(c.b)("p",null,"GraphQL Code Generator's behavior is bound into plugins, thus we will need to install one of them, for example:"),Object(c.b)("div",{className:"admonition admonition-shell"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(c.b)("path",Object(n.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"With ",Object(c.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn add -D @graphql-codegen/typescript\n")))),Object(c.b)("div",{className:"admonition admonition-shell"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(c.b)("path",Object(n.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"With ",Object(c.b)("inlineCode",{parentName:"h5"},"npm"))),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install --save-dev @graphql-codegen/typescript\n")))),Object(c.b)("p",null,"Although this can be used directly, it's recommended to add the code generation script to your ",Object(c.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "generate": "graphql-codegen"\n  }\n}\n')),Object(c.b)("p",null,"This will simplify its usage, and you'll be able to run the codegen with the following command:"),Object(c.b)("div",{className:"admonition admonition-shell"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(c.b)("path",Object(n.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"With ",Object(c.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn generate\n")))),Object(c.b)("div",{className:"admonition admonition-shell"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(c.b)("path",Object(n.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"With ",Object(c.b)("inlineCode",{parentName:"h5"},"npm"))),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"npm run generate\n")))),Object(c.b)("p",null,"GraphQL Code Generator looks for ",Object(c.b)("inlineCode",{parentName:"p"},"codegen.yml")," and ",Object(c.b)("inlineCode",{parentName:"p"},"codegen.json")," files by default. An example can be seen below:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"schema: http://localhost:3000/graphql\ngenerates:\n  ./src/types.d.ts:\n    plugins:\n      - typescript\n")),Object(c.b)("h2",{id:"running-the-codegen"},"Running the codegen"),Object(c.b)("p",null,"By running the following command, the GraphQL schema will be fetched from the route endpoint and the typescript definitions will be generated in the specified destination:"),Object(c.b)("div",{className:"admonition admonition-shell"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(c.b)("path",Object(n.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"With ",Object(c.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn generate\n")))),Object(c.b)("div",{className:"admonition admonition-shell"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(c.b)("path",Object(n.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"With ",Object(c.b)("inlineCode",{parentName:"h5"},"npm"))),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"npm run generate\n")))))}p.isMDXComponent=!0},321:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return l}));var n=a(1),i=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=i.a.createContext({}),p=function(e){var t=i.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},d=function(e){var t=p(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),d=p(a),s=n,l=d["".concat(b,".").concat(s)]||d[s]||h[s]||c;return a?i.a.createElement(l,m(m({ref:t},o),{},{components:a})):i.a.createElement(l,m({ref:t},o))}));function l(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=s;var m={};for(var r in t)hasOwnProperty.call(t,r)&&(m[r]=t[r]);m.originalType=e,m.mdxType="string"==typeof e?e:n,b[1]=m;for(var o=2;o<c;o++)b[o]=a[o];return i.a.createElement.apply(null,b)}return i.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);