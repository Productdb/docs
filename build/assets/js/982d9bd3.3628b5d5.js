"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[31348],{52129:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>n,metadata:()=>d,toc:()=>s});var i=t(74848),r=t(28453);const n={title:"Disable upload to ProductDB's bucket",sidebar_position:8,slug:"/capabilities/recording/configure-productdb-bucket-config",description:"Explore how to configure ProductDB bucket settings for recording. Follow our guide for effective bucket configuration."},c=void 0,d={id:"capabilities/recording/advanced/configure-dyte-bucket-config",title:"Disable upload to ProductDB's bucket",description:"Explore how to configure ProductDB bucket settings for recording. Follow our guide for effective bucket configuration.",source:"@site/docs/guides/capabilities/recording/advanced/configure-dyte-bucket-config.mdx",sourceDirName:"capabilities/recording/advanced",slug:"/capabilities/recording/configure-productdb-bucket-config",permalink:"/guides/capabilities/recording/configure-productdb-bucket-config",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/guides/capabilities/recording/advanced/configure-dyte-bucket-config.mdx",tags:[],version:"current",lastUpdatedAt:1723755734,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:8,frontMatter:{title:"Disable upload to ProductDB's bucket",sidebar_position:8,slug:"/capabilities/recording/configure-productdb-bucket-config",description:"Explore how to configure ProductDB bucket settings for recording. Follow our guide for effective bucket configuration."},sidebar:"tutorialSidebar",previous:{title:"Manage Recording Config Precedence Order",permalink:"/guides/capabilities/recording/manage-recording-config-hierarchy"},next:{title:"Interactive Recordings with Timed Metadata",permalink:"/guides/capabilities/recording/interactive-recording"}},a={},s=[];function u(e){const o={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Head:t}=o;return t||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.p,{children:["Once the recording is complete, by default, ProductDB uploads all recordings to ProductDB's AWS S3 bucket. Additionally, a presigned URL is generated with a 7-day expiry. The recording can be accessed using the ",(0,i.jsx)(o.a,{href:"/api/?v=v2#/operations/start_recording",children:(0,i.jsx)(o.code,{children:"downloadUrl"})})," associated with each recording."]}),"\n",(0,i.jsxs)(o.p,{children:["However, ProductDB provides users with the flexibility to choose whether or not to upload their recordings to ProductDB's S3 bucket. If you wish to disable uploads to ProductDB's bucket, you can set the ",(0,i.jsx)(o.code,{children:"dyte_bucket_config"})," parameter to false in the ",(0,i.jsx)(o.a,{href:"/api/?v=v2#/operations/start_recording",children:"Start Recording endpoint"}),"."]}),"\n",(0,i.jsx)(o.p,{children:"For example:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-json",children:'{\n  "dyte_bucket_config": {\n    "enabled": false\n  }\n}\n'})}),"\n",(0,i.jsxs)(o.admonition,{title:"note",type:"info",children:[(0,i.jsx)(o.p,{children:"If you haven't specified an external storage configuration and also disabled uploads to ProductDB's bucket, then the recording will not be uploaded to any location. It is considered as an invalid recording."}),(0,i.jsxs)(o.p,{children:["For more information on how to set your extrenal storage configuration, see ",(0,i.jsx)(o.a,{href:"/guides/capabilities/recording/custom-cloud-storage",children:"Publish Recorded File to Your Cloud Provider"}),"."]})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("title",{children:"Manage ProductDB's Default Recording Upload Settings Guide"}),(0,i.jsx)("meta",{name:"description",content:"Explore how to configure ProductDB bucket settings for recording. Follow our guide for effective bucket configuration."})]})]})}function l(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>c,x:()=>d});var i=t(96540);const r={},n=i.createContext(r);function c(e){const o=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(n.Provider,{value:o},e.children)}}}]);