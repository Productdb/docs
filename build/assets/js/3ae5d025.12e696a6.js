"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[94018],{67552:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(74848),s=t(28453);const i={title:"Other Methods",description:"Methods to manage the local user.",sidebar_position:5,tags:["rn-core","local-user","self","methods"]},o=void 0,a={id:"local-user/extras",title:"Other Methods",description:"Methods to manage the local user.",source:"@site/docs/rn-core/local-user/extras.mdx",sourceDirName:"local-user",slug:"/local-user/extras",permalink:"/rn-core/local-user/extras",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/rn-core/local-user/extras.mdx",tags:[{label:"rn-core",permalink:"/rn-core/tags/rn-core"},{label:"local-user",permalink:"/rn-core/tags/local-user"},{label:"self",permalink:"/rn-core/tags/self"},{label:"methods",permalink:"/rn-core/tags/methods"}],version:"current",lastUpdatedAt:1721134929,formattedLastUpdatedAt:"Jul 16, 2024",sidebarPosition:5,frontMatter:{title:"Other Methods",description:"Methods to manage the local user.",sidebar_position:5,tags:["rn-core","local-user","self","methods"]},sidebar:"tutorialSidebar",previous:{title:"Media Permission Errors",permalink:"/rn-core/local-user/media-permission-errors"},next:{title:"Room Metadata",permalink:"/rn-core/room-metadata"}},l={},c=[{value:"Update media resolution at runtime",id:"update-media-resolution-at-runtime",level:2},{value:"Camera",id:"camera",level:3},{value:"Screenshare",id:"screenshare",level:3},{value:"Pinning &amp; unpinning",id:"pinning--unpinning",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"update-media-resolution-at-runtime",children:"Update media resolution at runtime"}),"\n",(0,r.jsx)(n.h3,{id:"camera",children:"Camera"}),"\n",(0,r.jsx)(n.p,{children:"meeting.self.updateVideoConstraints(resolution)"}),"\n",(0,r.jsx)(n.p,{children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"meeting.self.updateVideoConstraints({\n  width: { ideal: 1920 },\n  height: { ideal: 1080 },\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"screenshare",children:"Screenshare"}),"\n",(0,r.jsx)(n.p,{children:"meeting.self.updateScreenshareConstraints(resolution)"}),"\n",(0,r.jsx)(n.p,{children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"meeting.self.updateScreenshareConstraints({\n  width: { ideal: 1920 },\n  height: { ideal: 1080 },\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"pinning--unpinning",children:"Pinning & unpinning"}),"\n",(0,r.jsxs)(n.p,{children:["You can pin or unpin yourself given you have the appropriate permissions. You\ncan check the pinned status of the local user using ",(0,r.jsx)(n.code,{children:"meeting.isPinned"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"meeting.self.pin();\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"meeting.self.unpin();\n"})}),"\n",(0,r.jsx)(t,{children:(0,r.jsx)("title",{children:"React Native Core Other Methods"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);