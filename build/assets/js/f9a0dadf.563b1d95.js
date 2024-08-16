"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[97044],{91853:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>t,default:()=>m,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var o=s(74848),i=s(28453);const n={title:"Media Permission Errors",description:"Local user media guide to local media permission errors.",sidebar_position:4,tags:["web-core","local-user","self","self events"]},t="Media Permission Errors",a={id:"local-user/media-permission-errors",title:"Media Permission Errors",description:"Local user media guide to local media permission errors.",source:"@site/docs/web-core/local-user/media-permission-errors.mdx",sourceDirName:"local-user",slug:"/local-user/media-permission-errors",permalink:"/web-core/local-user/media-permission-errors",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/web-core/local-user/media-permission-errors.mdx",tags:[{label:"web-core",permalink:"/web-core/tags/web-core"},{label:"local-user",permalink:"/web-core/tags/local-user"},{label:"self",permalink:"/web-core/tags/self"},{label:"self events",permalink:"/web-core/tags/self-events"}],version:"current",lastUpdatedAt:1723750666,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:4,frontMatter:{title:"Media Permission Errors",description:"Local user media guide to local media permission errors.",sidebar_position:4,tags:["web-core","local-user","self","self events"]},sidebar:"tutorialSidebar",previous:{title:"Manage Media Devices",permalink:"/web-core/local-user/manage-media-devices"},next:{title:"Other Methods",permalink:"/web-core/local-user/extras"}},c={},d=[];function l(e){const r={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components},{Head:s}=r;return s||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"media-permission-errors",children:"Media Permission Errors"}),"\n",(0,o.jsx)(r.p,{children:"This event is triggered when ProductDB fails to acquire the user's local media\n(camera and/or microphone) or user revokes the permission for media devices."}),"\n",(0,o.jsx)(r.p,{children:"Your application can catch these errors like below:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"meeting.self.on('mediaPermissionError', ({\n    message,\n    kind\n}) => {\n    console.log(`Failed to capture ${kind}:  ${message}`);\n});\n"})}),"\n",(0,o.jsx)(r.p,{children:"This event shares information that can be used to show appropriate message for\nthe user."}),"\n",(0,o.jsxs)(r.p,{children:["Possible values for ",(0,o.jsx)(r.strong,{children:"message"})," are"]}),"\n",(0,o.jsx)(r.p,{children:"DENIED  - Permission was denied by the user"}),"\n",(0,o.jsx)(r.p,{children:"SYSTEM_DENIED   - Permission was denied by the system"}),"\n",(0,o.jsx)(r.p,{children:"COULD_NOT_START - Failed to capture media stream from the hardware"}),"\n",(0,o.jsxs)(r.p,{children:["Possible values for ",(0,o.jsx)(r.strong,{children:"kind"})," - ",(0,o.jsx)(r.code,{children:"audio"}),", ",(0,o.jsx)(r.code,{children:"video"}),", ",(0,o.jsx)(r.code,{children:"screenshare"})]}),"\n",(0,o.jsx)(s,{children:(0,o.jsx)("title",{children:"Web Core Media Permission Errors"})})]})}function m(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>t,x:()=>a});var o=s(96540);const i={},n=o.createContext(i);function t(e){const r=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(n.Provider,{value:r},e.children)}}}]);