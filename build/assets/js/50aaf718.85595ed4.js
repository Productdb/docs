"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[62772],{59724:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var o=r(74848),i=r(28453);const a={title:"Add Watermark to your Recording",sidebar_position:4,slug:"/capabilities/recording/add-watermark",description:"Learn how to add watermarks to your recordings with ProductDB's features. Follow our guide for effective watermarking and customization."},n="Add Watermark to Your Recording",d={id:"capabilities/recording/advanced/add-watermark",title:"Add Watermark to your Recording",description:"Learn how to add watermarks to your recordings with ProductDB's features. Follow our guide for effective watermarking and customization.",source:"@site/docs/guides/capabilities/recording/advanced/add-watermark.mdx",sourceDirName:"capabilities/recording/advanced",slug:"/capabilities/recording/add-watermark",permalink:"/guides/capabilities/recording/add-watermark",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/guides/capabilities/recording/advanced/add-watermark.mdx",tags:[],version:"current",lastUpdatedAt:1723750666,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:4,frontMatter:{title:"Add Watermark to your Recording",sidebar_position:4,slug:"/capabilities/recording/add-watermark",description:"Learn how to add watermarks to your recordings with ProductDB's features. Follow our guide for effective watermarking and customization."},sidebar:"tutorialSidebar",previous:{title:"Set Audio Configurations",permalink:"/guides/capabilities/recording/configure-audio-codec"},next:{title:"Manage Recording Config Precedence Order",permalink:"/guides/capabilities/recording/manage-recording-config-hierarchy"}},s={},c=[];function l(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{Head:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"add-watermark-to-your-recording",children:"Add Watermark to Your Recording"}),"\n",(0,o.jsxs)(t.p,{children:["ProductDB's watermark feature enables you to include an image as a watermark in your recording. To add watermark, configure the following parameters to video_config in the ",(0,o.jsx)(t.a,{href:"/api#/operations/start_recording",children:"Start recording API"}),"."]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:(0,o.jsx)(t.strong,{children:"Parameter"})}),(0,o.jsx)(t.th,{children:(0,o.jsx)(t.strong,{children:"Description"})})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"URL"}),(0,o.jsx)(t.td,{children:"Specify the URL of the watermark image"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Position"}),(0,o.jsx)(t.td,{children:"Specify the placement of the watermark, you have the flexibility to choose between left top, right top, left bottom, or right bottom. The default position is set to left top."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Size"}),(0,o.jsx)(t.td,{children:"Specify the height and width of the watermark in pixels."})]})]})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n    "video_config": {\n        "watermark": {\n            "url": "https://test.io/images/client-logos-6.webp",\n            "position": "left top",\n            "size": {\n                "height": 20,\n                "width": 100,\n            }\n        }\n    }\n}\n\n'})}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)("title",{children:"Add Watermark to your Recording Guide"}),(0,o.jsx)("meta",{name:"description",content:"Learn how to add watermarks to your recordings with ProductDB's features. Follow our guide for effective watermarking and customization."})]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>d});var o=r(96540);const i={},a=o.createContext(i);function n(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);