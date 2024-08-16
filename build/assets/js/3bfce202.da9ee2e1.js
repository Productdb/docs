"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[49986],{54404:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var n=r(74848),t=r(28453);const o={title:"Manage Recording Config Precedence Order",sidebar_position:5,slug:"/capabilities/recording/manage-recording-config-hierarchy",description:"Learn how to manage recording configuration hierarchy with ProductDB's capabilities. Follow our guide for effective hierarchy management."},c=void 0,a={id:"capabilities/recording/advanced/manage-recording-config-hierarchy",title:"Manage Recording Config Precedence Order",description:"Learn how to manage recording configuration hierarchy with ProductDB's capabilities. Follow our guide for effective hierarchy management.",source:"@site/docs/guides/capabilities/recording/advanced/manage-recording-config-hierarchy.mdx",sourceDirName:"capabilities/recording/advanced",slug:"/capabilities/recording/manage-recording-config-hierarchy",permalink:"/guides/capabilities/recording/manage-recording-config-hierarchy",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/guides/capabilities/recording/advanced/manage-recording-config-hierarchy.mdx",tags:[],version:"current",lastUpdatedAt:1723755734,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:5,frontMatter:{title:"Manage Recording Config Precedence Order",sidebar_position:5,slug:"/capabilities/recording/manage-recording-config-hierarchy",description:"Learn how to manage recording configuration hierarchy with ProductDB's capabilities. Follow our guide for effective hierarchy management."},sidebar:"tutorialSidebar",previous:{title:"Add Watermark to your Recording",permalink:"/guides/capabilities/recording/add-watermark"},next:{title:"Disable upload to ProductDB's bucket",permalink:"/guides/capabilities/recording/configure-productdb-bucket-config"}},d={},s=[{value:"Understand Recording Configuration Precedence",id:"understand-recording-configuration-precedence",level:2},{value:"Example Scenario",id:"example-scenario",level:2}];function l(e){const i={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{Head:r}=i;return r||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"This document provides an overview of the precedence structure for managing recording configurations within our system. It explains how various configuration levels interact and prioritize settings. The recording configuration can be defined at three different levels:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/api#/operations/start_recording",children:"Start recording a meeting API"})}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/api#/operations/create_meeting",children:"Create a meeting API"})," and"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"https://dev.productdb.io/recordings",children:"Organization level"})," specified via developer portal"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"understand-recording-configuration-precedence",children:"Understand Recording Configuration Precedence"}),"\n",(0,n.jsx)(i.p,{children:"To comprehend the precedence of recording configurations, it is important to delve into the following details. This understanding becomes crucial when dealing with multiple configurations set through APIs and the developer portal."}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Precedence"}),(0,n.jsx)(i.th,{children:"Config"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"1"}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.a,{href:"/api#/operations/start_recording",children:"Start recording API"})," configs"]}),(0,n.jsx)(i.td,{children:"Highest priority in the system. Any settings defined here will take precedence over other configurations."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"2"}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.a,{href:"/api#/operations/create_meeting",children:"Create a meeting API"})," configs"]}),(0,n.jsx)(i.td,{children:"Second level of priority in the system. Settings here will supersede Org level config but not Start recording a meeting API configs."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"3"}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.a,{href:"https://dev.productdb.io/recordings",children:"Organization level"})," specified via developer portal"]}),(0,n.jsx)(i.td,{children:"Lowest priority in the system. Settings defined here will be overridden by both Start recording a meeting API config and Create a meeting API config."})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"example-scenario",children:"Example Scenario"}),"\n",(0,n.jsx)(i.p,{children:"To illustrate the precedence order in action, consider the following scenario for the same meeting:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Org Level Config specifies that recordings to be stored in the AWS bucket."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Create a Meeting API sets recordings to be stored in the GCP storage bucket using the H264 codec."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Start recording a meeting API is configured to store recordings in the DigitalOcean's Spaces bucket using the VP8 codec."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"In this scenario, the Start recording a meeting API takes precedence over the Create a Meeting API Config and Org Level Config. As a result, the meeting's recording will be stored in the DigitalOcean's Spaces bucket using VP8 codec, regardless of the defaults set at other levels."}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("title",{children:"Manage Recording Config Precedence Order Guide"}),(0,n.jsx)("meta",{name:"description",content:"Learn how to manage recording configuration hierarchy with ProductDB's capabilities. Follow our guide for effective hierarchy management."})]})]})}function g(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,i,r)=>{r.d(i,{R:()=>c,x:()=>a});var n=r(96540);const t={},o=n.createContext(t);function c(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);