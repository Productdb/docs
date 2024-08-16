"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[25688],{88510:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var d=s(74848),r=s(28453);const i={title:"Events",description:"Local user events guide.",sidebar_position:2,tags:["web-core","local-user","self","self events"]},t="Local User - Events",o={id:"local-user/events",title:"Events",description:"Local user events guide.",source:"@site/docs/web-core/local-user/events.mdx",sourceDirName:"local-user",slug:"/local-user/events",permalink:"/web-core/local-user/events",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/web-core/local-user/events.mdx",tags:[{label:"web-core",permalink:"/web-core/tags/web-core"},{label:"local-user",permalink:"/web-core/tags/local-user"},{label:"self",permalink:"/web-core/tags/self"},{label:"self events",permalink:"/web-core/tags/self-events"}],version:"current",lastUpdatedAt:1721134929,formattedLastUpdatedAt:"Jul 16, 2024",sidebarPosition:2,frontMatter:{title:"Events",description:"Local user events guide.",sidebar_position:2,tags:["web-core","local-user","self","self events"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/web-core/local-user/introduction"},next:{title:"Manage Media Devices",permalink:"/web-core/local-user/manage-media-devices"}},a={},c=[{value:"Room joined",id:"room-joined",level:2},{value:"Room left",id:"room-left",level:2},{value:"Video update",id:"video-update",level:2},{value:"Audio update",id:"audio-update",level:2},{value:"Screenshare update",id:"screenshare-update",level:2},{value:"Device update",id:"device-update",level:2},{value:"Network quality score",id:"network-quality-score",level:2},{value:"Permission Updates",id:"permission-updates",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"local-user---events",children:"Local User - Events"}),"\n",(0,d.jsxs)(n.p,{children:["You can subscribe to various events on the local user by calling\n",(0,d.jsx)(n.code,{children:"meeting.self.on(EVENT_NAME)"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"room-joined",children:"Room joined"}),"\n",(0,d.jsxs)(n.p,{children:["Triggered when the room join event completes and now the ",(0,d.jsx)(n.code,{children:"meeting"})," is ready to\nproduce and consume media."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"meeting.self.on('roomJoined', () => {\n  console.log(\n    'User has joined the meeting and ready to produce and consume media'\n  );\n});\n"})}),"\n",(0,d.jsx)(n.h2,{id:"room-left",children:"Room left"}),"\n",(0,d.jsx)(n.p,{children:"Triggered when the local user leaves the meeting."}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"meeting.self.on('roomLeft', ({ state }) => {\n  // state is a string whose values are explained below\n  if (state === 'left') {\n    console.log('User has left the meeting');\n  }\n});\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Here are all the possible values of the ",(0,d.jsx)(n.code,{children:"state"})," variable."]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Event"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"left"})}),(0,d.jsx)(n.td,{children:"Participant has left the room."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"kicked"})}),(0,d.jsx)(n.td,{children:"Participant is removed from the meeting."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"ended"})}),(0,d.jsx)(n.td,{children:"Everyone is removed from the meeting, and the session has ended."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"rejected"})}),(0,d.jsx)(n.td,{children:"Participant's request to join the room is rejected (when you're in a waiting room)."})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"video-update",children:"Video update"}),"\n",(0,d.jsxs)(n.p,{children:["Triggered when the user starts / stops the video using ",(0,d.jsx)(n.code,{children:"enableVideo"})," or\n",(0,d.jsx)(n.code,{children:"disableVideo"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const videoElem = document.getElementById('my-video');\n\nmeeting.self.on('videoUpdate', async ({ videoEnabled, videoTrack }) => {\n  if (videoEnabled) {\n    const stream = new MediaStream();\n    stream.addTrack(videoTrack);\n    videoElem.srcObject = stream;\n    videoElem.play();\n  } else {\n    videoElem.stop();\n  }\n});\n"})}),"\n",(0,d.jsx)(n.h2,{id:"audio-update",children:"Audio update"}),"\n",(0,d.jsxs)(n.p,{children:["Triggered when the user starts / stops the audio using ",(0,d.jsx)(n.code,{children:"enableAudio"})," or\n",(0,d.jsx)(n.code,{children:"disableAudio"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const audioElem = document.getElementById('my-audio');\n\nmeeting.self.on('audioUpdate', async ({ audioEnabled, audioTrack }) => {\n  if (audioEnabled) {\n    const stream = new MediaStream();\n    stream.addTrack(audioTrack);\n    audioElem.srcObject = stream;\n    audioElem.play();\n  } else {\n    audioElem.stop();\n  }\n});\n"})}),"\n",(0,d.jsx)(n.h2,{id:"screenshare-update",children:"Screenshare update"}),"\n",(0,d.jsxs)(n.p,{children:["Triggered when the user starts / stops the screen share using\n",(0,d.jsx)(n.code,{children:"enableScreenShare()"})," or ",(0,d.jsx)(n.code,{children:"disableScreenShare()"}),"."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const screenElem = document.getElementById('my-screen-share');\n\nmeeting.self.on(\n  'screenShareUpdate',\n  async ({ screenShareEnabled, screenShareTracks }) => {\n    if (screenShareEnabled) {\n      const stream = new MediaStream();\n      stream.addTrack(screenShareTracks.video);\n      screenElem.srcObject(stream);\n      await screenElem.play();\n    } else {\n      await screenElem.stop();\n    }\n  }\n);\n"})}),"\n",(0,d.jsx)(n.h2,{id:"device-update",children:"Device update"}),"\n",(0,d.jsxs)(n.p,{children:["Subscribe to the ",(0,d.jsx)(n.code,{children:"deviceUpdate"})," event to handle the changing video, audio and\nspeaker devices"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"meeting.self.on('deviceUpdate', ({ device }) => {\n  // handle microphone device change\n  if (device.kind === 'audioinput') {\n    console.log('mic change', device);\n  }\n  // handle camera device change\n  if (device.kind === 'videoinput') {\n    console.log('camera change', device);\n  }\n  // handle speaker device change\n  if (device.kind === 'audiooutput') {\n    console.log('speaker change', device);\n  }\n});\n"})}),"\n",(0,d.jsx)(n.h2,{id:"network-quality-score",children:"Network quality score"}),"\n",(0,d.jsxs)(n.p,{children:["Subscribe to the ",(0,d.jsx)(n.code,{children:"mediaScoreUpdate"})," event to monitor network"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"meeting.self.on('mediaScoreUpdate', ({ kind, isScreenshare, score }) => {\n  if (kind === 'video') {\n    console.log(\n      `Your ${isScreenshare ? 'screenshare' : 'video'} quality score is `,\n      score\n    );\n  }\n\n  if (kind === 'audio') {\n    console.log('Your audio quality score is ', score);\n  }\n\n  if (score < 5) {\n    console.log('Your media quality is poor');\n  }\n});\n"})}),"\n",(0,d.jsx)(s,{children:(0,d.jsx)("title",{children:"Web Core Events"})}),"\n",(0,d.jsx)(n.h2,{id:"permission-updates",children:"Permission Updates"}),"\n",(0,d.jsx)(n.p,{children:"Triggered when permissions are updated dynamically by a privileged user"}),"\n",(0,d.jsxs)(n.p,{children:["Subscribe to ",(0,d.jsx)(n.code,{children:"chatUpdate"}),", ",(0,d.jsx)(n.code,{children:"pollsUpdate"}),", ",(0,d.jsx)(n.code,{children:"pluginsUpdate"})," or ",(0,d.jsx)(n.code,{children:"*"})," for any kind of permission updates\nExample:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"meeting.self.permissions.on('chatUpdate', () => {\n  // Chat permissions are updated\n  // check meeting.self.permissions for updated permissions\n});\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var d=s(96540);const r={},i=d.createContext(r);function t(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);