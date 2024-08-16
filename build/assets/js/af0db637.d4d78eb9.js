"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[61404],{33641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(74848),s=n(28453);const r={sidebar_position:1,title:"Prebuilt Chat Screen"},a=void 0,o={id:"chat/prebuilt-screen",title:"Prebuilt Chat Screen",description:"Introduction to Chat in ProductDB Meetings",source:"@site/docs/android/chat/prebuilt-screen.mdx",sourceDirName:"chat",slug:"/chat/prebuilt-screen",permalink:"/android/chat/prebuilt-screen",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/android/chat/prebuilt-screen.mdx",tags:[],version:"current",lastUpdatedAt:1723760454,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Prebuilt Chat Screen"},sidebar:"tutorialSidebar",previous:{title:"Building Your Own UI",permalink:"/android/render-participant-videos/custom-ui"},next:{title:"Types",permalink:"/android/participants/introduction"}},d={},c=[{value:"Introduction to Chat in ProductDB Meetings",id:"introduction-to-chat-in-productdb-meetings",level:2},{value:"ProductDB&#39;s Prebuilt Chat Screen",id:"productdbs-prebuilt-chat-screen",level:2},{value:"Using ProductDB&#39;s Chat screen",id:"using-productdbs-chat-screen",level:2},{value:"Wrap-Up",id:"wrap-up",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"introduction-to-chat-in-productdb-meetings",children:"Introduction to Chat in ProductDB Meetings"}),"\n",(0,i.jsxs)(t.p,{children:["In ProductDB meetings, participants can also engage in real-time communication by sending chat messages.\nThese messages can be text, images, or files, depending on the ",(0,i.jsx)(t.a,{href:"/guides/livestream/advanced/configuring-permissions#chat",children:"chat permissions"}),"\nset in their preset."]}),"\n",(0,i.jsx)(t.h2,{id:"productdbs-prebuilt-chat-screen",children:"ProductDB's Prebuilt Chat Screen"}),"\n",(0,i.jsx)(t.p,{children:"ProductDB's Android UI Kit includes prebuilt Chat screen that handle the complete chat logic and offer\na range of features to enhance the chat experience in ProductDB meetings:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Display Messages"}),": Displays all chat messages, including text, images, and files, in a clear and organized manner"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Image Preview"}),": Allows users to tap on an image message to view it in full screen"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"File Download"}),": Enables users to download files sent in chat messages with a simple tap"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Message Composer"}),": Provides a user-friendly interface for composing messages, supporting text,\nimage, and file messages. It automatically adjusts the UI based on the user's chat permissions,\nhiding or disabling options that are not permitted"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Auto-Scroll"}),": Auto-scrolls to new messages as they are received but stops auto-scrolling if the user\nhas scrolled up to read an old message"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Device Permissions"}),": Handles device permissions elegantly on all supported Android versions for sending images, files,\nand downloading files to the device. This saves developers effort, allowing them to focus on building their apps"]}),"\n"]}),"\n",(0,i.jsxs)("div",{id:"one",style:{display:"flex",flexDirection:"row",flexWrap:"wrap",flex:"1 1 0",justifyContent:"center"},children:[(0,i.jsx)("img",{src:"/static/android-ui-kit/chat/chat-prebuilt-screen-messages.png",alt:"Prebuilt Chat Screen Message List",width:"220",padding:"10",margin:"10 3",style:{margin:"10px",borderRadius:"8px"}}),(0,i.jsx)("img",{src:"/static/android-ui-kit/chat/chat-prebuilt-send-options.png",alt:"Prebuilt Chat Screen Send Options",width:"220",padding:"10",margin:"10 3",style:{margin:"10px",borderRadius:"8px"}})]}),"\n",(0,i.jsx)(t.h2,{id:"using-productdbs-chat-screen",children:"Using ProductDB's Chat screen"}),"\n",(0,i.jsx)(t.p,{children:"ProductDB's prebuilt Chat screen comes in two variants:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"ProductDBChatBottomSheet"}),": Displays the chat UI as a full-screen bottom sheet that can be dismissed by swiping down."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:"import dyte.io.uikit.screens.chat.ProductDBChatBottomSheet\n\nval dyteChatBottomSheet = ProductDBChatBottomSheet()\ndyteChatBottomSheet.show(childFragmentManager, TAG)\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"ProductDBChatFragment"}),": Shows the chat UI inside an Android Fragment, providing the flexibility to display the chat UI\nfull screen or as a part of the screen with other UI elements."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'\x3c!-- res/layout/meeting_activity.xml --\x3e\n<androidx.fragment.app.FragmentContainerView\n    android:id="@+id/fragment_container_view"\n    android:layout_width="match_parent"\n    android:layout_height="match_parent" />\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:"import dyte.io.uikit.screens.chat.ProductDBChatFragment\n\nval dyteChatFragment = ProductDBChatFragment()\nsupportFragmentManager.beginTransaction()\n                .replace(R.id.fragment_container_view, dyteChatFragment, TAG)\n                .commit()\n"})}),"\n",(0,i.jsx)(t.h2,{id:"wrap-up",children:"Wrap-Up"}),"\n",(0,i.jsx)(t.p,{children:"By integrating ProductDB's prebuilt Chat screens into your app, you can enhance the communication experience for users\nduring ProductDB meetings."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);