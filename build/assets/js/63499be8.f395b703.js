"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[42917],{74476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=n(74848),r=n(28453);const s={title:"Configure Plugin Properties",sidebar_position:2,description:"Customize your plugin setup with ProductDB Plugin SDK using our detailed guide. Tailor the setup process to match your app's unique requirements."},d=void 0,o={id:"setup/customize",title:"Configure Plugin Properties",description:"Customize your plugin setup with ProductDB Plugin SDK using our detailed guide. Tailor the setup process to match your app's unique requirements.",source:"@site/docs/plugin-sdk/setup/customize.mdx",sourceDirName:"setup",slug:"/setup/customize",permalink:"/plugin-sdk/setup/customize",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/plugin-sdk/setup/customize.mdx",tags:[],version:"current",lastUpdatedAt:1723755734,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:2,frontMatter:{title:"Configure Plugin Properties",sidebar_position:2,description:"Customize your plugin setup with ProductDB Plugin SDK using our detailed guide. Tailor the setup process to match your app's unique requirements."},sidebar:"tutorialSidebar",previous:{title:"Create a Plugin",permalink:"/plugin-sdk/setup/create"},next:{title:"Publish your Plugin",permalink:"/plugin-sdk/setup/publish"}},c={},l=[{value:"Properties of <code>productdb-config</code>",id:"properties-of-productdb-config",level:3},{value:"Next Step",id:"next-step",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["ProductDB allows you to customize various parameters of the Plugins. Using\n",(0,i.jsx)(t.code,{children:"productdb-config.json"}),", you can customize the Plugins such as the name, description,\nicon, tags, and so on. When you create a plugin with the ProductDB CLI,\n",(0,i.jsx)(t.code,{children:"productdb-config.json"})," is automatically generated for you."]}),"\n",(0,i.jsx)(t.admonition,{title:"important",type:"danger",children:(0,i.jsxs)(t.p,{children:["It is important to generate ",(0,i.jsx)(t.code,{children:"productdb-config.json"})," using the\n",(0,i.jsx)(t.a,{href:"/cli/plugins",children:"ProductDB CLI"}),". Each config files comes with a\nunique plugin ID generated by ProductDB. This ID cannot be modified."]})}),"\n",(0,i.jsxs)(t.h3,{id:"properties-of-productdb-config",children:["Properties of ",(0,i.jsx)(t.code,{children:"productdb-config"})]}),"\n",(0,i.jsx)(t.p,{children:"Here is a list of all properties the config object can have:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Property"})}),(0,i.jsxs)(t.th,{children:[(0,i.jsx)(t.strong,{children:"Description"}),"n"]}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Type"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Required"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"name"})}),(0,i.jsx)(t.td,{children:"Name of the plugin."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{children:"true"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"version"})}),(0,i.jsx)(t.td,{children:"Version of the plugin."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{children:"true"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"description"})}),(0,i.jsx)(t.td,{children:"A brief about your plugin, this shows in the plugins tab of the meeting."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{children:"true"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"PluginId"})}),(0,i.jsx)(t.td,{children:"A unique identifier generated by ProductDB. Can't be modified."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{children:"true"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"picture"})}),(0,i.jsx)(t.td,{children:"URL for plugin icon."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{children:"true"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"url"})}),(0,i.jsx)(t.td,{children:"URL where the plugin would be deployed. Auto Generated."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{children:"false"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"files"})}),(0,i.jsx)(t.td,{children:"An object which store lists of files/paths to be included and excluded."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Object"})}),(0,i.jsx)(t.td,{children:"true"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"tags"})}),(0,i.jsx)(t.td,{children:"List of relevant keywords or topics."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string[]"})}),(0,i.jsx)(t.td,{children:"true"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"author"})}),(0,i.jsx)(t.td,{children:"Name of the creator."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{children:"false"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"repository"})}),(0,i.jsx)(t.td,{children:"URL for the Github/Gitlab repository."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"This is what a basic config object looks like:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:'{\n    "name": "my-plugin",\n    "version": "0.0.X",\n    "description": "Add a short description for your plugin here",\n    "pluginId": "79936149-758e-4d8d-8366-23deaxxxxxxx",\n    "picture": "https://productdb-uploads.s3.ap-south-1.amazonaws.com/productdb.png",\n    "url": "https://79936149-758e-4d8d-8366-23deaxxxxxxx-latest.plugins.productdb.app",\n    "files": {\n        "include": [\n            "index.html",\n            "**/*"\n        ],\n        "exclude": [\n            "**/*.ts",\n            "*.md"\n        ]\n    },\n    "tags": ["#plugin"],\n    "author": "",\n    "repository": "",\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"next-step",children:"Next Step"}),"\n",(0,i.jsx)(t.p,{children:"Learn how you can setup your development environment for a seamless development\nexperience."}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("title",{children:"Plugin SDK Configure Plugin Properties"}),(0,i.jsx)("meta",{name:"description",content:"Customize your plugin setup with ProductDB Plugin SDK using our detailed guide. Tailor the setup process to match your app's unique requirements."})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var i=n(96540);const r={},s=i.createContext(r);function d(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);