"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[62386],{90025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var i=n(74848),a=n(28453);const r={title:"Participant Events",description:"Explore events related to participants in Flutter. Follow our documentation for effective handling of participant events in your Flutter app.",sidebar_position:3,tags:["flutter-core","participants","self"]},c=void 0,d={id:"participants/events",title:"Participant Events",description:"Explore events related to participants in Flutter. Follow our documentation for effective handling of participant events in your Flutter app.",source:"@site/docs/flutter-core/participants/events.mdx",sourceDirName:"participants",slug:"/participants/events",permalink:"/flutter-core/participants/events",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/flutter-core/participants/events.mdx",tags:[{label:"flutter-core",permalink:"/flutter-core/tags/flutter-core"},{label:"participants",permalink:"/flutter-core/tags/participants"},{label:"self",permalink:"/flutter-core/tags/self"}],version:"current",lastUpdatedAt:1723755734,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:3,frontMatter:{title:"Participant Events",description:"Explore events related to participants in Flutter. Follow our documentation for effective handling of participant events in your Flutter app.",sidebar_position:3,tags:["flutter-core","participants","self"]},sidebar:"tutorialSidebar",previous:{title:"Participant Object",permalink:"/flutter-core/participants/participant-object"},next:{title:"Waitlisted Participants",permalink:"/flutter-core/participants/waitlisted-participants"}},s={},o=[{value:"Participant joined",id:"participant-joined",level:2},{value:"Participant updated",id:"participant-updated",level:2},{value:"Participant left",id:"participant-left",level:2},{value:"Video update",id:"video-update",level:2},{value:"Audio update",id:"audio-update",level:2},{value:"Screen share update",id:"screen-share-update",level:2},{value:"Screen share participants list",id:"screen-share-participants-list",level:2},{value:"Screen share view",id:"screen-share-view",level:2},{value:"Active Participants changed",id:"active-participants-changed",level:2}];function p(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"participant-joined",children:"Participant joined"}),"\n",(0,i.jsx)(t.p,{children:"Trigger an event when any participant joins the meeting."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:"class ParticipantsEventListener extends ProductDBParticipantEventsListener {\n  ...\n  @override\n  void onParticipantJoin(ProductDBJoinedMeetingParticipant participant) {\n    // your code here to handle new participant\n  }\n  ...\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"participant-updated",children:"Participant updated"}),"\n",(0,i.jsx)(t.p,{children:"Trigger an event when any participant update in meeting. For example, when a participant changes their name."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:"...\n\n@override\nvoid onParticipantUpdated(ProductDBJoinedMeetingParticipant participant) {\n         // your code here to handle new participant\n}\n\n...\n"})}),"\n",(0,i.jsx)(t.h2,{id:"participant-left",children:"Participant left"}),"\n",(0,i.jsx)(t.p,{children:"Trigger an event when any participant leaves the meeting."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:"...\n\n@override\nvoid onParticipantLeave(ProductDBJoinedMeetingParticipant participant) {\n         // your code here to handle participant left from meeting\n}\n\n...\n"})}),"\n",(0,i.jsx)(t.h2,{id:"video-update",children:"Video update"}),"\n",(0,i.jsx)(t.p,{children:"Trigger an event when any participant starts or stops the video."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:"...\n\n@override\nvoid onVideoUpdate({\n required bool videoEnabled,\n required ProductDBJoinedMeetingParticipant participant,\n}) {\n         // your code here to handle participant video toggle update\n}\n\n...\n"})}),"\n",(0,i.jsx)(t.h2,{id:"audio-update",children:"Audio update"}),"\n",(0,i.jsx)(t.p,{children:"Triggers an event when a participant starts or stops the audio."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:"...\n\n@override\nvoid onAudioUpdate({\n required bool audioEnabled,\n required ProductDBJoinedMeetingParticipant participant,\n}) {\n    // your code here to handle participant audio toggle update\n}\n\n...\n"})}),"\n",(0,i.jsx)(t.h2,{id:"screen-share-update",children:"Screen share update"}),"\n",(0,i.jsx)(t.p,{children:"Triggers an event when a participant starts or stops screen share."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:"...\n\n@override\nvoid onScreenShareStarted(ProductDBJoinedMeetingParticipant participant) {\n  /// handle screen share started of `ProductDBJoinedMeetingParticipant` participant\n}\n\n@override\nvoid onScreenShareEnded(ProductDBJoinedMeetingParticipant participant) {\n  /// handle screen share ended of `ProductDBJoinedMeetingParticipant` participant\n}\n\n...\n"})}),"\n",(0,i.jsx)(t.h2,{id:"screen-share-participants-list",children:"Screen share participants list"}),"\n",(0,i.jsxs)(t.p,{children:["Obtain the list of the screenshare participants, using the ",(0,i.jsx)(t.code,{children:"participants.screenshares"})," function which returns a ",(0,i.jsx)(t.code,{children:"ProductDBRoomParticipants"})," object that maintains a record of participants who have joined, pinned, and screenshared. This object updates with each ",(0,i.jsx)(t.code,{children:"onUpdate"})," call."]}),"\n",(0,i.jsx)(t.h2,{id:"screen-share-view",children:"Screen share view"}),"\n",(0,i.jsxs)(t.p,{children:["To get the screenshare widget, create an object of the ",(0,i.jsx)(t.code,{children:"ScreenshareView"})," class."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:"// To show screenshare of a participant\nfinal screenshareView = ScreenShareView(meetingParticipant);\n"})}),"\n",(0,i.jsx)(t.h2,{id:"active-participants-changed",children:"Active Participants changed"}),"\n",(0,i.jsx)(t.p,{children:"This event is triggered when the active participant changes, for example, when the user moves to the next page of participants. It provides the list of participants on the current page."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-dart",children:"...\n\n@override\nvoid onActiveParticipantsChanged(List<ProductDBJoinedMeetingParticipant> active) {\n  /// handle active participants changed\n}\n\n...\n"})}),"\n",(0,i.jsx)(t.p,{children:"Other events:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Event"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Description"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"onActiveSpeakerChanged"})}),(0,i.jsx)(t.td,{children:"Triggered when active speaker is change. Updated active speaker is sent as payload."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"onNoActiveSpeaker"})}),(0,i.jsx)(t.td,{children:"Triggered when there is no active participant."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"onParticipantPinned"})}),(0,i.jsx)(t.td,{children:"Triggered when a participant is pinned. Pinned participant details is sent as payload."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"onParticipantUnpinned"})}),(0,i.jsx)(t.td,{children:"Triggered when a participant is unpinned. Unpinned participant details is sent as payload."})]})]})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("title",{children:"Flutter Core Participant Events"}),(0,i.jsx)("meta",{name:"description",content:"Explore events related to participants in Flutter. Follow our documentation for effective handling of participant events in your Flutter app."})]})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>d});var i=n(96540);const a={},r=i.createContext(a);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);