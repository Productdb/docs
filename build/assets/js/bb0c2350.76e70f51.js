"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[62674],{15639:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=t(74848),a=t(28453);const i={title:"Other chat functions",description:"Other functionality associated with chat.",sidebar_position:5,tags:["rn-core","chat"]},c="Other chat functions",r={id:"chat/other-chat-functions",title:"Other chat functions",description:"Other functionality associated with chat.",source:"@site/docs/rn-core/chat/other-chat-functions.mdx",sourceDirName:"chat",slug:"/chat/other-chat-functions",permalink:"/rn-core/chat/other-chat-functions",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/rn-core/chat/other-chat-functions.mdx",tags:[{label:"rn-core",permalink:"/rn-core/tags/rn-core"},{label:"chat",permalink:"/rn-core/tags/chat"}],version:"current",lastUpdatedAt:1721134929,formattedLastUpdatedAt:"Jul 16, 2024",sidebarPosition:5,frontMatter:{title:"Other chat functions",description:"Other functionality associated with chat.",sidebar_position:5,tags:["rn-core","chat"]},sidebar:"tutorialSidebar",previous:{title:"Editing Chat Messages",permalink:"/rn-core/chat/edit-chat-messages"},next:{title:"Introduction",permalink:"/rn-core/polls/introduction"}},o={},d=[{value:"Get messages by a user",id:"get-messages-by-a-user",level:2},{value:"Get messages of a particular type",id:"get-messages-of-a-particular-type",level:2},{value:"Pinning a chat message",id:"pinning-a-chat-message",level:2},{value:"Deleting a chat message",id:"deleting-a-chat-message",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"other-chat-functions",children:"Other chat functions"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"meeting.chat"})," object exposes certain other methods for convenience when\nworking with chat."]}),"\n",(0,s.jsx)(n.h2,{id:"get-messages-by-a-user",children:"Get messages by a user"}),"\n",(0,s.jsxs)(n.p,{children:["You can get messages by a particular user by passing the user's ID to the\n",(0,s.jsx)(n.code,{children:"meeting.chat.getMessagesByUser()"})," method."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Find the userId of the user with name \"Freddie\".\nconst { userId } = meeting.participants.joined\n  .toArray()\n  .find((p) => p.name === 'Freddie');\n\nconst messages = meeting.chat.getMessagesByUser(userId);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"get-messages-of-a-particular-type",children:"Get messages of a particular type"}),"\n",(0,s.jsxs)(n.p,{children:["You can also get messages of a particular type using the\n",(0,s.jsx)(n.code,{children:"meeting.chat.getMessagesByType()"})," method. For example, you can get all image\nmessages present in the chat using the following snippet."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const imageMessages = meeting.chat.getMessagesByType('image');\n"})}),"\n",(0,s.jsx)(n.h2,{id:"pinning-a-chat-message",children:"Pinning a chat message"}),"\n",(0,s.jsxs)(n.p,{children:["You can ",(0,s.jsx)(n.code,{children:"pin"})," a number of messages to the chat. When you pin a message, the\nmessage object will have the attribute ",(0,s.jsx)(n.code,{children:"pinned: true"}),", using which you can\nidentify if a message is pinned."]}),"\n",(0,s.jsx)(n.p,{children:"To pin a message, run the following snippet."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Let's say we want to pin the first message in the chat (could be a text, image, or file).\nconst { id } = meeting.chat.messages[0];\n\nawait meeting.chat.pin(id);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Once you pin a message, it will be added to ",(0,s.jsx)(n.code,{children:"meeting.chat.pinned"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const { id } = meeting.chat.messages[0];\n\nawait meeting.chat.pin(id);\n\nconsole.log(meeting.chat.pinned);\nconsole.log(meeting.chat.pinned.length > 0); // Should be true\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also unpin a pinned message, by using the ",(0,s.jsx)(n.code,{children:"meeting.chat.unpin()"})," method."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Unpin the first pinned message.\n\nconst { id } = meeting.chat.pinned[0];\nawait meeting.chat.unpin(id);\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can listen for events to know when a message is pinned or unpinned."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"meeting.chat.on('pinMessage', ({ message }) => {\n  console.log('A message was pinned', JSON.stringify(message));\n});\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"meeting.chat.on('unpinMessage', ({ message }) => {\n  console.log('A message was unpinned', JSON.stringify(message));\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"deleting-a-chat-message",children:"Deleting a chat message"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"meeting.chat"})," namespace exposes a method called ",(0,s.jsx)(n.code,{children:"deleteMessage()"}),". It takes\na parameter ",(0,s.jsx)(n.code,{children:"meesageId"})," of type ",(0,s.jsx)(n.code,{children:"string"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const messageId = '...';\nawait meeting.chat.deleteMessage(messageId);\n"})}),"\n",(0,s.jsx)(t,{children:(0,s.jsx)("title",{children:"React Native Core Other chat functions"})})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var s=t(96540);const a={},i=s.createContext(a);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);