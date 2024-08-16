"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[36785],{64111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=n(74848),o=n(28453);const r={image:"/static/ui-kit/1.x.x/components/productdb-plugins.svg",description:"Learn how to use and customize the ProductDBPluginViewController component in ProductDB's iOS UiKit with our detailed documentation."},s="ProductDBPluginScreenShareTabButton",c={id:"components/productdb-pluginScreenShareTab-button",title:"ProductDBPluginScreenShareTabButton",description:"Learn how to use and customize the ProductDBPluginViewController component in ProductDB's iOS UiKit with our detailed documentation.",source:"@site/docs/ios/components/productdb-pluginScreenShareTab-button.mdx",sourceDirName:"components",slug:"/components/productdb-pluginScreenShareTab-button",permalink:"/ios/components/productdb-pluginScreenShareTab-button",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/ios/components/productdb-pluginScreenShareTab-button.mdx",tags:[],version:"current",lastUpdatedAt:1723755734,formattedLastUpdatedAt:"Aug 15, 2024",frontMatter:{image:"/static/ui-kit/1.x.x/components/productdb-plugins.svg",description:"Learn how to use and customize the ProductDBPluginViewController component in ProductDB's iOS UiKit with our detailed documentation."},sidebar:"tutorialSidebar",previous:{title:"ProductDBPluginsView",permalink:"/ios/components/productdb-plugin-view"},next:{title:"ProductDBPluginViewController",permalink:"/ios/components/productdb-plugins"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"Topics:",id:"topics",level:2},{value:"Creating button",id:"creating-button",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Setting the image and title",id:"setting-the-image-and-title",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Parameters",id:"parameters-2",level:4}];function a(e){const t={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"productdbpluginscreensharetabbutton",children:"ProductDBPluginScreenShareTabButton"}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["Subclass of ",(0,i.jsx)(t.a,{href:"https://developer.apple.com/documentation/uikit/uibutton",children:"UIButton"}),(0,i.jsx)(t.br,{}),"\n","Mostly used to add plugin button to ",(0,i.jsx)(t.a,{href:"/ios/components/productdb-active-tab-selector-view",children:"ProductDBActiveTabSelectorView"})]}),"\n",(0,i.jsx)(t.h2,{id:"topics",children:"Topics:"}),"\n",(0,i.jsx)(t.h3,{id:"creating-button",children:"Creating button"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:'init(image: ProductDBImage?, title: String = "", id: String = "", appearance: ProductDBPluginScreenShareTabButtonDesignDependency = ProductDBPluginScreenShareTabButtonDesignDependencyModel()) \n'})}),"\n",(0,i.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"Required"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"image:"})," Image of type ",(0,i.jsx)(t.code,{children:"ProductDBImage"})," to be shown on extreme left.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:"Optional"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"title:"})," Title of type String to be shown as button title.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"id:"})," identifier used to identify this button.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"appearance:"})," Any type that confirms to ProductDBPluginScreenShareTabButtonDesignDependency"]}),"\n",(0,i.jsx)("img",{src:"/static/ios/ios_active_HorizontalView.png",alt:"Example Image",width:"400",height:"200"}),"\n",(0,i.jsx)(t.p,{children:"For example in above image , We have created three buttons"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:['With title "Rustpad V2" and isSelected = ',(0,i.jsx)(t.code,{children:"false"})]}),"\n",(0,i.jsxs)(t.li,{children:['With title "Excalidraw" and isSelected = ',(0,i.jsx)(t.code,{children:"false"})]}),"\n",(0,i.jsxs)(t.li,{children:['With title "DocShare" and isSelected = ',(0,i.jsx)(t.code,{children:"true"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"setting-the-image-and-title",children:"Setting the image and title"}),"\n",(0,i.jsxs)(t.p,{children:["Set the image and title which is used when client sets ",(0,i.jsx)(t.code,{children:"UIButton"})," ",(0,i.jsx)(t.a,{href:"https://developer.apple.com/documentation/uikit/uicontrol/1618203-isselected",children:"isSelected"})," property"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:"func setSelected(image: ProductDBImage)\n"})}),"\n",(0,i.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"image:"})," Image of type ",(0,i.jsx)(t.code,{children:"ProductDBImage"})," to be shown on extreme left when ",(0,i.jsx)(t.a,{href:"https://developer.apple.com/documentation/uikit/uicontrol/1618203-isselected",children:"isSelected"})," sets to ",(0,i.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:"func setSelected(title: String)\n"})}),"\n",(0,i.jsx)(t.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"title:"})," Title of type String to be shown when ",(0,i.jsx)(t.a,{href:"https://developer.apple.com/documentation/uikit/uicontrol/1618203-isselected",children:"isSelected"})," sets to ",(0,i.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,i.jsx)(n,{children:(0,i.jsx)("title",{children:"iOS ProductDBPluginViewController"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var i=n(96540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);