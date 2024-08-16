"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[85854],{79494:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var o=i(74848),n=i(28453);const r={title:"Monitor Recording Status",sidebar_position:5,description:"Explore how to monitor the status of recordings with ProductDB's capabilities. Follow our guide for effective monitoring and management."},s=void 0,d={id:"capabilities/recording/monitor-status",title:"Monitor Recording Status",description:"Explore how to monitor the status of recordings with ProductDB's capabilities. Follow our guide for effective monitoring and management.",source:"@site/docs/guides/capabilities/recording/monitor-status.mdx",sourceDirName:"capabilities/recording",slug:"/capabilities/recording/monitor-status",permalink:"/guides/capabilities/recording/monitor-status",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/guides/capabilities/recording/monitor-status.mdx",tags:[],version:"current",lastUpdatedAt:1723750666,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:5,frontMatter:{title:"Monitor Recording Status",sidebar_position:5,description:"Explore how to monitor the status of recordings with ProductDB's capabilities. Follow our guide for effective monitoring and management."},sidebar:"tutorialSidebar",previous:{title:"Upload Recording to Your Cloud",permalink:"/guides/capabilities/recording/custom-cloud-storage"},next:{title:"Configure Video Settings",permalink:"/guides/capabilities/recording/configure-codecs"}},a={},c=[{value:"Recording states",id:"recording-states",level:2},{value:"Fetching the state",id:"fetching-the-state",level:2},{value:'Using the <code>recording.statusUpdate</code> webhook <div class="header-tag tag-danger">Recommended</div>',id:"using-the-recordingstatusupdate-webhook-recommended",level:3},{value:"By polling HTTP APIs",id:"by-polling-http-apis",level:3}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"recording-states",children:"Recording states"}),"\n",(0,o.jsx)(t.p,{children:"The recording of a meeting can have the following states:"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"INVOKED"}),(0,o.jsx)(t.td,{children:"Our backend servers have received the recording request, and the master is looking for a ready worker to assign the recording job."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"RECORDING"}),(0,o.jsx)(t.td,{children:"The meeting is currently being recorded by a worker; note that this will also hold true if the meeting is being live streamed."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"UPLOADING"}),(0,o.jsx)(t.td,{children:"The recording has been stopped and the file is being uploaded to the cloud storage. If you have not specified storage details, then the files will be uploaded only to ProductDB's server. Any RTMP and livestreaming link will also stop at this stage."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"UPLOADED"}),(0,o.jsx)(t.td,{children:"The recording file upload is complete and the status webhook is also triggered."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"ERRORED"}),(0,o.jsx)(t.td,{children:"There was an irrecoverable error while recording the meeting and the file will not be available."})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"fetching-the-state",children:"Fetching the state"}),"\n",(0,o.jsx)(t.p,{children:"There are two ways you can track what state a recording is in or view more\ndetails about a recording:"}),"\n",(0,o.jsxs)(t.h3,{id:"using-the-recordingstatusupdate-webhook-recommended",children:["Using the ",(0,o.jsx)(t.code,{children:"recording.statusUpdate"})," webhook ",(0,o.jsx)("div",{class:"header-tag tag-danger",children:"Recommended"})]}),"\n",(0,o.jsxs)(t.p,{children:["ProductDB sends out a ",(0,o.jsx)(t.code,{children:"recording.statusUpdate"})," webhook each time the recording\ntransitions between states during its lifecycle. To learn more on what payloads\nare sent along with each state, and how to configure webhooks, see\n",(0,o.jsx)(t.a,{href:"/guides/capabilities/webhooks/webhook-events#recordingstatusupdate",children:(0,o.jsx)(t.code,{children:"recording.statusUpdate"})}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"by-polling-http-apis",children:"By polling HTTP APIs"}),"\n",(0,o.jsx)(t.p,{children:"Alternatively, you can also use the following APIs:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/api/?v=v2#/operations/get_all_recordings",children:"Fetch all recordings for an organization"}),":\nThis endpoint gets all past, and ongoing recordings linked to a meeting."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/api/?v=v2#/operations/get_active_recording",children:"Fetch active recording"}),": This\nendpoint gets all ongoing recordings of a meeting."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/api/?v=v2#/operations/get_one_recording",children:"Fetch details of a recording"}),": This\nendpoint gets a specific recording using a recording ID."]}),"\n"]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("title",{children:"Monitor Recording Status Guide"}),(0,o.jsx)("meta",{name:"description",content:"Explore how to monitor the status of recordings with ProductDB's capabilities. Follow our guide for effective monitoring and management."})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>d});var o=i(96540);const n={},r=o.createContext(n);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);