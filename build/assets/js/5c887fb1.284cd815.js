"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[59875],{49396:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=i(74848),r=i(28453);const s={sidebar_position:1,description:"Explore meeting transcription capabilities with ProductDB's AI. Follow our guide to understand and implement transcription features."},a="Meeting Transcription",o={id:"capabilities/ai/meeting-transcription",title:"Meeting Transcription",description:"Explore meeting transcription capabilities with ProductDB's AI. Follow our guide to understand and implement transcription features.",source:"@site/docs/guides/capabilities/ai/meeting-transcription.mdx",sourceDirName:"capabilities/ai",slug:"/capabilities/ai/meeting-transcription",permalink:"/guides/capabilities/ai/meeting-transcription",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/guides/capabilities/ai/meeting-transcription.mdx",tags:[],version:"current",lastUpdatedAt:1723755734,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Explore meeting transcription capabilities with ProductDB's AI. Follow our guide to understand and implement transcription features."},sidebar:"tutorialSidebar",previous:{title:"Meeting AI",permalink:"/guides/capabilities/ai/"},next:{title:"Export Chat Messages",permalink:"/guides/capabilities/chat/export-chat-dump"}},c={},d=[{value:"Control transcriptions for participants using presets",id:"control-transcriptions-for-participants-using-presets",level:2},{value:"Consuming transcripts",id:"consuming-transcripts",level:2},{value:"Consuming transcripts in real-time",id:"consuming-transcripts-in-real-time",level:3},{value:"Consume transcript via a post-meeting webhook",id:"consume-transcript-via-a-post-meeting-webhook",level:3},{value:"Fetch the meeting transcript",id:"fetch-the-meeting-transcript",level:2},{value:"Testing transcription",id:"testing-transcription",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"meeting-transcription",children:"Meeting Transcription"}),"\n",(0,n.jsx)(t.admonition,{title:"beta",type:"info",children:(0,n.jsxs)(t.p,{children:["The meeting transcription feature is currently in beta, which means it is still being tested and evaluated, and may undergo some change. This feature is not accessible to the public at the moment and will be activated solely upon request, subject to our team's assessment of your usage and needs. If you wish to have this feature enabled for your organization, please ",(0,n.jsx)(t.a,{href:"https://productdb.io/contact",children:"get in touch with us"}),"."]})}),"\n",(0,n.jsx)(t.p,{children:"ProductDB's meeting transcription allows you to transcribe your ProductDB meetings in real-time, making it easy to capture important discussions and refer back to them later.\nThis guide will walk you through how to use this feature effectively."}),"\n",(0,n.jsx)(t.admonition,{title:"NOTE",type:"info",children:(0,n.jsx)(t.p,{children:"ProductDB's AI meeting transcription currently only supports English."})}),"\n",(0,n.jsx)(t.h2,{id:"control-transcriptions-for-participants-using-presets",children:"Control transcriptions for participants using presets"}),"\n",(0,n.jsxs)(t.p,{children:["You can control whether or not a participant's audio will be transcribe with the help of the ",(0,n.jsx)(t.code,{children:"transcription_enabled"})," flag in the participant's preset.\nAll participants with the ",(0,n.jsx)(t.code,{children:"transcription_enabled"})," turned on in their preset will be able to generate transcripts in real-time in a ProductDB meeting."]}),"\n",(0,n.jsxs)(t.p,{children:["You can create a new preset on our ",(0,n.jsx)(t.a,{href:"https://dev.productdb.io/presets",children:"Developer Portal"}),", or using our ",(0,n.jsx)(t.a,{href:"/api#/operations/post-presets",children:"REST API"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"consuming-transcripts",children:"Consuming transcripts"}),"\n",(0,n.jsx)(t.p,{children:"There are 3 ways in which these transcripts can be consumed."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Client core SDK: The transcripts can be consumed on the client-side using the ProductDB SDK that's suitable for your platform. These transcripts are generated on the server in real-time."}),"\n",(0,n.jsxs)(t.li,{children:["Webhooks: The meeting transcript can be consumed via a ",(0,n.jsx)(t.a,{href:"#consume-transcript-via-a-post-meeting-webhook",children:"webhook after the meeting ends"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["REST API: The meeting transcript can also be fetched via the ",(0,n.jsx)(t.a,{href:"/api#/operations/GetSessionTranscript",children:"rest API"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"consuming-transcripts-in-real-time",children:"Consuming transcripts in real-time"}),"\n",(0,n.jsxs)(t.p,{children:["For consuming transcripts in real-time on the client SDK of your choice, you just need to ensure that the ",(0,n.jsx)(t.code,{children:"transcription_enabled"})," flag is enabled in the preset.\nTranscripts for all the participants having this flag set will be broadcasted in the meeting."]}),"\n",(0,n.jsxs)(t.p,{children:["You can use the ",(0,n.jsx)(t.code,{children:"meeting.ai"})," object to access the transcripts."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"console.log(meeting.ai.transcripts);\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The transcripts are also emitted by the ",(0,n.jsx)(t.code,{children:"meeting.ai"})," object, so a listener can be attached to it."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"meeting.ai.on('transcript', (transcriptData) => {\n  console.log('Transcript:', transcriptData);\n});\n"})}),"\n",(0,n.jsx)(t.h3,{id:"consume-transcript-via-a-post-meeting-webhook",children:"Consume transcript via a post-meeting webhook"}),"\n",(0,n.jsxs)(t.p,{children:["You can configure a webhook with the ",(0,n.jsx)(t.code,{children:"meeting.transcript"})," event enabled to receive the meeting transcript after the meeting has ended.\nYou can do this either on our ",(0,n.jsx)(t.a,{href:"https://dev.productdb.io/webhooks",children:"Developer Portal"}),", or using a ",(0,n.jsx)(t.a,{href:"/api#/operations/addWebhook",children:"REST API"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You can see the webhook format ",(0,n.jsx)(t.a,{href:"/guides/capabilities/webhooks/webhook-events#meetingtranscript",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"fetch-the-meeting-transcript",children:"Fetch the meeting transcript"}),"\n",(0,n.jsxs)(t.p,{children:["You do not need to rely on the webhook to get the transcript for a meeting. ProductDB provides a ",(0,n.jsx)(t.a,{href:"/api#/operations/GetSessionTranscript",children:"REST API"})," using which you can obtain the transcripts for a particular session.\nYou can use this API to get the transcript for a meeting at a later time. ProductDB stores the transcript of a meeting for 7 days since the start of the meeting."]}),"\n",(0,n.jsx)(t.p,{children:"The transcript is received in the form of a CSV. Here is the format of the said CSV:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csv",children:"Timestamp, Participant ID, User ID, Custom Participant ID, Participant Name, Transcript\n"})}),"\n",(0,n.jsx)(t.p,{children:"The following is a description of all the fields specified in the above CSV."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Timestamp: An ISO 8601 format string indicating the time of utterance (or the time of speech)."}),"\n",(0,n.jsx)(t.li,{children:'Participant ID: An identifier for individual peers in the meeting. For instance, if the participant joins the meeting twice, both the "peers" will have the same User ID but different Participant IDs.'}),"\n",(0,n.jsxs)(t.li,{children:["User ID: An identifier for a participant in the meeting, as returned by the ",(0,n.jsx)(t.a,{href:"/api#/operations/add_participant#response-body",children:"add participant API call"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Custom Participant ID: An identifier that you can specify to identify a user. This can be sent in the request body of the ",(0,n.jsx)(t.a,{href:"/api#/operations/add_participant#request-body",children:"add participant API call"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Participant Name: The display name of the user."}),"\n",(0,n.jsx)(t.li,{children:"Transcript: The transcribed utterance."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"testing-transcription",children:"Testing transcription"}),"\n",(0,n.jsx)(t.p,{children:"Once you have configured a preset and a webhook according to the instructions above, you can proceed to test whether meeting transcription is working for your organization.\nTo test if meeting transcription has been configured for your organization, perform the following steps."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/api#/operations/create_meeting",children:"Create a meeting"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/api#/operations/add_participant",children:"Add a participant"})," to the meeting. Make sure that the preset you use was configured according to this guide."]}),"\n",(0,n.jsxs)(t.li,{children:["Join the meeting with the ",(0,n.jsx)(t.code,{children:"authToken"})," you just obtained. As you unmute and speak, your speech should be getting transcribed in real-time for all the participants in the meeting."]}),"\n",(0,n.jsxs)(t.li,{children:["Once the meeting ends, you will be getting a webhook with the event ",(0,n.jsx)(t.code,{children:"meeting.transcript"}),". The body of this webhook will consist of the entire meeting transcript."]}),"\n"]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("title",{children:"Meeting Transcription Guide"}),(0,n.jsx)("meta",{name:"description",content:"Explore meeting transcription capabilities with ProductDB's AI. Follow our guide to understand and implement transcription features."})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(96540);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);