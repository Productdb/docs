"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[59136],{98737:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var r=s(74848),i=s(28453);const n={title:"Livestream Objects and Methods",description:"Learn about the Android Livestream Object and its usage for effective livestream integration in your Android applications.",sidebar_position:2,tags:["android-core","livestream"]},a=void 0,o={id:"livestream/productdb-livestream-object",title:"Livestream Objects and Methods",description:"Learn about the Android Livestream Object and its usage for effective livestream integration in your Android applications.",source:"@site/docs/android-core/livestream/productdb-livestream-object.mdx",sourceDirName:"livestream",slug:"/livestream/productdb-livestream-object",permalink:"/android-core/livestream/productdb-livestream-object",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/android-core/livestream/productdb-livestream-object.mdx",tags:[{label:"android-core",permalink:"/android-core/tags/android-core"},{label:"livestream",permalink:"/android-core/tags/livestream"}],version:"current",lastUpdatedAt:1723756942,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:2,frontMatter:{title:"Livestream Objects and Methods",description:"Learn about the Android Livestream Object and its usage for effective livestream integration in your Android applications.",sidebar_position:2,tags:["android-core","livestream"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/android-core/livestream/introduction"},next:{title:"Livestream Event Listeners",permalink:"/android-core/livestream/productdb-livestream-listener"}},l={},d=[{value:"Objects",id:"objects",level:2},{value:"roomName [<em>String</em>]",id:"roomname-string",level:3},{value:"state [<em>LiveStreamState</em>]",id:"state-livestreamstate",level:3},{value:"Stage Requests [List&amp;ltProductDBLiveStreamStageRequestPeer&amp;gt]",id:"stage-requests-listltproductdblivestreamstagerequestpeergt",level:3},{value:"liveStreamUrl [String]",id:"livestreamurl-string",level:3},{value:"Host control methods",id:"host-control-methods",level:2},{value:"Accept request",id:"accept-request",level:3},{value:"Reject request",id:"reject-request",level:3},{value:"Accept all requests",id:"accept-all-requests",level:3},{value:"Reject all requests",id:"reject-all-requests",level:3}];function c(e){const t={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"ProductDBLivestream"})," object obtained by ",(0,r.jsx)(t.code,{children:"dyteMobileClient.livestream"})," method. The objects and methods it contains are defined below."]}),"\n",(0,r.jsx)(t.h2,{id:"objects",children:"Objects"}),"\n",(0,r.jsxs)(t.h3,{id:"roomname-string",children:["roomName [",(0,r.jsx)(t.em,{children:"String"}),"]"]}),"\n",(0,r.jsxs)(t.p,{children:["The name of the room.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(t.h3,{id:"state-livestreamstate",children:["state [",(0,r.jsx)(t.em,{children:"LiveStreamState"}),"]"]}),"\n",(0,r.jsxs)(t.p,{children:["The current status of the livestream, possible values can be: ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"LiveStreamState.NONE"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"LiveStreamState.STARTING"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"LiveStreamState.STARTED"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"LiveStreamState.STOPPING"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"LiveStreamState.STOPPED"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"LiveStreamState.ERRORED"})}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"stage-requests-listltproductdblivestreamstagerequestpeergt",children:"Stage Requests [List&ltProductDBLiveStreamStageRequestPeer&gt]"}),"\n",(0,r.jsxs)(t.p,{children:["Object accessed via ",(0,r.jsx)(t.code,{children:"dyteMobileClient.livestream.stageRequestPeers"})," contains the list of requests to join the stage. Each request contains 3 properties:",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"peerId"}),": The peer ID of the user who requested to join the stage."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"userId"}),": The user ID of the user who requested to join the stage."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"displayName"}),": The display name of the user who requested to join the stage.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"livestreamurl-string",children:"liveStreamUrl [String]"}),"\n",(0,r.jsx)(t.p,{children:"List of URL which can be used to consume livestream."}),"\n",(0,r.jsx)(t.h2,{id:"host-control-methods",children:"Host control methods"}),"\n",(0,r.jsx)(t.p,{children:"ProductDB's stage management APIs allow hosts to receive and manage stage requests as well as leave and join the stage."}),"\n",(0,r.jsx)(t.h3,{id:"accept-request",children:"Accept request"}),"\n",(0,r.jsxs)(t.p,{children:["This method lets the host accept a request to join the stage. It takes the ",(0,r.jsx)(t.em,{children:"ProductDBLiveStreamStageRequestPeer.id"})," as an argument whose request has to be accepted."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"dyteMobileClient.livestream.acceptRequest(peer.id);\n"})}),"\n",(0,r.jsx)(t.h3,{id:"reject-request",children:"Reject request"}),"\n",(0,r.jsxs)(t.p,{children:["This method lets the host reject a request to join the stage. It takes the ",(0,r.jsx)(t.em,{children:"ProductDBLiveStreamStageRequestPeer.id"})," as an argument whose request has to be rejected."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"dyteMobileClient.livestream.rejectRequest(peer.id);\n"})}),"\n",(0,r.jsx)(t.h3,{id:"accept-all-requests",children:"Accept all requests"}),"\n",(0,r.jsx)(t.p,{children:"This method lets the host accept all the requests to join the stage."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"dyteMobileClient.livestream.acceptAll();\n"})}),"\n",(0,r.jsx)(t.h3,{id:"reject-all-requests",children:"Reject all requests"}),"\n",(0,r.jsx)(t.p,{children:"This method lets the host reject all the requests to join the stage."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"dyteMobileClient.livestream.rejectAll();\n"})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("title",{children:"Android Core Livestream Objects and Methods"}),(0,r.jsx)("meta",{name:"description",content:"Learn about the Android Livestream Object and its usage for effective livestream integration in your Android applications."})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var r=s(96540);const i={},n=r.createContext(i);function a(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);