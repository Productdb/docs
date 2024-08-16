"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[50381],{70215:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var t=n(74848),d=n(28453);const o={},l="Media Preview",r={id:"pre-call/media-preview",title:"Media Preview",description:"Before joining a meeting, users may want to preview and configure their media devices like camera, microphone, and audio output.",source:"@site/docs/flutter-core/pre-call/1-media-preview.mdx",sourceDirName:"pre-call",slug:"/pre-call/media-preview",permalink:"/flutter-core/pre-call/media-preview",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/flutter-core/pre-call/1-media-preview.mdx",tags:[],version:"current",lastUpdatedAt:1723755734,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Quickstart",permalink:"/flutter-core/"},next:{title:"Meeting Metadata",permalink:"/flutter-core/pre-call/meeting-meta"}},a={},s=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"Toggling Media",id:"toggling-media",level:3},{value:"Changing Media Device",id:"changing-media-device",level:3}];function c(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"media-preview",children:"Media Preview"}),"\n",(0,t.jsx)(i.p,{children:"Before joining a meeting, users may want to preview and configure their media devices like camera, microphone, and audio output.\nThis section provides developers with the tools to prepare the media environment before joining a ProductDB meeting."}),"\n",(0,t.jsxs)(i.p,{children:["If you are using our UI Kits, this functionality can be handled by ",(0,t.jsx)(i.code,{children:"ProductDBSetupScreen"})," or built with ",(0,t.jsx)(i.code,{children:"ProductDBParticipantTile"})," widget."]}),"\n",(0,t.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"dyteMobileClient.localUser.audioEnabled"}),": A ",(0,t.jsx)("span",{className:"tag-orange",children:"boolean"})," value indicating if the audio currently enabled."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"dyteMobileClient.localUser.videoEnabled"}),": A ",(0,t.jsx)("span",{className:"tag-orange",children:"boolean"})," value indicating if the video currently enabled."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(i.h3,{id:"toggling-media",children:"Toggling Media"}),"\n",(0,t.jsx)(i.p,{children:"The same methods used for controlling media during a meeting are also applicable for pre-call media configuration."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"1. Mute/Unmute microphone"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-dart",children:"// Mute Audio\ndyteMobileClient.localUser.disableAudio()\n\n// Unmute Audio\ndyteMobileClient.localUser.enableAudio()\n\n"})}),"\n",(0,t.jsx)(i.mermaid,{value:'flowchart LR\n    classDef basic fill:white;\n\n    eam("enableAudio()") --\x3e success("Gives <code>onAudioUpdate</code> callback to <code>ProductDBSelfEventsListener</code>")\n\n    class eam basic;'}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(i.p,{children:["Anytime there is an update in the audio state of the local user, the Core SDK notifies the client through the ",(0,t.jsx)(i.code,{children:"onAudioUpdate"})," callback\nfrom ",(0,t.jsx)(i.code,{children:"ProductDBSelfEventsListener"}),". Here's how you can register the listener:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-dart",children:"class SelfAudioNotifier extends ProductDBSelfEventsListener{\n    override fun onAudioUpdate(bool audioEnabled) {\n    // Show local user's VideoView if video is enabled\n    }\n}\n\ndyteMobileClient.addSelfEventsListener(SelfAudioNotifier())\n"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"2. Enable/Disable camera"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-dart",children:"// Disable Video\ndyteMobileClient.localUser.disableVideo()\n\n// Enable Video\ndyteMobileClient.localUser.enableVideo()\n"})}),"\n",(0,t.jsx)(i.mermaid,{value:'flowchart LR\n    classDef basic fill:white;\n\n    eam("enableVideo()") --\x3e success("Gives <code>onVideoUpdate</code> callback to <code>ProductDBSelfEventsListener</code>")\n\n    class eam basic;'}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(i.p,{children:["Whenever there is an update in the video state of the local user, the Core SDK notifies the client through the ",(0,t.jsx)(i.code,{children:"onVideoUpdate"})," callback\nfrom ",(0,t.jsx)(i.code,{children:"ProductDBSelfEventsListener"}),". Here's how you can register the listener:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-dart",children:"class SelfVideoNotifier extends ProductDBSelfEventsListener{\n    override fun onVideoUpdate(bool videoEnabled) {\n        // Show local user's VideoView if video is enabled\n    }\n}\n\ndyteMobileClient.addSelfEventsListener(SelfVideoNotifier());\n"})}),"\n",(0,t.jsx)(i.h3,{id:"changing-media-device",children:"Changing Media Device"}),"\n",(0,t.jsx)(i.p,{children:"Media devices represent the hardware for the camera, microphone, and speaker devices. To get the list of media devices currently\navailable, use the following methods:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-dart",children:"// Get all audio devices\nfinal audioDevices = dyteMobileClient.localUser.getAudioDevices()\n\n// Get all video devices\nfinal videoDevices = dyteMobileClient.localUser.getVideoDevices()\n"})}),"\n",(0,t.jsx)(i.p,{children:"To get the currently selected media device, use the following methods:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-dart",children:"// Get current audio device being used\nfinal currentAudioDevice = dyteMobileClient.localUser.getSelectedAudioDevice()\n\n// Get current video device being used\nfinal currentVideoDevice = dyteMobileClient.localUser.getSelectedVideoDevice()\n"})}),"\n",(0,t.jsx)(i.p,{children:"Use these methods to create a UI that allows users to configure their media devices. When the user selects a device, use the below methods to set the device."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Set device"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-kotlin",children:"// Set audio device\ndyteMobileClient.localUser.setAudioDevice(device)\n// eg. device = audioDevices[0]\n\n// Set video device\ndyteMobileClient.localUser.setVideoDevice(device)\n// eg. device = videoDevices[0]\n"})})]})}function u(e={}){const{wrapper:i}={...(0,d.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>r});var t=n(96540);const d={},o=t.createContext(d);function l(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);