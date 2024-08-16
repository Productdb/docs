"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[74330],{93457:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var n=o(74848),c=o(28453);const i={image:"/static/ui-kit/1.x.x/components/productdb-clock.svg",description:"Learn how to use and customize the ProductDBClockView component in ProductDB's iOS UiKit with our detailed documentation."},r="ProductDBClockView",s={id:"components/productdb-clock",title:"ProductDBClockView",description:"Learn how to use and customize the ProductDBClockView component in ProductDB's iOS UiKit with our detailed documentation.",source:"@site/docs/ios/components/productdb-clock.mdx",sourceDirName:"components",slug:"/components/productdb-clock",permalink:"/ios/components/productdb-clock",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/ios/components/productdb-clock.mdx",tags:[],version:"current",lastUpdatedAt:1723755734,formattedLastUpdatedAt:"Aug 15, 2024",frontMatter:{image:"/static/ui-kit/1.x.x/components/productdb-clock.svg",description:"Learn how to use and customize the ProductDBClockView component in ProductDB's iOS UiKit with our detailed documentation."},sidebar:"tutorialSidebar",previous:{title:"ProductDBChatViewController",permalink:"/ios/components/productdb-chat"},next:{title:"ConfigureWebinerAlertView",permalink:"/ios/components/productdb-configure-alertview-protocol"}},d={},a=[{value:"Overview",id:"overview",level:2},{value:"Topics:",id:"topics",level:3},{value:"Creating a clock view",id:"creating-a-clock-view",level:3},{value:"Parameters:",id:"parameters",level:4}];function l(e){const t={br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components},{Head:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"productdbclockview",children:"ProductDBClockView"}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["This view is used to show elapsed time for the meeting in the format Hours:Minute",":Seconds","."]}),"\n",(0,n.jsx)(t.h3,{id:"topics",children:"Topics:"}),"\n",(0,n.jsx)(t.h3,{id:"creating-a-clock-view",children:"Creating a clock view"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:" init(meeting: ProductDBMobileClient, appearance: ProductDBTextAppearance = AppTheme.shared.clockViewAppearance) \n"})}),"\n",(0,n.jsx)(t.p,{children:"Creates a ProductDBClockView for meeting passed."}),"\n",(0,n.jsx)(t.h4,{id:"parameters",children:"Parameters:"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Required"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"meeting:"})," Current ongoing meeting object.",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.em,{children:"Optional"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"appearance:"}),' Any type which conforms to protocol "ProductDBTextAppearance"']}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:"private lazy var clockView: ProductDBClockView = {\n    let label = ProductDBClockView(meeting: self.meeting)\n    label.textAlignment = .left\n    return label\n}()\n"})}),"\n",(0,n.jsx)(o,{children:(0,n.jsx)("title",{children:"iOS ProductDBClockView"})})]})}function u(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>s});var n=o(96540);const c={},i=n.createContext(c);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);