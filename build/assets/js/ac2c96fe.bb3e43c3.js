"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[40756],{76001:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>d,metadata:()=>a,toc:()=>s});var n=o(74848),i=o(28453);const d={image:"/static/ui-kit/1.x.x/components/productdb-dialog.svg",description:"Learn how to use and customize the DyteDialog component in Dyte's React UI Kit with our detailed documentation."},r="DyteDialog",a={id:"components/productdb-dialog",title:"DyteDialog",description:"Learn how to use and customize the DyteDialog component in Dyte's React UI Kit with our detailed documentation.",source:"@site/docs/react-ui-kit/components/productdb-dialog.mdx",sourceDirName:"components",slug:"/components/productdb-dialog",permalink:"/react-ui-kit/components/productdb-dialog",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/react-ui-kit/components/productdb-dialog.mdx",tags:[],version:"current",lastUpdatedAt:1723760454,formattedLastUpdatedAt:"Aug 15, 2024",frontMatter:{image:"/static/ui-kit/1.x.x/components/productdb-dialog.svg",description:"Learn how to use and customize the DyteDialog component in Dyte's React UI Kit with our detailed documentation."},sidebar:"tutorialSidebar",previous:{title:"DyteDialogManager",permalink:"/react-ui-kit/components/productdb-dialog-manager"},next:{title:"ProductDBEmojiPicker",permalink:"/react-ui-kit/components/productdb-emoji-picker"}},c={},s=[{value:"Props",id:"props",level:2}];function l(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...t.components},{Head:o,PropsTable:d}=e;return o||u("Head",!0),d||u("PropsTable",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"dytedialog",children:"DyteDialog"}),"\n",(0,n.jsx)(e.p,{children:"A dialog component."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-jsx",metastring:"live",live:!0,children:"function Example() {\n  const [showDialog, setShowDialog] = useState(false);\n\n  return (\n    <div>\n      <DyteButton onClick={() => setShowDialog(true)}>Show Dialog</DyteButton>\n      <DyteDialog\n        open={showDialog}\n        onDyteDialogClose={() => setShowDialog(false)}\n      >\n        <div\n          style={{\n            width: '512px',\n            backgroundColor: '#000',\n            color: '#fff',\n            padding: 12,\n            borderRadius: 8,\n          }}\n        >\n          <h3>Hello!</h3>\n          <p style={{ marginBottom: 0 }}>This is some text inside dialog!</p>\n        </div>\n      </DyteDialog>\n    </div>\n  );\n}\n"})}),"\n",(0,n.jsx)(e.h2,{id:"props",children:"Props"}),"\n",(0,n.jsx)(d,{of:"productdb-dialog"}),"\n",(0,n.jsx)(o,{children:(0,n.jsx)("title",{children:"React UI Kit DyteDialog"})})]})}function p(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(l,{...t})}):l(t)}function u(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(t,e,o)=>{o.d(e,{R:()=>r,x:()=>a});var n=o(96540);const i={},d=n.createContext(i);function r(t){const e=n.useContext(d);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),n.createElement(d.Provider,{value:e},t.children)}}}]);