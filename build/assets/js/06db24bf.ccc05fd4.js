"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[46629],{26995:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=s(74848),t=s(28453);const r={title:"Host Actions & Permissions",description:"Understand the host actions you can perform as per preset permissions set in Developer Portal & integration in ProductDB's Flutter SDK.",sidebar_position:13,tags:["flutter-core","permissions","host actions"]},o="Host Actions & Permissions",c={id:"host-actions",title:"Host Actions & Permissions",description:"Understand the host actions you can perform as per preset permissions set in Developer Portal & integration in ProductDB's Flutter SDK.",source:"@site/docs/flutter-core/host-actions.mdx",sourceDirName:".",slug:"/host-actions",permalink:"/flutter-core/host-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/flutter-core/host-actions.mdx",tags:[{label:"flutter-core",permalink:"/flutter-core/tags/flutter-core"},{label:"permissions",permalink:"/flutter-core/tags/permissions"},{label:"host actions",permalink:"/flutter-core/tags/host-actions"}],version:"current",lastUpdatedAt:1723755734,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:13,frontMatter:{title:"Host Actions & Permissions",description:"Understand the host actions you can perform as per preset permissions set in Developer Portal & integration in ProductDB's Flutter SDK.",sidebar_position:13,tags:["flutter-core","permissions","host actions"]},sidebar:"tutorialSidebar",previous:{title:"Recording",permalink:"/flutter-core/recording"},next:{title:"Release Notes",permalink:"/flutter-core/release-notes"}},a={},l=[{value:"Permissions",id:"permissions",level:2},{value:"Media Permissions",id:"media-permissions",level:3},{value:"Waiting Room Permissions",id:"waiting-room-permissions",level:3},{value:"Chat Permissions",id:"chat-permissions",level:3},{value:"Host Permissions",id:"host-permissions",level:3},{value:"Poll Permissions",id:"poll-permissions",level:3},{value:"Plugin Permissions",id:"plugin-permissions",level:3},{value:"Livestream Permissions",id:"livestream-permissions",level:3},{value:"Miscellaneous Permissions",id:"miscellaneous-permissions",level:3},{value:"Host Actions",id:"host-actions",level:2},{value:"Pin/Unpin participant",id:"pinunpin-participant",level:3},{value:"Kick participant(s)",id:"kick-participants",level:3},{value:"Accept/Reject waitlisted request",id:"acceptreject-waitlisted-request",level:3},{value:"Mute participant(s) audio",id:"mute-participants-audio",level:3},{value:"Disable participant(s) video",id:"disable-participants-video",level:3}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"host-actions--permissions",children:"Host Actions & Permissions"}),"\n",(0,n.jsx)(i.p,{children:"Based on your peer preset permissions you can perform certain host actions in ProductDB's Flutter SDK. As you follow through this page, you'll know what the host actions are and how to implement it based on permissions."}),"\n",(0,n.jsx)(i.h2,{id:"permissions",children:"Permissions"}),"\n",(0,n.jsxs)(i.p,{children:["Permissions are set in the Developer Portal. Based on the permissions set, you can perform certain host actions. To access permissions, use ",(0,n.jsx)(i.code,{children:"dyteClient.permissions"})," method. The permissions are as follows:"]}),"\n",(0,n.jsx)(i.h3,{id:"media-permissions",children:"Media Permissions"}),"\n",(0,n.jsxs)(i.p,{children:["Media permissions (audio, video and screenshare) can be accessed using ",(0,n.jsx)(i.code,{children:"dyteClient.permissions.media"}),". You can get audio, video and screenshare permissions. Audio and screenshare permissions are of ",(0,n.jsx)(i.code,{children:"ProductDBMediaPermission"})," type & video permissions are of ",(0,n.jsx)(i.code,{children:"ProductDBVideoPermissions"})," type."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"ProductDBMediaPermission"})," is a enum & can have 3 values:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"ProductDBMediaPermission.allowed"})," : If the user is allowed to access the media."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"ProductDBMediaPermission.canRequest"})," : If the user can request access to the media. Ex: If a user is off stage but can request to come on stage in case of webinar."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"ProductDBMediaPermission.notAllowed"})," : If the user is not allowed to access the media."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"ProductDBVideoPermissions"})," have 3 properties:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"permission"}),": It is of ",(0,n.jsx)(i.code,{children:"ProductDBMediaPermission"})," type & stores the video permission."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"frameRate"})," : It is of type ",(0,n.jsx)(i.code,{children:"int"})," & stores the frame rate of the video."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"quality"})," : It is of type ",(0,n.jsx)(i.code,{children:"string"})," and stores the quality of the video."]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-dart",children:"\n// To get audio permission\nfinal ProductDBMediaPermission audioPermission = dyteClient.permissions.media.audio;\n\n// To get video details\nfinal ProductDBVideoPermissions videoPermission = dyteClient.permissions.media.video;\n\n// To get screenshare permission\nfinal ProductDBMediaPermission screensharePermission = dyteClient.permissions.media.screenshare;\n"})}),"\n",(0,n.jsx)(i.h3,{id:"waiting-room-permissions",children:"Waiting Room Permissions"}),"\n",(0,n.jsxs)(i.p,{children:["Waiting room permissions are of type ",(0,n.jsx)(i.code,{children:"WaitingRoomPermissions"})," contains 2 properties:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"canAcceptRequests"}),": It is of type ",(0,n.jsx)(i.code,{children:"bool"})," & tells if the user can accept/reject waiting requests of participants present in waiting room."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"type"}),": It is of enum type ",(0,n.jsx)(i.code,{children:"WaitingRoomType"})," and is useful to know where client can directly enter meeting room or need permission from host."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"WaitingRoomType"})," can have 4 values:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"WaitingRoomType.skip"})," : If the user can directly enter the meeting room."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"WaitingRoomType.onAccept"})," : If the user needs permission from host to enter the meeting room."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"WaitingRoomType.skipOnAccept"})," : If the user needs permission from host just the first time while trying to join meeting room."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"WaitingRoomType.skipOnPriviligedUserEntry"})," : If the user can enter once there's a privileged user is present in the room."]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-dart",children:"final WaitingRoomPermissions waitingRoomPermissions = dyteClient.permissions.waitingRoom;\n"})}),"\n",(0,n.jsx)(i.h3,{id:"chat-permissions",children:"Chat Permissions"}),"\n",(0,n.jsxs)(i.p,{children:["Chat permissions are of type ",(0,n.jsx)(i.code,{children:"ChatPermissions"})," contains 2 properties:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"canSendText"}),": It is of type ",(0,n.jsx)(i.code,{children:"bool"})," & tells if the user can send messages in the chat."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"canSendFiles"}),": It is of type ",(0,n.jsx)(i.code,{children:"bool"})," & tells if the user can send images/files in the chat."]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-dart",children:"final ChatPermissions chatPermissions = dyteClient.permissions.chat;\n"})}),"\n",(0,n.jsx)(i.h3,{id:"host-permissions",children:"Host Permissions"}),"\n",(0,n.jsxs)(i.p,{children:["Host permissions are of type ",(0,n.jsx)(i.code,{children:"HostPermissions"})," contains 5 properties:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"canMuteAudio"}),": It is of type ",(0,n.jsx)(i.code,{children:"bool"})," & tells if the user can mute audio of other participants in the room."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"canDisableVideo"}),": It is of type ",(0,n.jsx)(i.code,{children:"bool"})," & tells if the user can disable other participant's video."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"canKickParticipant"}),": It is of type ",(0,n.jsx)(i.code,{children:"bool"})," & tells if the user can kick other participants from the room."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"canPinParticipant"}),": It is of type ",(0,n.jsx)(i.code,{children:"bool"})," & tells if the user can pin other participants in the room."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"canTriggerRecording"}),": It is of type ",(0,n.jsx)(i.code,{children:"bool"})," & tells if the user can trigger recording in the room."]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-dart",children:"final HostPermissions hostPermissions = dyteClient.permissions.host;\n"})}),"\n",(0,n.jsx)(i.h3,{id:"poll-permissions",children:"Poll Permissions"}),"\n",(0,n.jsxs)(i.p,{children:["Poll permissions are of type ",(0,n.jsx)(i.code,{children:"PollPermissions"})," contains 3 properties:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"canCreate"}),": It is of type ",(0,n.jsx)(i.code,{children:"bool"})," & tells if the user can create polls in the meeting room."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"canVote"}),": It is of type ",(0,n.jsx)(i.code,{children:"bool"})," & tells if the user can vote in the polls."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"canView"}),": It is of type ",(0,n.jsx)(i.code,{children:"bool"})," & tells if the user can view the polls."]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-dart",children:"final PollPermissions pollPermissions = dyteClient.permissions.poll;\n"})}),"\n",(0,n.jsx)(i.h3,{id:"plugin-permissions",children:"Plugin Permissions"}),"\n",(0,n.jsxs)(i.p,{children:["Plugin permissions are of type ",(0,n.jsx)(i.code,{children:"PluginPermissions"})," contains 2 properties:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"canLaunch"}),": It is of type ",(0,n.jsx)(i.code,{children:"bool"})," & tells if the user can launch plugins in the meeting room."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"canClose"}),": It is of type ",(0,n.jsx)(i.code,{children:"bool"})," & tells if the user can close plugins in the meeting room."]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-dart",children:"final PluginPermissions pluginPermissions = dyteClient.permissions.plugin;\n"})}),"\n",(0,n.jsx)(i.h3,{id:"livestream-permissions",children:"Livestream Permissions"}),"\n",(0,n.jsxs)(i.p,{children:["Livestream permissions are of type ",(0,n.jsx)(i.code,{children:"LivestreamPermissions"})," contains the following property:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"canLivestream"}),": It is of type ",(0,n.jsx)(i.code,{children:"bool"})," & tells if the user can start/stop livestreaming."]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-dart",children:"final LivestreamPermissions livestreamPermissions = dyteClient.permissions.livestream;\n"})}),"\n",(0,n.jsx)(i.h3,{id:"miscellaneous-permissions",children:"Miscellaneous Permissions"}),"\n",(0,n.jsxs)(i.p,{children:["Miscellaneous permissions are of type ",(0,n.jsx)(i.code,{children:"MiscellaneousPermissions"})," with following property:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"canEditDisplayName"}),": It is of type ",(0,n.jsx)(i.code,{children:"bool"})," & tells if the user can edit their display name."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"host-actions",children:"Host Actions"}),"\n",(0,n.jsxs)(i.p,{children:["A peer can execute following actions if their preset allows it. To access preset permissions, see the permissions section ",(0,n.jsx)(i.a,{href:"#permissions",children:"above"}),":"]}),"\n",(0,n.jsx)(i.h3,{id:"pinunpin-participant",children:"Pin/Unpin participant"}),"\n",(0,n.jsxs)(i.p,{children:["You can pin & unpin a participant in a meeting room. Use ",(0,n.jsx)(i.code,{children:"pinParticipant(participant)"})," and ",(0,n.jsx)(i.code,{children:"unpinParticipant()"})," method to pin & unpin the ",(0,n.jsx)(i.code,{children:"participant"})," respectively. The ",(0,n.jsx)(i.code,{children:"participant"})," is of ",(0,n.jsx)(i.code,{children:"ProductDBMeetingParticipant"}),"type."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-dart",children:"\n// Pin the `participant`\ndyteClient.hostActions.pinParticipant(participant);\n\n// Unpin pinned participant\ndyteClient.hostActions.unpinParticipant();\n"})}),"\n",(0,n.jsx)(i.h3,{id:"kick-participants",children:"Kick participant(s)"}),"\n",(0,n.jsxs)(i.p,{children:["You can kick a participant or kick all participants from a meeting using ",(0,n.jsx)(i.code,{children:"kickParticipant(participant)"})," and ",(0,n.jsx)(i.code,{children:"kickAll()"})," method respectively. The ",(0,n.jsx)(i.code,{children:"participant"})," is of ",(0,n.jsx)(i.code,{children:"ProductDBMeetingParticipant"})," type."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-dart",children:"\n// Kick the `participant`\ndyteClient.hostActions.kickParticipant(participant);\n\n// Kick all participants\ndyteClient.hostActions.kickAll();\n"})}),"\n",(0,n.jsx)(i.h3,{id:"acceptreject-waitlisted-request",children:"Accept/Reject waitlisted request"}),"\n",(0,n.jsxs)(i.p,{children:["You can accept or reject a waitlisted request using ",(0,n.jsx)(i.code,{children:"acceptWaitlistedParticipant(participant)"})," and ",(0,n.jsx)(i.code,{children:"rejectWaitlistedParticipant(participant)"})," method respectively. The ",(0,n.jsx)(i.code,{children:"participant"})," is of ",(0,n.jsx)(i.code,{children:"ProductDBMeetingParticipant"})," type."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-dart",children:"\n// Accept the waitlisted `waitlistedParticipant`\ndyteClient.hostActions.acceptWaitlistedParticipant(waitlistedParticipant);\n\n// Reject the waitlisted `waitlistedParticipant`\ndyteClient.hostActions.rejectWaitlistedParticipant(waitlistedParticipant);\n"})}),"\n",(0,n.jsx)(i.h3,{id:"mute-participants-audio",children:"Mute participant(s) audio"}),"\n",(0,n.jsxs)(i.p,{children:["You can mute a participant's audio or mute all participants' audio using ",(0,n.jsx)(i.code,{children:"disableParticipantAudio(participant)"})," and ",(0,n.jsx)(i.code,{children:"muteAllAudios()"})," method respectively. The ",(0,n.jsx)(i.code,{children:"participant"})," is of ",(0,n.jsx)(i.code,{children:"ProductDBMeetingParticipant"})," type."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-dart",children:"\n// Mute the `participant` audio\ndyteClient.hostActions.disableParticipantAudio(participant);\n\n// Mute all participants' audio\ndyteClient.hostActions.muteAllAudios();\n\n"})}),"\n",(0,n.jsx)(i.h3,{id:"disable-participants-video",children:"Disable participant(s) video"}),"\n",(0,n.jsxs)(i.p,{children:["You can disable a participant's video or disable all participants' video using ",(0,n.jsx)(i.code,{children:"disableParticipantVideo(participant)"})," and ",(0,n.jsx)(i.code,{children:"disableAllVideos()"})," method respectively. The ",(0,n.jsx)(i.code,{children:"participant"})," is of ",(0,n.jsx)(i.code,{children:"ProductDBMeetingParticipant"})," type."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-dart",children:"\n// Disable the `participant` video\ndyteClient.hostActions.disableParticipantVideo(participant);\n\n// Disable all participants' video\ndyteClient.hostActions.disableAllVideos();\n"})})]})}function p(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,i,s)=>{s.d(i,{R:()=>o,x:()=>c});var n=s(96540);const t={},r=n.createContext(t);function o(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);