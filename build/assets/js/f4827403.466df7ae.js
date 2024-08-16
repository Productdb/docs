"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[58481],{82262:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var o=n(74848),i=n(28453);const d={image:"/static/ui-kit/1.x.x/components/productdb-meeting.svg",description:"Learn how to use and customize the ProductDBUIKit component in ProductDB's Android with our detailed documentation."},r="ProductDBUIKit",c={id:"components/productdb-meeting",title:"ProductDBUIKit",description:"Learn how to use and customize the ProductDBUIKit component in ProductDB's Android with our detailed documentation.",source:"@site/docs/android/components/productdb-meeting.mdx",sourceDirName:"components",slug:"/components/productdb-meeting",permalink:"/android/components/productdb-meeting",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/android/components/productdb-meeting.mdx",tags:[],version:"current",lastUpdatedAt:1723755734,formattedLastUpdatedAt:"Aug 15, 2024",frontMatter:{image:"/static/ui-kit/1.x.x/components/productdb-meeting.svg",description:"Learn how to use and customize the ProductDBUIKit component in ProductDB's Android with our detailed documentation."},sidebar:"tutorialSidebar",previous:{title:"ProductDBMeetingTitleView",permalink:"/android/components/productdb-meeting-title"},next:{title:"ProductDBMicToggleButton",permalink:"/android/components/productdb-mic-toggle"}},s={},a=[];function u(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...t.components},{Head:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"productdbuikit",children:"ProductDBUIKit"}),"\n",(0,o.jsx)(e.p,{children:"A single component which renders an entire meeting UI."}),"\n",(0,o.jsx)(e.p,{children:"It loads your preset and renders the UI based on it. With this component, you\ndon't have to handle all the states, dialogs and other smaller bits of managing\nthe application."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-kotlin",children:"val meetingInfo = ProductDBMeetingInfoV2(\n  authToken = authToken,\n  baseUrl = baseUrl\n)\nval dyteUIKitInfo = ProductDBUIKitInfo(\n  activity = this,\n  dyteMeetingInfo = meetingInfo\n)\nval dyteUIKit = ProductDBUIKitBuilder.build(dyteUIKitInfo)\ndyteUIKit.startMeeting()\n"})}),"\n",(0,o.jsx)(n,{children:(0,o.jsx)("title",{children:"Android ProductDBUIKit"})})]})}function p(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(u,{...t})}):u(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>c});var o=n(96540);const i={},d=o.createContext(i);function r(t){const e=o.useContext(d);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),o.createElement(d.Provider,{value:e},t.children)}}}]);