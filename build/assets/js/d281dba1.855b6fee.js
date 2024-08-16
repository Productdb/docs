"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[48976],{94786:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var t=n(74848),s=n(28453);const l={title:"Methods",sidebar_position:1,description:"Learn the basic methods of using ProductDB Plugin SDK for efficient integration. Enhance your app's functionality with powerful plugin methods."},r=void 0,a={id:"usage/basic/methods",title:"Methods",description:"Learn the basic methods of using ProductDB Plugin SDK for efficient integration. Enhance your app's functionality with powerful plugin methods.",source:"@site/docs/plugin-sdk/usage/basic/methods.mdx",sourceDirName:"usage/basic",slug:"/usage/basic/methods",permalink:"/plugin-sdk/usage/basic/methods",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/plugin-sdk/usage/basic/methods.mdx",tags:[],version:"current",lastUpdatedAt:1723755734,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:1,frontMatter:{title:"Methods",sidebar_position:1,description:"Learn the basic methods of using ProductDB Plugin SDK for efficient integration. Enhance your app's functionality with powerful plugin methods."},sidebar:"tutorialSidebar",previous:{title:"Initialize Plugin",permalink:"/plugin-sdk/usage/basic/initialize"},next:{title:"Events",permalink:"/plugin-sdk/usage/basic/events"}},d={},o=[{value:"Initialize",id:"initialize",level:3},{value:"Initialize without data exchange",id:"initialize-without-data-exchange",level:3},{value:"Methods specific to staggered plugins",id:"methods-specific-to-staggered-plugins",level:2},{value:"Enable plugin for all users",id:"enable-plugin-for-all-users",level:3},{value:"Enable plugin for specific users",id:"enable-plugin-for-specific-users",level:3},{value:"Disable plugin for all users",id:"disable-plugin-for-all-users",level:3},{value:"Disable plugin for specific users",id:"disable-plugin-for-specific-users",level:3}];function c(e){const i={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{Head:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h3,{id:"initialize",children:"Initialize"}),"\n",(0,t.jsxs)(i.p,{children:["This method initializes the SDK and returns a plugin object. The Client SDK\n(web/mobile) receives a ",(0,t.jsx)(i.code,{children:"ready"})," event once the initialisation is complete."]}),"\n",(0,t.jsxs)(i.p,{children:["the ",(0,t.jsx)(i.code,{children:"ready"})," event signifies that the plugin is now ready for event/data\nexchange."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:"const plugin = await ProductDBPlugin.init();\n"})}),"\n",(0,t.jsx)(i.h3,{id:"initialize-without-data-exchange",children:"Initialize without data exchange"}),"\n",(0,t.jsxs)(i.p,{children:["This method initializes the SDK without emitting a ",(0,t.jsx)(i.code,{children:"ready"})," event to the client\nSDK. The user can choose to manually emit this later when the plugin is ready to\nstart event/data exchange with client SDK."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:"const plugin = await ProductDBPlugin.init({ ready: false });\n// do something ...\nplugin.ready();\n"})}),"\n",(0,t.jsx)(i.h2,{id:"methods-specific-to-staggered-plugins",children:"Methods specific to staggered plugins"}),"\n",(0,t.jsx)(i.admonition,{title:"Before you start",type:"info",children:(0,t.jsx)(i.p,{children:"Staggered plugins are plugins that are enabled only for specific users. By\ndefault these are only enabled for the user that opens them."})}),"\n",(0,t.jsx)(i.h3,{id:"enable-plugin-for-all-users",children:"Enable plugin for all users"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:"await plugin.enableForAll();\n"})}),"\n",(0,t.jsx)(i.h3,{id:"enable-plugin-for-specific-users",children:"Enable plugin for specific users"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Param"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"}),(0,t.jsx)(i.th,{children:"Default Value"}),(0,t.jsx)(i.th,{children:"Required"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"peerIds"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"string[]"})}),(0,t.jsx)(i.td,{children:"List of peer IDs for which plugin has to be enabled."}),(0,t.jsx)(i.td,{children:"-"}),(0,t.jsx)(i.td,{children:"false"})]})})]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-jsx",children:"const peerIds: string[] = ['...'];\nawait plugin.enableForPeers(peerIds);\n"})}),"\n",(0,t.jsx)(i.h3,{id:"disable-plugin-for-all-users",children:"Disable plugin for all users"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:"await plugin.disableForAll();\n"})}),"\n",(0,t.jsx)(i.h3,{id:"disable-plugin-for-specific-users",children:"Disable plugin for specific users"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Param"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"}),(0,t.jsx)(i.th,{children:"Default Value"}),(0,t.jsx)(i.th,{children:"Required"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"peerIds"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"string[]"})}),(0,t.jsx)(i.td,{children:"List of peer IDs for which plugin has to be disabled."}),(0,t.jsx)(i.td,{children:"-"}),(0,t.jsx)(i.td,{children:"false"})]})})]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-tsx",children:"const peerIds: string[] = ['...'];\nawait plugin.disableForPeers(peerIds);\n"})}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("title",{children:"Plugin SDK Methods"}),(0,t.jsx)("meta",{name:"description",content:"Learn the basic methods of using ProductDB Plugin SDK for efficient integration. Enhance your app's functionality with powerful plugin methods."})]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var t=n(96540);const s={},l=t.createContext(s);function r(e){const i=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);