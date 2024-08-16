"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[84882],{44574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var o=n(74848),r=n(28453);const i={title:"Introduction",description:"Create, receive and interact with polls in a meeting.",sidebar_position:1,tags:["web-core","polls"]},s="Introduction",c={id:"polls/introduction",title:"Introduction",description:"Create, receive and interact with polls in a meeting.",source:"@site/docs/web-core/polls/introduction.mdx",sourceDirName:"polls",slug:"/polls/introduction",permalink:"/web-core/polls/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/web-core/polls/introduction.mdx",tags:[{label:"web-core",permalink:"/web-core/tags/web-core"},{label:"polls",permalink:"/web-core/tags/polls"}],version:"current",lastUpdatedAt:1721134929,formattedLastUpdatedAt:"Jul 16, 2024",sidebarPosition:1,frontMatter:{title:"Introduction",description:"Create, receive and interact with polls in a meeting.",sidebar_position:1,tags:["web-core","polls"]},sidebar:"tutorialSidebar",previous:{title:"Livestreaming",permalink:"/web-core/livestreaming"},next:{title:"Creating a poll",permalink:"/web-core/polls/creating-a-poll"}},l={},a=[];function d(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(t.p,{children:["The meetings polls object can be accessed using ",(0,o.jsx)(t.code,{children:"meeting.polls"}),". It provides\nmethods to create polls, vote, and more."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"meeting.polls.items"})," returns an array of all polls created in a meeting, where\neach element is an object of type ",(0,o.jsx)(t.code,{children:"Poll"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["The type ",(0,o.jsx)(t.code,{children:"Poll"})," is defined in the following manner."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"interface Poll {\n  id: string;\n  question: string;\n  options: PollOption[];\n  anonymous: boolean;\n  hideVotes: boolean;\n  createdBy: string;\n  createdByUserId: string;\n  voted: string[]; // stores participant ID\n}\n\ninterface PollOption {\n  text: string;\n  votes: {\n    id: string; // stores participant ID\n    name: string;\n  }[];\n  count: number;\n}\n"})}),"\n",(0,o.jsx)(n,{children:(0,o.jsx)("title",{children:"Web Core Introduction"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var o=n(96540);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);