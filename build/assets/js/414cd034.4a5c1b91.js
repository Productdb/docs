"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[48884],{97425:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=i(74848),r=i(28453);const a={title:"Participant Types",description:"Events, methods and data pertaining to meeting participants.",sidebar_position:1,slug:"/participants/",tags:["flutter-core","participants"]},s="Participant Types",c={id:"participants/remote-participants",title:"Participant Types",description:"Events, methods and data pertaining to meeting participants.",source:"@site/docs/flutter-core/participants/remote-participants.mdx",sourceDirName:"participants",slug:"/participants/",permalink:"/flutter-core/participants/",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/flutter-core/participants/remote-participants.mdx",tags:[{label:"flutter-core",permalink:"/flutter-core/tags/flutter-core"},{label:"participants",permalink:"/flutter-core/tags/participants"}],version:"current",lastUpdatedAt:1723755734,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:1,frontMatter:{title:"Participant Types",description:"Events, methods and data pertaining to meeting participants.",sidebar_position:1,slug:"/participants/",tags:["flutter-core","participants"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/flutter-core/participants/introduction"},next:{title:"Participant Object",permalink:"/flutter-core/participants/participant-object"}},o={},p=[];function l(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...t.components},{Head:i}=e;return i||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"participant-types",children:"Participant Types"}),"\n",(0,n.jsxs)(e.p,{children:["The data regarding all meeting participants is stored under ",(0,n.jsx)(e.code,{children:"meeting.participants"}),". These ",(0,n.jsx)(e.strong,{children:"does not"})," include the local user. Use the methods and events to consume the participants data. For example, to get all the participants who joined the meeting:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-kotlin",children:"// get all joined participants\nfinal List<ProductDBJoinedMeetingParticipant> joined = dyteMobileClient.participants.active;\n\n// get active participants\nfinal List<ProductDBJoinedMeetingParticipant> active = dyteMobileClient.participants.active;\n"})}),"\n",(0,n.jsxs)(e.p,{children:["The ",(0,n.jsx)(e.code,{children:"dyteMobileClient.participants"})," object has the following ",(0,n.jsx)(e.strong,{children:"lists"})," of participants"]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"joined"}),": A list that contains all the participants who are currently in the meeting\nexcept the local user"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"waitlisted"}),": A list that contains all the participants waiting to join the\nmeeting."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"active"}),": A list that contains all the participants, ",(0,n.jsx)(e.strong,{children:"including"})," the local user whose media is subscribed to i.e participants who are supposed to be on the screen at the moment, including the local user."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"pinned"}),": A list that contains all the pinned participants of the meeting."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"screenShares"}),": A list that contains all the participants who are sharing their screen."]}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["Therefore if you were to make a video / audio grid of participants, you'd use the ",(0,n.jsx)(e.code,{children:"active"})," list, but to display the list of all participants in the meeting you'd use the ",(0,n.jsx)(e.code,{children:"joined"})," list."]}),"\n",(0,n.jsxs)(e.p,{children:["Each participant in each of the ",(0,n.jsx)(e.code,{children:"joined"}),", ",(0,n.jsx)(e.code,{children:"active"}),", ",(0,n.jsx)(e.code,{children:"pinned"})," and ",(0,n.jsx)(e.code,{children:"screenShares"})," list are of type ",(0,n.jsx)(e.code,{children:"ProductDBJoinedMeetingParticipant"}),", ",(0,n.jsx)(e.code,{children:"waitlisted"})," list is of type ",(0,n.jsx)(e.code,{children:"ProductDBWaitlistedParticipant"}),"."]}),"\n",(0,n.jsx)(i,{children:(0,n.jsx)("title",{children:"Flutter Core Participants"})})]})}function d(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(l,{...t})}):l(t)}},28453:(t,e,i)=>{i.d(e,{R:()=>s,x:()=>c});var n=i(96540);const r={},a=n.createContext(r);function s(t){const e=n.useContext(a);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:s(t.components),n.createElement(a.Provider,{value:e},t.children)}}}]);