"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[82507],{10478:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>r});var t=a(74848),s=a(28453);const i={title:"Sending a chat message",description:'"Master the process of sending chat messages within your Android application with ProductDB',sidebar_position:2,tags:["android-core","chat"]},d="Sending a chat message",o={id:"chat/sending-a-chat-message",title:"Sending a chat message",description:'"Master the process of sending chat messages within your Android application with ProductDB',source:"@site/docs/android-core/chat/sending-a-chat-message.mdx",sourceDirName:"chat",slug:"/chat/sending-a-chat-message",permalink:"/android-core/chat/sending-a-chat-message",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/android-core/chat/sending-a-chat-message.mdx",tags:[{label:"android-core",permalink:"/android-core/tags/android-core"},{label:"chat",permalink:"/android-core/tags/chat"}],version:"current",lastUpdatedAt:1723750666,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:2,frontMatter:{title:"Sending a chat message",description:'"Master the process of sending chat messages within your Android application with ProductDB',sidebar_position:2,tags:["android-core","chat"]},sidebar:"tutorialSidebar",previous:{title:"Introducing chat",permalink:"/android-core/chat/introduction"},next:{title:"Receiving chat messages",permalink:"/android-core/chat/receiving-chat-messages"}},c={},r=[{value:"Send a text message",id:"send-a-text-message",level:2},{value:"Send an image",id:"send-an-image",level:2},{value:"Send a file",id:"send-a-file",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Head:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"sending-a-chat-message",children:"Sending a chat message"}),"\n",(0,t.jsxs)(n.p,{children:["As mentioned in ",(0,t.jsx)(n.a,{href:"./introduction",children:"introduction"}),", there are 3 types of chat messages - text messages, images, and files. There is a method in ",(0,t.jsx)(n.code,{children:"meeting.chat"})," to send a message of each type."]}),"\n",(0,t.jsx)(n.h2,{id:"send-a-text-message",children:"Send a text message"}),"\n",(0,t.jsxs)(n.p,{children:["To send a text message, the ",(0,t.jsx)(n.code,{children:"meeting.chat.sendTextMessage()"})," method can be used. This accepts a string ",(0,t.jsx)(n.code,{children:"message"})," and sends it to the room."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val message = "Is this the real life?"\nmeeting.chat.sendTextMessage(message)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"send-an-image",children:"Send an image"}),"\n",(0,t.jsxs)(n.p,{children:["You can send an image with the help of ",(0,t.jsx)(n.code,{children:"meeting.chat.sendImageMessage()"})," and\nsends it to the participants in the meeting."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val filePath = "file_path_of_image"\nval fileName = "file_name"\nmeeting.chat.sendImageMessage(filePath, fileName)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"send-a-file",children:"Send a file"}),"\n",(0,t.jsxs)(n.p,{children:["Sending a file is quite similar to sending an image. The only difference is that when you send an image, a preview will be shown in the meeting chat, which is not the case for sending files. That being said, an image can be sent as a file too using ",(0,t.jsx)(n.code,{children:"meeting.chat.sendFileMessage()"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val filePath = "file_path_of_image"\nval fileName = "file_name"\nmeeting.chat.sendFileMessage(filePath, fileName)\n'})}),"\n",(0,t.jsx)(a,{children:(0,t.jsx)("title",{children:"Android Core Sending chat"})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>d,x:()=>o});var t=a(96540);const s={},i=t.createContext(s);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);