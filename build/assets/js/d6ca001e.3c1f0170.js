"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[33103],{36002:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=i(74848),a=i(28453);const s={title:"Waitlisted Participants",description:"Events, methods and data to manage waiting room participants.",sidebar_position:4,tags:["ios-core","participants","waitlisted","waiting room"]},r=void 0,c={id:"participants/waitlisted-participants",title:"Waitlisted Participants",description:"Events, methods and data to manage waiting room participants.",source:"@site/docs/ios-core/participants/waitlisted-participants.mdx",sourceDirName:"participants",slug:"/participants/waitlisted-participants",permalink:"/ios-core/participants/waitlisted-participants",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/ios-core/participants/waitlisted-participants.mdx",tags:[{label:"ios-core",permalink:"/ios-core/tags/ios-core"},{label:"participants",permalink:"/ios-core/tags/participants"},{label:"waitlisted",permalink:"/ios-core/tags/waitlisted"},{label:"waiting room",permalink:"/ios-core/tags/waiting-room"}],version:"current",lastUpdatedAt:1723755734,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:4,frontMatter:{title:"Waitlisted Participants",description:"Events, methods and data to manage waiting room participants.",sidebar_position:4,tags:["ios-core","participants","waitlisted","waiting room"]},sidebar:"tutorialSidebar",previous:{title:"Participant Events",permalink:"/ios-core/participants/events"},next:{title:"Introducing chat",permalink:"/ios-core/chat/introduction"}},o={},d=[{value:"Accepting Requests",id:"accepting-requests",level:3},{value:"Rejecting Requests",id:"rejecting-requests",level:3},{value:"Waiting Room Events",id:"waiting-room-events",level:3}];function p(t){const e={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...t.components},{Head:i}=e;return i||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.p,{children:["Participants in the waiting room are represented by ",(0,n.jsx)(e.code,{children:"ProductDBWaitlistedParticipant"})," objects. If the local user has the permission to\naccept waiting room requests (",(0,n.jsx)(e.code,{children:"selfPermissions.host.canAcceptRequests"})," is true), you can manage pending waiting room requests,\naccepting or rejecting them as needed.\nYou can access the list of waitlisted participants via the ",(0,n.jsx)(e.code,{children:"meeting.participants.waitlisted"})," property."]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Note"}),": If the local user is not a host, ",(0,n.jsx)(e.code,{children:"meeting.participants.waitlisted"})," property returns an empty list."]}),"\n",(0,n.jsx)(e.h3,{id:"accepting-requests",children:"Accepting Requests"}),"\n",(0,n.jsxs)(e.p,{children:["To accept a waiting room request, use the acceptWaitListedRequest() method on a ",(0,n.jsx)(e.code,{children:"ProductDBWaitlistedParticipant"})," object:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-swift",children:"let waitlistedParticipant = meeting.participants.waitlisted[0]\nwaitlistedParticipant.acceptWaitListedRequest()\n"})}),"\n",(0,n.jsx)(e.h3,{id:"rejecting-requests",children:"Rejecting Requests"}),"\n",(0,n.jsxs)(e.p,{children:["To deny a waiting room request, use the ",(0,n.jsx)(e.code,{children:"rejectWaitListedRequest()"})," method on a ",(0,n.jsx)(e.code,{children:"ProductDBWaitlistedParticipant"})," object:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-swift",children:"let waitlistedParticipant = meeting.participants.waitlisted[0]\nwaitlistedParticipant.rejectWaitListedRequest()\n"})}),"\n",(0,n.jsx)(e.h3,{id:"waiting-room-events",children:"Waiting Room Events"}),"\n",(0,n.jsxs)(e.p,{children:["Implement the ",(0,n.jsx)(e.code,{children:"ProductDBWaitlistEventsListener"})," interface to listen for events related to the waiting room:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-swift",children:"extension MeetingViewModel: ProductDBWaitlistEventsListener {\n\n  func onWaitListParticipantJoined(participant: ProductDBMeetingParticipant) {\n      // triggered when waitList peer is joined\n  }\n\n  func onWaitListParticipantAccepted(participant: ProductDBMeetingParticipant) {\n      // triggered when waitListed peer is accepted by host\n  }\n\n  func onWaitListParticipantRejected(participant: ProductDBMeetingParticipant) {\n      // triggered when entry of waitListed peer declined by host\n  }\n\n  func onWaitListParticipantClosed(participant: ProductDBMeetingParticipant) {\n      // triggered when waitListed peer get's disconnected\n  }\n}\n"})}),"\n",(0,n.jsx)(i,{children:(0,n.jsx)("title",{children:"iOS Core Waitlisted Participants"})})]})}function l(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(p,{...t})}):p(t)}},28453:(t,e,i)=>{i.d(e,{R:()=>r,x:()=>c});var n=i(96540);const a={},s=n.createContext(a);function r(t){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:r(t.components),n.createElement(s.Provider,{value:e},t.children)}}}]);