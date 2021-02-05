(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1195:function(module,exports,__webpack_require__){"use strict";__webpack_require__(3),__webpack_require__(51),__webpack_require__(41),__webpack_require__(1196),__webpack_require__(1197),__webpack_require__(7),__webpack_require__(42);var _clientApi=__webpack_require__(55),_clientLogger=__webpack_require__(36),_configFilename=__webpack_require__(1198);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1198:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1199:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(396).configure)([__webpack_require__(1200),__webpack_require__(1202),__webpack_require__(1203),__webpack_require__(1214)],module,!1)}).call(this,__webpack_require__(109)(module))},1200:function(module,exports,__webpack_require__){var map={"./stories/Introduction.stories.mdx":1201};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1200},1201:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(17),__webpack_require__(4),__webpack_require__(7),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(231),_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(549),_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_6__),_assets_colors_svg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(550),_assets_colors_svg__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_assets_colors_svg__WEBPACK_IMPORTED_MODULE_7__),_assets_comments_svg__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(551),_assets_comments_svg__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_assets_comments_svg__WEBPACK_IMPORTED_MODULE_8__),_assets_direction_svg__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(552),_assets_direction_svg__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_assets_direction_svg__WEBPACK_IMPORTED_MODULE_9__),_assets_flow_svg__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(553),_assets_flow_svg__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_assets_flow_svg__WEBPACK_IMPORTED_MODULE_10__),_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(554),_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_11__),_assets_repo_svg__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(555),_assets_repo_svg__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(_assets_repo_svg__WEBPACK_IMPORTED_MODULE_12__),_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(556),_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_13__);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.Meta,{title:"Example/Introduction",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n\n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n\n"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("h1",{id:"welcome-to-storybook"},"Welcome to Storybook"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("p",null,"Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("p",null,"Browse example stories now by navigating to them in the sidebar.\nView their code in the ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("inlineCode",{parentName:"p"},"src/stories")," directory to learn how they work.\nWe recommend building UIs with a ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("a",{parentName:"p",href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("div",{className:"subheading"},"Configure"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("div",{className:"link-list"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/api/presets",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("img",{src:_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_11___default.a,alt:"plugin"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("img",{src:_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_13___default.a,alt:"Build"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("strong",null,"Build configuration"),"How to customize webpack and Babel")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("img",{src:_assets_colors_svg__WEBPACK_IMPORTED_MODULE_7___default.a,alt:"colors"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("strong",null,"Styling"),"How to load and configure CSS libraries")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("img",{src:_assets_flow_svg__WEBPACK_IMPORTED_MODULE_10___default.a,alt:"flow"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("strong",null,"Data"),"Providers and mocking for data libraries"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("div",{className:"subheading"},"Learn"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("div",{className:"link-list"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("img",{src:_assets_repo_svg__WEBPACK_IMPORTED_MODULE_12___default.a,alt:"repo"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("strong",null,"Storybook documentation"),"Configure, customize, and extend")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("a",{className:"link-item",href:"https://www.learnstorybook.com",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("img",{src:_assets_direction_svg__WEBPACK_IMPORTED_MODULE_9___default.a,alt:"direction"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("strong",null,"In-depth guides"),"Best practices from leading teams")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("img",{src:_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_6___default.a,alt:"code"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("strong",null,"GitHub project"),"View the source and add issues")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("a",{className:"link-item",href:"https://discord.gg/UUt2PJb",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("img",{src:_assets_comments_svg__WEBPACK_IMPORTED_MODULE_8___default.a,alt:"comments"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("strong",null,"Discord chat"),"Chat with maintainers and the community"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("div",{className:"tip-wrapper"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("span",{className:"tip"},"Tip"),"Edit the Markdown in ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)("code",null,"src/stories/Introduction.stories.mdx")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Example/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_5__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.mdx)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},1202:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1202},1203:function(module,exports,__webpack_require__){var map={"./src/lib/components/Button/Button.stories.tsx":1255};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1203},1214:function(module,exports,__webpack_require__){var map={"./src/lib/components/Card/Card.stories.tsx":1252};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1214},1252:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Children",(function(){return Children}));__webpack_require__(1215);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),__assign=(__webpack_require__(1238),__webpack_require__(519),__webpack_require__(334),function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)}),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Button_Button=function Button(props){var children=props.children,_a=props.onClick,onClick=void 0===_a?function(){}:_a,rest=__rest(props,["children","onClick"]),styles=Object(react.useMemo)((function(){return{padding:"10px",border:"2px solid #61dafb",borderRadius:"5px",textTransform:"uppercase",color:"black",cursor:"pointer"}}),[]);return react_default.a.createElement("button",__assign({style:styles,onClick:onClick},rest),null!=children?children:"EMPTY props.children")};Button_Button.__docgenInfo={description:"",methods:[],displayName:"Button"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/just-ui/lib/esm/components/Button/Button.js"]={name:"Button",docgenInfo:Button_Button.__docgenInfo,path:"packages/just-ui/lib/esm/components/Button/Button.js"});var jsx_runtime=__webpack_require__(74),Card_Card=function Card(props){var children=props.children;return Object(jsx_runtime.jsx)("div",{children:Object(jsx_runtime.jsx)(Button_Button,{children:children})})};Card_Card.displayName="Card";try{Card_Card.displayName="Card",Card_Card.__docgenInfo={description:"",displayName:"Card",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/just-ui-patterns/src/lib/components/Card/Card.tsx#Card"]={docgenInfo:Card_Card.__docgenInfo,name:"Card",path:"packages/just-ui-patterns/src/lib/components/Card/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Patterns/Card",component:Card_Card};var Card_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Card_Card,Object.assign({},args))};Card_stories_Template.displayName="Template";var Default=Card_stories_Template.bind({});Default.args={};var Children=Card_stories_Template.bind({});Children.args={children:Object(jsx_runtime.jsx)("span",{children:"Span"})},Default.parameters=Object.assign({storySource:{source:"(args) => <Card {...args} />"}},Default.parameters),Children.parameters=Object.assign({storySource:{source:"(args) => <Card {...args} />"}},Children.parameters)},1255:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"ClickHandler",(function(){return ClickHandler})),__webpack_require__.d(__webpack_exports__,"Children",(function(){return Children}));__webpack_require__(334),__webpack_require__(519),__webpack_require__(1212);var react=__webpack_require__(0),jsx_runtime=__webpack_require__(74);function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Button_Button=function Button(props){var children=props.children,_props$onClick=props.onClick,onClick=void 0===_props$onClick?function(){}:_props$onClick,rest=_objectWithoutProperties(props,["children","onClick"]),styles=Object(react.useMemo)((function(){return{padding:"10px",border:"2px solid #61dafb",borderRadius:"5px",textTransform:"uppercase",color:"black",cursor:"pointer"}}),[]);return Object(jsx_runtime.jsx)("button",Object.assign({style:styles,onClick:onClick},rest,{children:null!=children?children:"EMPTY props.children"}))};Button_Button.displayName="Button";try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{onClick:{defaultValue:null,description:"onClick handler, defaults to empty",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/just-ui/src/lib/components/Button/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"packages/just-ui/src/lib/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"UI/Button",component:Button_Button};var Button_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Button_Button,Object.assign({},args))};Button_stories_Template.displayName="Template";var Default=Button_stories_Template.bind({});Default.args={};var ClickHandler=Button_stories_Template.bind({});ClickHandler.args={onClick:function onClick(){window.alert("clicked!")}};var Children=Button_stories_Template.bind({});Children.args={children:Object(jsx_runtime.jsx)("span",{children:"Span"})},Default.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Default.parameters),ClickHandler.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},ClickHandler.parameters),Children.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Children.parameters)},549:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/code-brackets.2e1112d7.svg"},550:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/colors.a4bd0486.svg"},551:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/comments.a3859089.svg"},552:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/direction.b770f9af.svg"},553:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/flow.edad2ac1.svg"},554:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/plugin.d494b228.svg"},555:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/repo.6d496322.svg"},556:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/stackalt.dba9fbb3.svg"},559:function(module,exports,__webpack_require__){__webpack_require__(560),__webpack_require__(756),__webpack_require__(757),__webpack_require__(915),__webpack_require__(1136),__webpack_require__(1169),__webpack_require__(1174),__webpack_require__(1186),__webpack_require__(1188),__webpack_require__(1193),__webpack_require__(1195),module.exports=__webpack_require__(1199)},666:function(module,exports){},757:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(396)}},[[559,1,2]]]);
//# sourceMappingURL=main.f2903d34937f4a77a379.bundle.js.map