"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[3821],{58717:(e,t,n)=>{n.d(t,{Ay:()=>c});var i=n(74848),r=n(28453);n(25629),n(92469);function o(e){const t={a:"a",code:"code",h3:"h3",img:"img",p:"p",...(0,r.R)(),...e.components},{Card:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Card",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{children:(0,i.jsxs)(t.p,{children:["Now that you have your ProductDB API Key, you can move on to integrating ProductDB's\nREST APIs with your server code. This diagram walks you through the flow\nrequest of starting a ",e.product," call via ProductDB."]})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Diagram explaining how ProductDB works",src:n(16222).A+"",width:"1920",height:"1115"})}),"\n",(0,i.jsxs)(t.p,{children:["It all starts with creating a meeting which is needed to start a live video call. After a meeting has been created on ProductDB's server, you can now add participants to the meeting. Each participant is given an ",(0,i.jsx)(t.code,{children:"authToken"})," which is necessary for your client side to further interact with the meeting."]}),"\n",(0,i.jsx)(t.p,{children:"Let's dive into further details."}),"\n",(0,i.jsx)(t.h3,{id:"create-a-meeting",children:"Create a meeting"}),"\n",(0,i.jsxs)(t.p,{children:["Create a ProductDB meeting using the ",(0,i.jsx)(t.a,{href:"/api#/operations/create_meeting",children:"Create Meeting API"}),". The API returns a unique identifier for your meeting which you will be using later."]}),"\n",(0,i.jsx)(t.p,{children:"ProductDB meetings do not have a specific date or time associated to them, so you can either create\nthem in advance or right when users need to join the meeting."}),"\n",(0,i.jsx)(t.h3,{id:"add-participants",children:"Add Participants"}),"\n",(0,i.jsxs)(t.p,{children:["Now that you have a meeting, it's time to add participants to the meeting. Call the ",(0,i.jsx)(t.a,{href:"/api#/operations/add_participant",children:"Add Participant API"})," with the unique identifier of your meeting. To specify the preset that your participant should use, remember to pass the ",(0,i.jsx)(t.code,{children:"preset_name"})," parameter as well."]}),"\n",(0,i.jsxs)(t.p,{children:["On successfully creating a participant, you will receive an authorization token (",(0,i.jsx)(t.code,{children:"token"}),") for each participant. Your server has complete control over when to distribute this token to the participants. Your client side needs the ",(0,i.jsx)(t.code,{children:"token"})," to connect and interact with the meeting."]}),"\n",(0,i.jsx)("span",{children:e.savePresetInfo}),"\n",(0,i.jsx)(t.h3,{id:"whats-next",children:"What's Next?"}),"\n",(0,i.jsxs)(t.p,{children:["Now, you can move now to integrating productdb on your client side or you can learn more about the different ",(0,i.jsx)(t.a,{href:"/api/",children:"REST APIs"})," that ProductDB provides and how you can utilise them."]}),"\n",(0,i.jsx)(o,{title:"Client Setup",to:"/guides/"+e.productSlug+"/client-setup"})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},16955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var i=n(74848),r=n(28453),o=n(58717);const c={title:"Server Integration",sidebar_position:4},a=void 0,s={id:"commerce/build-voice-app",title:"Server Integration",description:"<IntegrateProductDB",source:"@site/docs/guides/commerce/build-voice-app.mdx",sourceDirName:"commerce",slug:"/commerce/build-voice-app",permalink:"/guides/commerce/build-voice-app",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/guides/commerce/build-voice-app.mdx",tags:[],version:"current",lastUpdatedAt:1723755734,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:4,frontMatter:{title:"Server Integration",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Concepts",permalink:"/guides/commerce/concepts"},next:{title:"Client Setup",permalink:"/guides/commerce/client-setup/"}},d={},p=[];function u(e){const{Head:t}={...(0,r.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Ay,{product:"Commerce",productSlug:"commerce",preset:"Group Call",presetType:"group-call"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("title",{children:"Server Integration Guide"}),(0,i.jsx)("meta",{name:"description",content:"Learn how to build a voice conferencing app with ProductDB's capabilities. Follow our guide for effective app development and integration."})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},16222:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/how-productdb-works-v2-9f36c8cda047aabc8da766b57fc6e678.png"},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var i=n(96540);const r={},o=i.createContext(r);function c(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);