"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[96161],{3077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=n(74848),s=n(28453);const a={title:"Introducing chat",description:"Learn the basics of integrating ProductDB's chat functionality into your iOS application \u2013 a step towards immersive real-time communication.",sidebar_position:1,tags:["ios-core","chat"]},r="Introducing chat",c={id:"chat/introduction",title:"Introducing chat",description:"Learn the basics of integrating ProductDB's chat functionality into your iOS application \u2013 a step towards immersive real-time communication.",source:"@site/docs/ios-core/chat/introduction.mdx",sourceDirName:"chat",slug:"/chat/introduction",permalink:"/ios-core/chat/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/ios-core/chat/introduction.mdx",tags:[{label:"ios-core",permalink:"/ios-core/tags/ios-core"},{label:"chat",permalink:"/ios-core/tags/chat"}],version:"current",lastUpdatedAt:1723755734,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:1,frontMatter:{title:"Introducing chat",description:"Learn the basics of integrating ProductDB's chat functionality into your iOS application \u2013 a step towards immersive real-time communication.",sidebar_position:1,tags:["ios-core","chat"]},sidebar:"tutorialSidebar",previous:{title:"Waitlisted Participants",permalink:"/ios-core/participants/waitlisted-participants"},next:{title:"Sending a chat message",permalink:"/ios-core/chat/sending-a-chat-message"}},o={},l=[];function d(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"introducing-chat",children:"Introducing chat"}),"\n",(0,i.jsxs)(t.p,{children:["The meeting chat object is stored in ",(0,i.jsx)(t.code,{children:"meeting.chat"}),", which has methods for sending and receiving messages. There are 3 types of messages that can be sent in chat - text messages, images, and files."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"meeting.chat.messages"})," array contains all the messages that have been sent\nin the chat. This is an array of objects, where each object is of type\n",(0,i.jsx)(t.code,{children:"ProductDBChatMessage"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"We support three types of chat messages, they are as follows"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Text Message"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:"class ProductDBTextMessage {\n  let userId: String\n  let displayName: String\n  let read: Bool\n  let pluginId: String?\n  let message: String\n  let time: String\n  let channelId: String? = null\n}\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Image Message"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:"class ProductDBImageMessage{\n  let userId: String\n  let displayName: String\n  let read: Bool\n  let pluginId: String?\n  let link: String\n  let time: String\n  let channelId: String? = null\n}\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"File Message"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:"class ProductDBFileMessage{\n  let userId: String\n  let displayName: String\n  let read: Bool\n  let pluginId: String?\n  let name: String\n  let time: String\n  let link: String\n  let size: Int64\n  let channelId: String? = null\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["All above objects are of type ",(0,i.jsx)(t.code,{children:"ProductDBChatMessage"})," along with their own class\nvariables."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(96540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);