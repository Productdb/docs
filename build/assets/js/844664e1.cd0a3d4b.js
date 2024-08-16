"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[7349],{47619:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var n=i(74848),r=i(28453);const t={title:"Configure Video Settings",sidebar_position:6,description:"Learn how to configure codecs for recording in ProductDB's capabilities. Follow our guide for effective codec configuration."},c=void 0,d={id:"capabilities/recording/configure-codecs",title:"Configure Video Settings",description:"Learn how to configure codecs for recording in ProductDB's capabilities. Follow our guide for effective codec configuration.",source:"@site/docs/guides/capabilities/recording/configure-codecs.mdx",sourceDirName:"capabilities/recording",slug:"/capabilities/recording/configure-codecs",permalink:"/guides/capabilities/recording/configure-codecs",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/guides/capabilities/recording/configure-codecs.mdx",tags:[],version:"current",lastUpdatedAt:1723750666,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:6,frontMatter:{title:"Configure Video Settings",sidebar_position:6,description:"Learn how to configure codecs for recording in ProductDB's capabilities. Follow our guide for effective codec configuration."},sidebar:"tutorialSidebar",previous:{title:"Monitor Recording Status",permalink:"/guides/capabilities/recording/monitor-status"},next:{title:"Set Audio Configurations",permalink:"/guides/capabilities/recording/configure-audio-codec"}},s={},a=[{value:"Configure Codecs",id:"configure-codecs",level:2},{value:"Download Video Files",id:"download-video-files",level:2}];function l(e){const o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:i}=o;return i||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"Video codecs are software programs that compress and decompress digital video data for transmission, storage, or playback. Configuring the appropriate video codec can help reduce file size, enhance video quality, and ensure compatibility with different playback devices."}),"\n",(0,n.jsx)(o.h2,{id:"configure-codecs",children:"Configure Codecs"}),"\n",(0,n.jsx)(o.p,{children:"You can modify the codec which is used for recording the videos. We currently\nsupport the following codecs:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"H264 (default)"}),": Records video using the H.264 codec with 1280px * 720px\nresolution, and 384 kbps AAC audio in MP4 container."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"VP8"}),": Records video using the the VP8 codec with 1280px * 720px\nresolution, and Vorbis codec audio in WebM container."]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["You can change the codec by specifying the codec in the ",(0,n.jsx)(o.code,{children:"video_config"})," field in\nthe ",(0,n.jsx)(o.a,{href:"/api/?v=v2#/operations/start_recording",children:"Start Recording endpoint"}),", for\nexample:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-json",children:'{\n  "video_config": {\n    "codec": "H264"\n  }\n}\n'})}),"\n",(0,n.jsx)(o.h2,{id:"download-video-files",children:"Download Video Files"}),"\n",(0,n.jsxs)(o.p,{children:["The video file for your recording is generated only if you passed the ",(0,n.jsx)(o.code,{children:"video_config"})," parameters in the ",(0,n.jsx)(o.a,{href:"/api/?v=v2#/operations/start_recording",children:"Start Recording API"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["When the recording is completed, you can use the ",(0,n.jsx)(o.code,{children:"downloadUrl"})," provided in the response body of the ",(0,n.jsx)(o.a,{href:"/api/?v=v2#/operations/start_recording",children:"Start Recording endpoint"})," to download and export the video file."]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("title",{children:"Configure Video Settings Guide"}),(0,n.jsx)("meta",{name:"description",content:"Learn how to configure codecs for recording in ProductDB's capabilities. Follow our guide for effective codec configuration."})]})]})}function u(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,o,i)=>{i.d(o,{R:()=>c,x:()=>d});var n=i(96540);const r={},t=n.createContext(r);function c(e){const o=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(t.Provider,{value:o},e.children)}}}]);