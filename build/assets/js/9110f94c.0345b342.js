"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[54630],{80301:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(74848),s=t(28453);const o={sidebar_position:1,web_core_version:"1.32.1"},d=void 0,l={id:"reference/ProductDBClient",title:"ProductDBClient",description:"The ProductDBClient class is the main class of the web core library.",source:"@site/docs/web-core/reference/ProductDBClient.md",sourceDirName:"reference",slug:"/reference/ProductDBClient",permalink:"/web-core/reference/ProductDBClient",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/web-core/reference/ProductDBClient.md",tags:[],version:"current",lastUpdatedAt:1723755734,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,web_core_version:"1.32.1"},sidebar:"tutorialSidebar",previous:{title:"System Error Codes (0-16)",permalink:"/web-core/error-codes/error-code-zero-ten"},next:{title:"ProductDBSelf",permalink:"/web-core/reference/ProductDBSelf"}},r={},c=[{value:"meeting.participants",id:"meetingparticipants",level:3},{value:"meeting.self",id:"meetingself",level:3},{value:"meeting.meta",id:"meetingmeta",level:3},{value:"meeting.ai",id:"meetingai",level:3},{value:"meeting.plugins",id:"meetingplugins",level:3},{value:"meeting.chat",id:"meetingchat",level:3},{value:"meeting.polls",id:"meetingpolls",level:3},{value:"meeting.remote",id:"meetingremote",level:3},{value:"meeting.connectedMeetings",id:"meetingconnectedmeetings",level:3},{value:"meeting.join()",id:"meetingjoin",level:3},{value:"meeting.leave()",id:"meetingleave",level:3},{value:"ProductDBClient.init(options)",id:"productdbclientinitoptions",level:3},{value:"<del>meeting.joinRoom()</del>",id:"meetingjoinroom",level:3},{value:"<del>meeting.leaveRoom()</del>",id:"meetingleaveroom",level:3}];function a(e){const n={a:"a",code:"code",del:"del",em:"em",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("a",{name:"module_ProductDBClient"}),"\n",(0,i.jsxs)(n.p,{children:["The ProductDBClient class is the main class of the web core library.\nAn object of the ProductDBClient class can be created using\n",(0,i.jsx)(n.code,{children:"await ProductDBClient.init({ ... })"}),". Typically, an object of ",(0,i.jsx)(n.code,{children:"ProductDBClient"})," is\nnamed ",(0,i.jsx)(n.code,{children:"meeting"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#module_ProductDBClient",children:"ProductDBClient"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"instance"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#module_ProductDBClient+participants",children:".participants"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#module_ProductDBClient+self",children:".self"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#module_ProductDBClient+meta",children:".meta"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#module_ProductDBClient+ai",children:".ai"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#module_ProductDBClient+plugins",children:".plugins"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#module_ProductDBClient+chat",children:".chat"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#module_ProductDBClient+polls",children:".polls"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#module_ProductDBClient+remote",children:".remote"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#module_ProductDBClient+connectedMeetings",children:".connectedMeetings"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#module_ProductDBClient+join",children:".join()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#module_ProductDBClient+leave",children:".leave()"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"static"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#module_ProductDBClient.init",children:".init(options)"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("a",{name:"module_ProductDBClient+participants"}),"\n",(0,i.jsx)(n.h3,{id:"meetingparticipants",children:"meeting.participants"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"participants"})," object consists of 4 maps of participants,\n",(0,i.jsx)(n.code,{children:"waitlisted"}),", ",(0,i.jsx)(n.code,{children:"joined"}),", ",(0,i.jsx)(n.code,{children:"active"}),", ",(0,i.jsx)(n.code,{children:"pinned"}),". The maps are indexed by\n",(0,i.jsx)(n.code,{children:"peerId"}),"s, and the values are the corresponding participant objects."]}),"\n",(0,i.jsx)("a",{name:"module_ProductDBClient+self"}),"\n",(0,i.jsx)(n.h3,{id:"meetingself",children:"meeting.self"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"self"})," object can be used to manipulate audio and video settings,\nand other configurations for the local participant. This exposes methods\nto enable and disable media tracks, share the user's screen, etc."]}),"\n",(0,i.jsx)("a",{name:"module_ProductDBClient+meta"}),"\n",(0,i.jsx)(n.h3,{id:"meetingmeta",children:"meeting.meta"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"room"})," object stores information about the current meeting, such\nas chat messages, polls, room name, etc."]}),"\n",(0,i.jsx)("a",{name:"module_ProductDBClient+ai"}),"\n",(0,i.jsx)(n.h3,{id:"meetingai",children:"meeting.ai"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ai"})," object is used to interface with ProductDB's AI features.\nYou can obtain the live meeting transcript and use other meeting AI\nfeatures such as summary, and agenda using this object."]}),"\n",(0,i.jsx)("a",{name:"module_ProductDBClient+plugins"}),"\n",(0,i.jsx)(n.h3,{id:"meetingplugins",children:"meeting.plugins"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"plugins"})," object stores information about the plugins available in\nthe current meeting. It exposes methods to activate and deactivate them."]}),"\n",(0,i.jsx)("a",{name:"module_ProductDBClient+chat"}),"\n",(0,i.jsx)(n.h3,{id:"meetingchat",children:"meeting.chat"}),"\n",(0,i.jsx)(n.p,{children:"The chat object stores the chat messages that were sent in the meeting.\nThis includes text messages, images, and files."}),"\n",(0,i.jsx)("a",{name:"module_ProductDBClient+polls"}),"\n",(0,i.jsx)(n.h3,{id:"meetingpolls",children:"meeting.polls"}),"\n",(0,i.jsx)(n.p,{children:"The polls object stores the polls that were initiated in the meeting.\nIt exposes methods to create and vote on polls."}),"\n",(0,i.jsx)("a",{name:"module_ProductDBClient+remote"}),"\n",(0,i.jsx)(n.h3,{id:"meetingremote",children:"meeting.remote"}),"\n",(0,i.jsx)(n.p,{children:"The remote object stores the remote control requests for the meeting.\nIt exposes methods to request, accept and end the remote control."}),"\n",(0,i.jsx)("a",{name:"module_ProductDBClient+connectedMeetings"}),"\n",(0,i.jsx)(n.h3,{id:"meetingconnectedmeetings",children:"meeting.connectedMeetings"}),"\n",(0,i.jsx)(n.p,{children:"The connectedMeetings object stores the connected meetings states.\nIt exposes methods to create/read/update/delete methods for connected meetings."}),"\n",(0,i.jsx)("a",{name:"module_ProductDBClient+__internals__"}),"\n",(0,i.jsx)("a",{name:"module_ProductDBClient+join"}),"\n",(0,i.jsx)(n.h3,{id:"meetingjoin",children:"meeting.join()"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"join()"})," method can be used to join the meeting. A ",(0,i.jsx)(n.code,{children:"roomJoined"})," event\nis emitted on ",(0,i.jsx)(n.code,{children:"self"})," when the room is joined successfully."]}),"\n",(0,i.jsx)("a",{name:"module_ProductDBClient+leave"}),"\n",(0,i.jsx)(n.h3,{id:"meetingleave",children:"meeting.leave()"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"leave()"})," method can be used to leave a meeting."]}),"\n",(0,i.jsx)("a",{name:"module_ProductDBClient.init"}),"\n",(0,i.jsx)(n.h3,{id:"productdbclientinitoptions",children:"ProductDBClient.init(options)"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"init"})," method can be used to instantiate the ProductDBClient class.\nThis returns an instance of ProductDBClient, which can be used to perform\nactions on the meeting."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"options"}),(0,i.jsx)(n.td,{children:"The options object."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"options.authToken"}),(0,i.jsx)(n.td,{children:"The authorization token received using the API."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"options.apiBase"}),(0,i.jsx)(n.td,{children:"The base URL of the API."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"options.defaults"}),(0,i.jsx)(n.td,{children:"The default audio and video settings."})]})]})]}),"\n",(0,i.jsx)("a",{name:"module_ProductDBClient+joinRoom"}),"\n",(0,i.jsx)(n.h3,{id:"meetingjoinroom",children:(0,i.jsx)(n.del,{children:"meeting.joinRoom()"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Deprecated"})})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"joinRoom()"})," method can be used to join the meeting. A ",(0,i.jsx)(n.code,{children:"roomJoined"})," event\nis emitted on ",(0,i.jsx)(n.code,{children:"self"})," when the room is joined successfully."]}),"\n",(0,i.jsx)("a",{name:"module_ProductDBClient+leaveRoom"}),"\n",(0,i.jsx)(n.h3,{id:"meetingleaveroom",children:(0,i.jsx)(n.del,{children:"meeting.leaveRoom()"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Deprecated"})})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"leaveRoom()"})," method can be used to leave a meeting."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var i=t(96540);const s={},o=i.createContext(s);function d(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);