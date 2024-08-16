"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[86157],{19295:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var t=o(74848),n=o(28453);const s={title:"System Error Codes",sidebar_position:11},i=void 0,d={id:"error-codes",title:"System Error Codes",description:"This information is intended for developers debugging or troubleshooting ProductDB's mobile core system errors.",source:"@site/docs/ios-core/error-codes.mdx",sourceDirName:".",slug:"/error-codes",permalink:"/ios-core/error-codes",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/ios-core/error-codes.mdx",tags:[],version:"current",lastUpdatedAt:1723755734,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:11,frontMatter:{title:"System Error Codes",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Voting on a poll",permalink:"/ios-core/polls/voting-on-a-poll"},next:{title:"Release Notes",permalink:"/ios-core/release-notes"}},c={},a=[{value:"Error codes and format",id:"error-codes-and-format",level:2},{value:"Meeting error codes",id:"meeting-error-codes",level:3}];function l(e){const r={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components},{Head:o}=r;return o||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.admonition,{title:"Note",type:"info",children:(0,t.jsx)(r.p,{children:"This information is intended for developers debugging or troubleshooting ProductDB's mobile core system errors."})}),"\n",(0,t.jsx)(r.p,{children:"Error codes are a standardized method for developers to convey application errors and issues to users or other developers in a structured manner. Error codes typically consist of a numerical or alphanumeric code and a description that provides more information about the error."}),"\n",(0,t.jsx)(r.p,{children:"This document lists ProductDB's iOS core error codes that you may encounter in various scenarios. System error codes can arise in different parts of the system, and their descriptions may not always provide exact details. To address these codes effectively, you must first understand the programmatic and runtime contexts in which these errors occurred."}),"\n",(0,t.jsx)(r.h2,{id:"error-codes-and-format",children:"Error codes and format"}),"\n",(0,t.jsx)(r.p,{children:"Error codes consist of a number that are categorized by the type of error and a message that provides more information about the error. The error code format is as follows:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-swift",children:"class ProductDBError {\n    let code: Int\n    let message: String\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"meeting-error-codes",children:"Meeting error codes"}),"\n",(0,t.jsxs)(r.p,{children:["Meeting error codes are used to indicate errors that occur during meeting operations. These errors are typically returned by the methods of the ",(0,t.jsx)(r.code,{children:"meeting"})," object such as ",(0,t.jsx)(r.code,{children:"init()"}),", ",(0,t.jsx)(r.code,{children:"join()"}),"."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"1000: Invalid auth token."}),"\n",(0,t.jsx)(r.li,{children:"1002: Failed to initialize meeting."}),"\n",(0,t.jsx)(r.li,{children:"1003: Invalid base URL."}),"\n",(0,t.jsx)(r.li,{children:"1005: Failed to join room."}),"\n",(0,t.jsx)(r.li,{children:"4000: Something went wrong."}),"\n"]}),"\n",(0,t.jsx)(o,{children:(0,t.jsx)("title",{children:"iOS Core System Error Codes"})})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,r,o)=>{o.d(r,{R:()=>i,x:()=>d});var t=o(96540);const n={},s=t.createContext(n);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);