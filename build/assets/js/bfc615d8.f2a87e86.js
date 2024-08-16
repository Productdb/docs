"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[44658],{64876:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var i=t(74848),r=t(28453);const s={sidebar_position:3},d="Render participant videos",c={id:"basics/display-videos",title:"Render participant videos",description:"To display the videos of all participants you need to show on the screen, you",source:"@site/docs/rn-ui-kit/basics/display-videos.mdx",sourceDirName:"basics",slug:"/basics/display-videos",permalink:"/react-native/basics/display-videos",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/rn-ui-kit/basics/display-videos.mdx",tags:[],version:"current",lastUpdatedAt:1723758501,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Components Basics",permalink:"/react-native/basics/components-basics"},next:{title:"Gallery",permalink:"/react-native/components"}},a={},o=[{value:"Render each participant manually",id:"render-each-participant-manually",level:2},{value:"Grid Components",id:"grid-components",level:2},{value:"Parent Grid Component",id:"parent-grid-component",level:4},{value:"Normal Grid Components",id:"normal-grid-components",level:4},{value:"ProductDBSimpleGrid",id:"productdbsimplegrid",level:5},{value:"ProductDBSimpleGrid",id:"productdbsimplegrid-1",level:5},{value:"ProductDBMixedGrid",id:"productdbmixedgrid",level:5},{value:"Example for SimpleGrid",id:"example-for-simplegrid",level:5}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"render-participant-videos",children:"Render participant videos"}),"\n",(0,i.jsx)(n.p,{children:"To display the videos of all participants you need to show on the screen, you\ncan either render each participant tile manually or choose from our pre built\nvideo tile grid components"}),"\n",(0,i.jsx)(n.h2,{id:"render-each-participant-manually",children:"Render each participant manually"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"function Meeting() {\n  const { meeting } = useDyteMeeting();\n  const activeParticipants = useDyteSelector(\n    (meeting) => meeting.participants.active\n  );\n\n  function ParticipantTile({ participant, meeting }) {\n    return (\n      <ProductDBParticipantTile participant={participant}>\n        <ProductDBNameTag participant={participant} meeting={meeting}>\n          <ProductDBAudioVisualizer participant={participant} />\n        </ProductDBNameTag>\n        <ProductDBAvatar size=\"sm\" participant={participant} />\n      </ProductDBParticipantTile>\n    );\n  }\n\n  return (\n    <View\n      id=\"grid\"\n      style={{\n        flex: 1,\n        flexDirection: 'row',\n        flexWrap: 'wrap',\n        alignContent: 'center',\n        justifyContent: 'center',\n      }}\n    >\n      {activeParticipants.toArray().map((participant) => (\n        <ParticipantTile participant={participant} meeting={meeting} />\n      ))}\n    </View>\n  );\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"But in the real world, a video tile grid is more complex, it is responsive, tile\nsizes are dynamic, there are differnt layouts, the grid handles screensharing\netc."}),"\n",(0,i.jsx)(n.p,{children:"ProductDB has ready to use grid components, that you can use out of the box"}),"\n",(0,i.jsx)(n.h2,{id:"grid-components",children:"Grid Components"}),"\n",(0,i.jsx)(n.p,{children:"There are two types of grid components, so that the grid can be easily extended\nand modularized."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Parent Grid component - ",(0,i.jsx)(n.code,{children:"ProductDBGrid"})]}),"\n",(0,i.jsxs)(n.li,{children:["Child Grid components each having a different layour - ",(0,i.jsx)(n.code,{children:"ProductDBSimpleGrid"}),",\n",(0,i.jsx)(n.code,{children:"ProductDBMixedGrid"}),", ",(0,i.jsx)(n.code,{children:"ProductDBSpotlightGrid"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"parent-grid-component",children:"Parent Grid Component"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ProductDBGrid"})," component is a monolith component which handles all grid related\nevents and data on it's own and passes the following props to it's children."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Prop"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"participants[]"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Active Participants"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"pinnedParticipants[]"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Pinned Participants"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"screenShareParticipants[]"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Participants who are screen sharing"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"plugins[]"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Active Plugins"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"These props are passed to it's children which it computes from the UI Config\nwhich is passed to it. By default it will use the default UI Config."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"function Example() {\n  const { meeting } = useDyteMeeting();\n\n  return (\n    <Row style={{ width: '100%', height: '400' }}>\n      <ProductDBGrid meeting={meeting} />\n    </Row>\n  );\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"normal-grid-components",children:"Normal Grid Components"}),"\n",(0,i.jsx)(n.p,{children:"These components just accept the props mentioned above and render the UI."}),"\n",(0,i.jsx)(n.p,{children:"Read more about them in their Reference pages."}),"\n",(0,i.jsx)(n.h5,{id:"productdbsimplegrid",children:"ProductDBSimpleGrid"}),"\n",(0,i.jsxs)(n.p,{children:["Accepts: ",(0,i.jsx)(n.code,{children:"participants"}),", ",(0,i.jsx)(n.code,{children:"pinnedParticipants"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This grid renders just the ParticipantTiles of the participants you pass to it.\nIt also brings ",(0,i.jsx)(n.code,{children:"pinnedParticipants"})," to the start of the grid."]}),"\n",(0,i.jsx)(n.h5,{id:"productdbsimplegrid-1",children:"ProductDBSimpleGrid"}),"\n",(0,i.jsxs)(n.p,{children:["Accepts: ",(0,i.jsx)(n.code,{children:"participants"}),", ",(0,i.jsx)(n.code,{children:"pinnedParticipants"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This grid renders the ParticipantTiles of the participants and\npinnedParticipants in separate grids."}),"\n",(0,i.jsx)(n.p,{children:"Pinned participants are in spotlight area, i.e; larger grid."}),"\n",(0,i.jsx)(n.h5,{id:"productdbmixedgrid",children:"ProductDBMixedGrid"}),"\n",(0,i.jsxs)(n.p,{children:["Accepts: ",(0,i.jsx)(n.code,{children:"participants"}),", ",(0,i.jsx)(n.code,{children:"pinnedParticipants"}),", ",(0,i.jsx)(n.code,{children:"screenShareParticipants"}),",\n",(0,i.jsx)(n.code,{children:"plugins"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This grid renders screenshares as well as plugins in the main larger Row and\nrenders a smaller grid on the right side which is configurable via the UI\nConfig. You can use SimleGrid or SpotlightGrid here."}),"\n",(0,i.jsxs)(n.p,{children:["If you just want to render ",(0,i.jsx)(n.code,{children:"self"})," twice in a SimpleGrid:"]}),"\n",(0,i.jsx)(n.h5,{id:"example-for-simplegrid",children:"Example for SimpleGrid"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"function Example() {\n  const { meeting } = useDyteMeeting();\n  const [count, setCount] = useState(2);\n\n  if (!meeting) return null;\n\n  const add = () => setCount((count) => count + 1);\n  const remove = () => count > 1 && setCount((count) => count - 1);\n\n  const participants = new Array(count).fill(meeting.self);\n\n  return (\n    <View\n      style={{\n        flex: 1,\n        flexDirection: 'row',\n      }}\n    >\n      <View\n        style={{\n          flex: 1,\n          flexDirection: 'row',\n          flexWrap: 'wrap',\n          justifyContent: 'center',\n          gap: '12px',\n        }}\n      >\n        <ProductDBButton onClick={add}>Add</ProductDBButton>\n        <ProductDBButton variant=\"danger\" onClick={remove}>\n          Remove\n        </ProductDBButton>\n      </View>\n      <View style={{ flexDirection: 'row', width: '100%', height: '400px' }}>\n        <ProductDBSimpleGrid participants={participants} />\n      </View>\n    </View>\n  );\n}\n"})}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("title",{children:"React Native UI Kit Render participant videos"}),(0,i.jsx)("meta",{name:"description",content:"Dive into displaying videos in React Native with ProductDB's guide on fundamental video display concepts. Enhance your React Native app with video capabilities."})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var i=t(96540);const r={},s=i.createContext(r);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);