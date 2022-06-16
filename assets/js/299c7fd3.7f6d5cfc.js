"use strict";(self.webpackChunkherbjs_website=self.webpackChunkherbjs_website||[]).push([[1887],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(o,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97687:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),i=["components"],c={id:"features",title:"Spec Features",sidebar_label:"Features",slug:"/specs/features"},o=void 0,p={unversionedId:"specs/features",id:"specs/features",title:"Spec Features",description:"Basic Spec",source:"@site/docs/specs/features.md",sourceDirName:"specs",slug:"/specs/features",permalink:"/docs/specs/features",editUrl:"https://github.com/herbsjs/herbsjs.github.io/blob/master/docs/specs/features.md",tags:[],version:"current",frontMatter:{id:"features",title:"Spec Features",sidebar_label:"Features",slug:"/specs/features"},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/docs/specs/getting-started"},next:{title:"Getting Started",permalink:"/docs/validation/getting-started"}},l={},u=[{value:"Basic Spec",id:"basic-spec",level:2},{value:"Use Case Spec",id:"use-case-spec",level:2},{value:"Samples",id:"samples",level:2},{value:"Context",id:"context",level:2},{value:"Assertion",id:"assertion",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"basic-spec"},"Basic Spec"),(0,s.kt)("p",null,"A ",(0,s.kt)("inlineCode",{parentName:"p"},"spec")," represents the primary structure where the scenarios will be placed. It can have one or several scenarios:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const updateUserSpec = spec({\n    'Update valid User': scenario({ ... }),\n    'Do not update invalid User': scenario({ ... }),\n})\n")),(0,s.kt)("p",null,"A ",(0,s.kt)("inlineCode",{parentName:"p"},"scenario")," represents a context with input (",(0,s.kt)("inlineCode",{parentName:"p"},"given"),"), action (",(0,s.kt)("inlineCode",{parentName:"p"},"when"),") and the output validation (",(0,s.kt)("inlineCode",{parentName:"p"},"check"),"). "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const taskCountSpec = spec({\n    'Change count for the task': scenario({\n        'Given a valid task': given({ task: 'do it', count: 0 }),\n        'When increase count': when((ctx) => (ctx.count++)),\n        'Must have a increased count': check((ctx) => { assert.ok(ctx.count === 1) }),\n    }),\n})\n")),(0,s.kt)("p",null,"It is possible to have many ",(0,s.kt)("inlineCode",{parentName:"p"},"given")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"check")," on the same scenario."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const billingSpec = spec({\n    'Calculate a valid bill': scenario({\n        'Given valid items': given({ ... }),\n        'Given a discount': given(async () => { ... }),\n        'When calculate the bill': when((ctx) => ...),\n        'Must have a valid bill': check((ctx) => ...),\n        'Must have a discount': check((ctx) => ...),\n    }),\n})\n")),(0,s.kt)("h2",{id:"use-case-spec"},"Use Case Spec"),(0,s.kt)("p",null,"When informed a use case the spec will assume all the scenarios are about this use case."),(0,s.kt)("p",null,"This will change the behavior of each scenario since it will not necessary to declare a ",(0,s.kt)("inlineCode",{parentName:"p"},"when"),". "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const updateUser = require('./updateUser')\n\nconst updateUserSpec = spec({\n\n    usecase: updateUser, \n    \n    'Update a existing user when it is valid': scenario({\n        'Given a valid user': given({\n            request: { id: 1 },\n            user: { can: true },\n            injection: { userRepo: ... },\n        }),\n        // when: default for use case\n        'Must run without errors': check((ctx) => { assert.ok(ctx.response.isOk) }),\n        'Must confirm update': check((ctx) => { assert.ok(ctx.response.ok === true) })\n    }),\n})\n")),(0,s.kt)("p",null,"In order to run, the scenario expects a ",(0,s.kt)("inlineCode",{parentName:"p"},"given")," returning a object with ",(0,s.kt)("inlineCode",{parentName:"p"},"request"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"user")," (for use case authentication) and ",(0,s.kt)("inlineCode",{parentName:"p"},"injection"),". "),(0,s.kt)("p",null,"The result of the use case execution is stored in ",(0,s.kt)("inlineCode",{parentName:"p"},"ctx.response"),"."),(0,s.kt)("h2",{id:"samples"},"Samples"),(0,s.kt)("p",null,"If instead of validating the scenario with just one input you want to validate the set of inputs it is possible to use ",(0,s.kt)("inlineCode",{parentName:"p"},"samples"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const updateProjectSpec = spec({\n\n    usecase: updateProject,\n    \n    'Update a existing project': scenario({\n        'Projects with due dates': samples([\n            { duedate: ... },               // item 1\n            { duedate: ... },               // item 2\n        ]),\n        'Projects with tasks': samples([\n            { tasks: [] },                  // item 1\n            { tasks: [{ task: ... }] },     // item 2\n        ]),\n        'Given a valid project': given((ctx) => ({\n            request: ctx.sample,  // each item in `samples()`\n            ...\n        })),\n        'Given a repository with a existing project': given((ctx) => ... ),\n        'Must run without errors': check((ctx) => ... ),\n        'Must confirm update': check((ctx) => ... )\n    })\n}),\n")),(0,s.kt)("p",null,"In the above scenario ",(0,s.kt)("inlineCode",{parentName:"p"},"'Update a existing project'")," it will run four times, one for each item in each ",(0,s.kt)("inlineCode",{parentName:"p"},"samples"),". The content of each run is available on ",(0,s.kt)("inlineCode",{parentName:"p"},"ctx.sample"),"."),(0,s.kt)("h2",{id:"context"},"Context"),(0,s.kt)("p",null,"The context is created by ",(0,s.kt)("inlineCode",{parentName:"p"},"givens")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"samples"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const updateUserSpec = spec({\n\n    'Update a existing user': scenario({\n        'Given a valid user': given({ name: 'Claudia' }),\n        'Print user name': check((ctx) => { console.log(ctx.name) }),\n        ...\n")),(0,s.kt)("p",null,"Or"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const updateUserSpec = spec({\n\n    'Update a existing user': scenario({\n        'Valid users': samples([\n            { name: 'Claudia' },               // item 1\n            { name: 'Claudio' },               // item 2\n        ]),\n        'Given a valid user': given((ctx) => ctx.sample),\n        'Print user name': check((ctx) => { console.log(ctx.name) }),\n        ...\n")),(0,s.kt)("h2",{id:"assertion"},"Assertion"),(0,s.kt)("p",null,"To validate a scenario it is necessary to go through checks with its assertions. If an assertion throws an exception, it is understood that that check failed."),(0,s.kt)("p",null,"It is possible to use any assertion library, including native node.js ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/api/assert.html#assert"},"assertion"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const createUserSpec = spec({\n\n    usecase: createUser, \n    \n    'Create a new user': scenario({\n        'Given a valid user': given(...),\n        'Must run without errors': check((ctx) => { \n            assert.ok(ctx.response.isOk) \n        }),\n        'Must return the created user': check((ctx) => { \n            assert.ok(ctx.response.ok === aGivenUser()) \n        })\n    }),\n})\n")))}m.isMDXComponent=!0}}]);