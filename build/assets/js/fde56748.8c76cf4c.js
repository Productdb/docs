"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[92022],{43245:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>u,metadata:()=>c,toc:()=>d});var n=r(74848),o=r(28453),a=r(74235),l=r(15947);const u={sidebar_position:1,slug:"/",description:"Learn about ProductDB's Command Line Interface (CLI) and its powerful commands. Streamline your workflow with our CLI tools."},i="ProductDB CLI",c={id:"installation",title:"ProductDB CLI",description:"Learn about ProductDB's Command Line Interface (CLI) and its powerful commands. Streamline your workflow with our CLI tools.",source:"@site/docs/cli/installation.mdx",sourceDirName:".",slug:"/",permalink:"/cli/",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/cli/installation.mdx",tags:[],version:"current",lastUpdatedAt:1723750666,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/",description:"Learn about ProductDB's Command Line Interface (CLI) and its powerful commands. Streamline your workflow with our CLI tools."},sidebar:"tutorialSidebar",next:{title:"Getting started",permalink:"/cli/getting-started"}},s={},d=[{value:"Installation",id:"installation",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Head:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"productdb-cli",children:"ProductDB CLI"}),"\n",(0,n.jsx)(t.p,{children:"The ProductDB CLI is a unified utility that helps you manage ProductDB services for your\norganization(s) directly from your command line."}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(t.p,{children:["You can install the CLI from the NPM registry using ",(0,n.jsx)(t.code,{children:"npm"})," or ",(0,n.jsx)(t.code,{children:"yarn"}),"."]}),"\n",(0,n.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,n.jsx)(l.A,{value:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install -g @dytesdk/cli\n"})})}),(0,n.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"yarn global add @dytesdk/cli\n"})})}),(0,n.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pnpm add -g @dytesdk/cli\n"})})})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("title",{children:"CLI ProductDB CLI"}),(0,n.jsx)("meta",{name:"description",content:"Learn about ProductDB's Command Line Interface (CLI) and its powerful commands. Streamline your workflow with our CLI tools."})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},15947:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(96540),o=r(18215);const a={tabItem:"tabItem_Ymn6"};function l({children:e,hidden:t,className:r}){return n.createElement("div",{role:"tabpanel",className:(0,o.A)(a.tabItem,r),hidden:t},e)}},74235:(e,t,r)=>{r.d(t,{A:()=>k});var n=r(96540),o=r(18215),a=r(52204),l=r(56347),u=r(13321),i=r(57641),c=r(73094),s=r(14278);function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function b(e){var t,r;return null!==(r=null===(t=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}function f(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:function(e){return b(e).map((({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n})))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m({value:e,tabValues:t}){return t.some((t=>t.value===e))}function h({queryString:e=!1,groupId:t}){const r=(0,l.W6)(),o=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),a=(0,i.aZ)(o),u=(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace(p(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){d(e,t,r[t])}))}return e}({},r.location),{search:t.toString()}))}),[o,r]);return[a,u]}function y(e){const{defaultValue:t,queryString:r=!1,groupId:o}=e,a=f(e),[l,i]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const n=null!==(r=t.find((e=>e.default)))&&void 0!==r?r:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,d]=h({queryString:r,groupId:o}),[p,b]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,o]=(0,s.Dv)(t);return[r,(0,n.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:o}),y=(()=>{const e=null!=c?c:p;return m({value:e,tabValues:a})?e:null})();(0,u.A)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var g=r(12075);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){w(e,t,r[t])}))}return e}function O(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function I({className:e,block:t,selectedValue:r,selectValue:l,tabValues:u}){const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),s=e=>{const t=e.currentTarget,n=i.indexOf(t),o=u[n].value;o!==r&&(c(t),l(o))},d=e=>{let t=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;var r;t=null!==(r=i[n])&&void 0!==r?r:i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;var n;t=null!==(n=i[r])&&void 0!==n?n:i[i.length-1];break}}null==t||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},e)},u.map((({value:e,label:t,attributes:a})=>n.createElement("li",O(j({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,key:e,ref:e=>i.push(e),onKeyDown:d,onClick:s},a),{className:(0,o.A)("tabs__item",v.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===e})}),null!=t?t:e))))}function P({lazy:e,children:t,selectedValue:r}){const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function x(e){const t=y(e);return n.createElement("div",{className:(0,o.A)("tabs-container",v.tabList)},n.createElement(I,j({},e,t)),n.createElement(P,j({},e,t)))}function k(e){const t=(0,g.A)();return n.createElement(x,j({key:String(t)},e),b(e.children))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>u});var n=r(96540);const o={},a=n.createContext(o);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);