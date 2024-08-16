"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[92555],{53559:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var o=s(74848),r=s(28453),a=s(60621);const n={title:"Release Notes",sidebar_position:101,sidebar_class_name:"releaseSidebarHeading",tags:["ios-core","releasenotes"]},l=void 0,c={id:"release-notes",title:"Release Notes",description:"The release notes lists all new features, resolved issues, and known issues of iOS Core in chronological order.",source:"@site/docs/ios-core/release-notes.mdx",sourceDirName:".",slug:"/release-notes",permalink:"/ios-core/release-notes",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/ios-core/release-notes.mdx",tags:[{label:"ios-core",permalink:"/ios-core/tags/ios-core"},{label:"releasenotes",permalink:"/ios-core/tags/releasenotes"}],version:"current",lastUpdatedAt:1721134929,formattedLastUpdatedAt:"Jul 16, 2024",sidebarPosition:101,frontMatter:{title:"Release Notes",sidebar_position:101,sidebar_class_name:"releaseSidebarHeading",tags:["ios-core","releasenotes"]},sidebar:"tutorialSidebar",previous:{title:"System Error Codes",permalink:"/ios-core/error-codes"}},i={},d=[];function m(e){const t={p:"p",...(0,r.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"The release notes lists all new features, resolved issues, and known issues of iOS Core in chronological order."}),"\n",(0,o.jsx)(a.A,{noteKey:"ios-core"}),"\n",(0,o.jsx)(s,{children:(0,o.jsx)("title",{children:"iOS Core Release Notes"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},60621:(e,t,s)=>{s.d(t,{A:()=>l});var o=s(96540),r=s(61917),a=s(43379);const n=[{name:"features",color:"#00e0a5",label:"Features"},{name:"fixes",color:"#e0ac12",label:"Fixed Issues"},{name:"perf",color:"#5555aa",label:"Performance Improvements"},{name:"new_api",color:"#1264a3",label:"New API",className:"newAPI"},{name:"dep_api",color:"#e01d5a",label:"Deprecated API",className:"deprecated"}];function l({noteKey:e,tagType:t}){const[s,l]=(0,o.useState)([]);return(0,o.useEffect)((()=>{fetch(`/release-notes/${e}.json`).then((e=>e.json())).then((e=>l(e)))}),[e]),o.createElement("div",{className:"notesContainer"},s.map((e=>o.createElement(o.Fragment,null,e.version&&o.createElement(r.A,{as:"h2",id:e.version},"v",e.version),o.createElement("p",{className:"text-sm"},"Released on"," ",o.createElement("time",null,new Date(1e3*e.createdAt).toLocaleDateString("en-US",{day:"numeric",year:"numeric",month:"long"}))),o.createElement("table",{className:"releaseNotes"},n.map((s=>{var r,n,l;return(null===(r=e[s.name])||void 0===r?void 0:r.length)>0?o.createElement("tr",{className:null!==(l=s.className)&&void 0!==l?l:""},o.createElement("td",{className:"type",style:{borderColor:s.color}},s.label),o.createElement("td",{className:"sublist"},null===(n=e[s.name])||void 0===n?void 0:n.map((e=>{return o.createElement("tr",null,o.createElement("td",null,("react"===t?(s=e,s.replace(/<\s*\/?\s*([a-z][a-z0-9-]*)(\s[^>]*?)?\s*\/?>/g,((e,t,s,o,r)=>{let a=t.split("-").map(((e,t)=>0===t?e:e.charAt(0).toUpperCase()+e.slice(1))).join("");a=a.charAt(0).toUpperCase()+a.slice(1);const n=e.trim().endsWith("/>");return`<${"/"===e.charAt(1)?"/":""}${a}${s||""}${n?" /":""}>`}))):e).split("\n").map(((e,t)=>o.createElement(a.$,{className:"changeline",key:t},e)))));var s})))):null})))))))}},28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>l});var o=s(96540);const r={},a=o.createContext(r);function n(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);