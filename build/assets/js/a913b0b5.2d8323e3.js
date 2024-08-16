"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[75708],{41406:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=i(74848),n=i(28453);const s={title:"Restream to Social Platforms",sidebar_position:5},o="Restream to Social Platforms",a={id:"capabilities/misc/livestreaming-other-platforms",title:"Restream to Social Platforms",description:"ProductDB can restream your meeting to any platform that supports an RTMP",source:"@site/docs/guides/capabilities/misc/livestreaming-other-platforms.mdx",sourceDirName:"capabilities/misc",slug:"/capabilities/misc/livestreaming-other-platforms",permalink:"/guides/capabilities/misc/livestreaming-other-platforms",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/guides/capabilities/misc/livestreaming-other-platforms.mdx",tags:[],version:"current",lastUpdatedAt:1723755734,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:5,frontMatter:{title:"Restream to Social Platforms",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"No code Integration",permalink:"/guides/capabilities/misc/embed"},next:{title:"Quickstart",permalink:"/guides/rest-apis/quickstart"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Initiate meeting recording",id:"step-1-initiate-meeting-recording",level:2},{value:"Step 2: Configure restreaming settings",id:"step-2-configure-restreaming-settings",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"restream-to-social-platforms",children:"Restream to Social Platforms"}),"\n",(0,r.jsx)(t.p,{children:"ProductDB can restream your meeting to any platform that supports an RTMP\nendpoint, such as YouTube, Twitch, or LinkedIn."}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/api?v=v2#/operations/create_meeting",children:"Create a meeting"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/guides/livestream/build-livestream-app#step-5-add-participants",children:"Add a participant"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"step-1-initiate-meeting-recording",children:"Step 1: Initiate meeting recording"}),"\n",(0,r.jsxs)(t.p,{children:["To enable restreaming of a ProductDB meeting, you will first need to start recording the meeting. In the ",(0,r.jsx)(t.a,{href:"/api#/operations/start_recording",children:"Start recording a meeting"})," API, provide the ",(0,r.jsx)(t.code,{children:"meeting_id"})," of the meeting you wish to restream."]}),"\n",(0,r.jsx)(t.h2,{id:"step-2-configure-restreaming-settings",children:"Step 2: Configure restreaming settings"}),"\n",(0,r.jsxs)(t.p,{children:["In the same ",(0,r.jsx)(t.a,{href:"/api#/operations/start_recording",children:"Start recording a meeting"})," API, configure the restreaming settings."]}),"\n",(0,r.jsxs)(t.p,{children:["Specify the desired ",(0,r.jsx)(t.strong,{children:"RTMP input URL"})," and ",(0,r.jsx)(t.strong,{children:"stream key"})," where you want the meeting video to be streamed."]}),"\n",(0,r.jsx)(t.admonition,{title:"Note",type:"info",children:(0,r.jsxs)(t.p,{children:["Your stream key is generated when ",(0,r.jsx)(t.a,{href:"/guides/rest-apis/livestream-productdb-meeting#step-2-create-a-live-stream",children:"creating a livestream"}),"."]})}),"\n",(0,r.jsxs)(t.p,{children:["For example, if you want to stream it to ",(0,r.jsx)(t.a,{href:"https://restream.io",children:"restream.io"}),", do\nthe following:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"curl --request POST \\\n  --url https://api.productdb.in/v2/organizations/orgid/meetings/meetingid/recording \\\n  --header 'Authorization: APIKEY yourapi-key' \\\n  --header 'Content-Type: application/json' \\\n  --data '{\n    \"liveStreamingConfig\": {\n        \"rtmpUrl\": \"rtmp://live.restream.io/live/your-stream-key\"\n    }\n}'\n"})}),"\n",(0,r.jsx)(t.p,{children:"You may notice a few seconds of lag between the meeting and the stream."}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("title",{children:"Restream to Social Platforms Guide"}),(0,r.jsx)("meta",{name:"description",content:"Learn how to livestream on other platforms with ProductDB's capabilities. Follow our guide for effective livestreaming integration."})]})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var r=i(96540);const n={},s=r.createContext(n);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);