"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[41392],{46715:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var i=n(74848),s=n(28453),o=n(81398);const a={title:"Build Stage UI using ProductDBGrid",sidebar_position:5},r=void 0,d={id:"build-in-call-ui/build-your-own/stage-ui-using-dyte-grid",title:"Build Stage UI using ProductDBGrid",description:"Source Code//github.com/productdb-io/react-samples/tree/main/samples/create-your-own-ui",source:"@site/docs/react-ui-kit/build-in-call-ui/build-your-own/stage-ui-using-dyte-grid.mdx",sourceDirName:"build-in-call-ui/build-your-own",slug:"/build-in-call-ui/build-your-own/stage-ui-using-dyte-grid",permalink:"/react-ui-kit/build-in-call-ui/build-your-own/stage-ui-using-dyte-grid",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/react-ui-kit/build-in-call-ui/build-your-own/stage-ui-using-dyte-grid.mdx",tags:[],version:"current",lastUpdatedAt:1723758501,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:5,frontMatter:{title:"Build Stage UI using ProductDBGrid",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Customize Control Bar",permalink:"/react-ui-kit/build-in-call-ui/build-your-own/customize-control-bar"},next:{title:"Add custom sidebar",permalink:"/react-ui-kit/build-in-call-ui/build-your-own/add-custom-sidebar"}},c={},l=[];function u(e){const t={a:"a",code:"code",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Source Code: ",(0,i.jsx)(t.a,{href:"https://github.com/productdb-io/react-samples/tree/main/samples/create-your-own-ui",children:"https://github.com/productdb-io/react-samples/tree/main/samples/create-your-own-ui"})]}),"\n",(0,i.jsx)(t.p,{children:"Following code shows you can customise or build the stage UI of a meeting as per your use case."}),"\n","\n","\n",(0,i.jsx)(o.A,{hide:[{start:1,end:5},{start:29,end:199}],highlight:[{start:6,end:27}],file:"\nimport { ProductDBStage, ProductDBGrid, ProductDBNotifications, ProductDBSidebar, ProductDBControlbar, ProductDBParticipantsAudio, ProductDBDialogManager, defaultConfig, generateConfig } from '@dytesdk/react-ui-kit';\nimport { useDyteMeeting, useDyteSelector } from '@dytesdk/react-web-core';\nimport { useEffect, useState } from 'react';\n\nfunction MeetingStage({ meeting, config, states, setStates }: { meeting: ProductDBClient, config: UIConfig, states: CustomStates, setStates: SetStates}) {\n\nreturn (\n\n<div className=\"flex h-full w-full flex-col\">\n  <ProductDBStage className=\"flex h-full w-full flex-1 p-2\">\n    <ProductDBGrid meeting={meeting} config={config} states={states} />\n    <ProductDBNotifications meeting={meeting} config={config} states={states} />\n    {states.activeSidebar && (\n      <ProductDBSidebar\n        meeting={meeting}\n        config={config}\n        states={states}\n        setStates={setStates}\n      />\n    )}\n  </ProductDBStage>\n  <ProductDBParticipantsAudio meeting={meeting} />\n  <ProductDBDialogManager meeting={meeting} config={config} states={states} />\n  <ProductDBControlbar meeting={meeting} config={config} states={states} />\n</div>\n); }\n\nexport default function Meeting() {\nconst { meeting } = useDyteMeeting();\nconst [config, setConfig] = useState(defaultConfig);\nconst [states, setStates] = useState<CustomStates>({\n  meeting: 'setup',\n  sidebar: 'chat'\n});\n\nuseEffect(() => {\nasync function setupMeetingConfigs(){\nconst theme = meeting!.self.config;\nconst { config } = generateConfig(theme, meeting!);\n\n      /**\n       * Full screen by default requests productdb-meeting/ProductDBMeeting element to be in full screen.\n       * Since ProductDBMeeting element is not here,\n       *  we need to pass productdb-fullscreen-toggle, an targetElementId through config.\n       */\n      // setFullScreenToggleTargetElement({config, targetElementId: 'root'});\n\n      setConfig({...config});\n\n    /**\n     * Add listeners on meeting & self to monitor leave meeting, join meeting and so on.\n     * This work was earlier done by ProductDBMeeting component internally.\n     */\n      const stateListenersUtils = new ProductDBStateListenersUtils(() => meeting, () => states, () => setStates);\n      stateListenersUtils.addProductDBEventListeners();\n\n      try{\n        await meeting.join();\n      } catch(e){\n        // do nothing\n      }\n    }\n\n    if(meeting){\n    /**\n     * During development phase, make sure to expose meeting object to window,\n     * for debugging purposes.\n     */\n      Object.assign(window, {\n        meeting,\n      })\n      setupMeetingConfigs();\n    }\n\n}, [meeting]);\n\nreturn (\n\n  <div className=\"flex w-full h-full\" ref={(el) => {\n            el?.addEventListener('dyteStateUpdate', (e) => {\n              const { detail: newStateUpdate } = e as unknown as { detail: CustomStates };\n              console.log('dyteStateUpdateSetup:: ', newStateUpdate);\n              setStates((oldState: CustomStates) => { return {\n                ...oldState,\n                ...newStateUpdate,\n              }});\n            });\n          }}>\n      <MeetingStage meeting={meeting} config={config} states={states} setStates={setStates} />\n  </div>\n)\n\n}\n\nexport class ProductDBStateListenersUtils{\n    \n    getStates: () => CustomStates;\n\n    getStateSetter: () => (newState: CustomStates) => void;\n\n    getMeeting: () => ProductDBClient;\n\n    get states(){\n        return this.getStates();\n    }\n\n    get setGlobalStates(){\n        return this.getStateSetter();\n    };\n\n    get meeting(){\n        return this.getMeeting();\n    }\n\n    constructor(getMeeting: () => ProductDBClient, getGlobalStates: () => CustomStates, getGlobalStateSetter: () => (newState: CustomStates) => void){\n        this.getMeeting = getMeeting;\n        this.getStates = getGlobalStates;\n        this.getStateSetter = getGlobalStateSetter;\n    }\n    private updateStates(newState: CustomStates){\n        this.setGlobalStates((oldState: CustomStates) => { return {\n            ...oldState,\n            ...newState,\n        }});\n        console.log(newState);\n    }\n    private roomJoinedListener = () => {\n        this.updateStates({ meeting: 'joined' });\n      };\n\n      private socketServiceRoomJoinedListener = () => {\n        if (this.meeting.stage.status === 'ON_STAGE' || this.meeting.stage.status === undefined) return;\n        this.updateStates({ meeting: 'joined' });\n      };\n\n      private waitlistedListener = () => {\n        this.updateStates({ meeting: 'waiting' });\n      };\n\n      private roomLeftListener = ({ state }: { state: RoomLeftState }) => {\n        const states = this.states;\n        if (states?.roomLeftState === 'disconnected') {\n          this.updateStates({ meeting: 'ended', roomLeftState: state });\n          return;\n        }\n        this.updateStates({ meeting: 'ended', roomLeftState: state });\n      };\n\n      private mediaPermissionUpdateListener = ({ kind, message }: {\n        kind: PermissionSettings['kind'],\n        message: string,\n      }) => {\n        if (['audio', 'video'].includes(kind!)) {\n          if (message === 'ACCEPTED' || message === 'NOT_REQUESTED' || this.states.activeDebugger)\n            return;\n          const permissionModalSettings: PermissionSettings = {\n            enabled: true,\n            kind,\n          };\n          this.updateStates({ activePermissionsMessage: permissionModalSettings });\n        }\n      };\n\n      private joinStateAcceptedListener = () => {\n        this.updateStates({ activeJoinStage: true });\n      };\n\n      private handleChangingMeeting(destinationMeetingId: string) {\n        this.updateStates({\n            activeBreakoutRoomsManager: {\n                ...this.states.activeBreakoutRoomsManager,\n                active: this.states.activeBreakoutRoomsManager!.active,\n                destinationMeetingId,\n            }\n        });\n    }\n\n    addProductDBEventListeners(){\n        if (this.meeting.meta.viewType === 'LIVESTREAM') {\n            this.meeting.self.addListener('socketServiceRoomJoined', this.socketServiceRoomJoinedListener);\n          }\n          this.meeting.self.addListener('roomJoined', this.roomJoinedListener);\n\n          this.meeting.self.addListener('waitlisted', this.waitlistedListener);\n          this.meeting.self.addListener('roomLeft', this.roomLeftListener);\n          this.meeting.self.addListener('mediaPermissionUpdate', this.mediaPermissionUpdateListener);\n          this.meeting.self.addListener('joinStageRequestAccepted', this.joinStateAcceptedListener);\n\n          if (this.meeting.connectedMeetings.supportsConnectedMeetings) {\n            this.meeting.connectedMeetings.once('changingMeeting', this.handleChangingMeeting);\n          }\n\n    }\n    cleanupProductDBEventListeners(){\n\n    }\n\n}\n"}),"\n",(0,i.jsx)(t.p,{children:"Few of the crucial components that we added here are:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"ProductDBNotifications"})," to show notifications related to device plug/unplug and peer join/leave."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"ProductDBParticipantsAudio"})," to play other participant audio."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"ProductDBSidebar"})," to show sidebars for Chat, Plugins and polls."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"ProductDBDialogManager"})," contails all modals such as settings, breakout rooms, and leave action."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"ProductDBGrid"})," is the most crucial component here. It internally changes the UI based on the shared screens, pinned participants, spotlight, multi-user call."]}),"\n",(0,i.jsx)(t.p,{children:"In upcoming guides we will discuss how we can build ProductDBGrid from scratch as well. But before that, let's discuss how we can build a custom sidebar next."})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},81398:(e,t,n)=>{n.d(t,{A:()=>p});var i=n(24967),s=n(96540);const o=e=>`import React, { useEffect } from 'react';\nimport { ProductDBProvider, useDyteClient } from '@dytesdk/react-web-core';\nimport { provideProductDBDesignSystem } from '@dytesdk/react-ui-kit';\nimport Custom from './meeting.tsx';\n\nconst initInProgress = {\n  value: false,\n};\n\nexport default function App() {\n  const [meeting, initMeeting] = useDyteClient();\n\n  useEffect(() => {\n    if (initInProgress.value) return;\n    initInProgress.value = true;\n    initMeeting({\n      roomName: 'qplrfc-uuujcj',\n      authToken:\n        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkYzU0MGRjLWQ5MjUtNDVjMi1hZTFiLWM2NDc2YTUwNmM2NyIsImxvZ2dlZEluIjp0cnVlLCJpYXQiOjE2NjU2NDcxNjksImV4cCI6MTY3NDI4NzE2OX0.hJvo1PV1_jaxwiQbT8ft7Yi4lhIPgAsuEJHqohHYC_2XNef7kA4NhrYLvwrrxOo3AKh9_XTjnj_bsgzIDh35RRggawJniEjuE83ju2xhMXMVaa7TNDje2BsH5-VnFJ4y5hOwxGphrP5iHY_U4k_0qOQcEfVEJMymJvx0gq_Ueds',\n      defaults: {\n        audio: false,\n        video: false,\n      },\n    }).then((m) => {\n\n\n      // window.meeting = m;\n      m.meta.meetingStartedTimestamp = new Date();\n      m.participants.setMockParticipantCount(5, 5);\n      // m.recording.recordingState = 'RECORDING';\n      const theme = document.getElementsByTagName('html')[0].dataset['theme'];\n      initInProgress.value = false;\n      provideProductDBDesignSystem(document.body, {\n        theme: "${e}",\n      });\n      document.getElementsByTagName("html")[0].classList.remove("dark");\n      document.getElementsByTagName("html")[0].classList.remove("light");\n      document.getElementsByTagName("html")[0].classList.add("${e}");\n\n      HTMLAudioElement.prototype.play = function() {};\n      window.tailwind.config.darkMode = 'selector';\n    });\n  }, []);\n\n\n  return (<div className="bg-white dark:bg-black flex justify-center items-center w-full h-screen">\n    <ProductDBProvider value={meeting}><Custom /></ProductDBProvider>\n    </div>\n  );\n}`;var a=n(33257),r=n(59047);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){d(e,t,n[t])}))}return e}const l=(e,t,n,i={})=>"react-ts"==e?{files:{"/App.tsx":o(t),"/meeting.tsx":n},activeFile:"/meeting.tsx",visibleFiles:["/meeting.tsx",...Object.keys(i)],scripts:[]}:"angular"==e?{files:{"/src/app/app.component.html":'<productdb-meeting #meeting show-setup-screen="true"></productdb-meeting>',"/src/app/app.component.ts":n,"/src/app/app.module.ts":"import { NgModule } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\n\nimport { AppComponent } from './app.component';\n\nimport { ProductDBComponentsModule } from '@dytesdk/angular-ui-kit';\n\n@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule, ProductDBComponentsModule],\n  providers: [],\n  bootstrap: [AppComponent],\n})\nexport class AppModule {}"},activeFile:"/src/app/app.component.ts",visibleFiles:["/src/app/app.module.ts","/src/app/app.component.ts","/src/app/app.component.html",...Object.keys(i)],scripts:[]}:{activeFile:"/index.html",visibleFiles:["/index.html"],files:{"/index.html":n},scripts:["https://cdn.jsdelivr.net/npm/@dytesdk/web-core@1.31.0-stripped.2/dist/index.iife.js","https://assets.productdb.io/docs/web.js"]},u=e=>"react-ts"==e?{"@dytesdk/react-ui-kit":"1.66.0","@dytesdk/react-web-core":"1.36.4-stripped.1","@dytesdk/web-core":"1.31.0-stripped.2"}:"angular"==e?{"@dytesdk/angular-ui-kit":"1.66.0","@dytesdk/web-core":"1.31.0-stripped.2"}:{},m=(e,t)=>{let n=[];return e.forEach((e=>{for(let t=e.start;t<=e.end;t++)n.push({className:"highlight",line:t})})),t.forEach((e=>{for(let t=e.start;t<=e.end;t++)n.push({className:"hide",line:t})})),n},g=e=>"light"===e?r.Zw:r.iU;function p({file:e,files:t={},framework:n="react-ts",entry:o,highlight:r=[],additionalDecorators:d=[],hide:p=[],minHeight:f="480px"}){const{colorMode:h}=(0,a.G)(),b=l(n,h,null!=e?e:"",t),S=u(n),w=[...d,...m(r,p)],[v,x]=(0,s.useState)(0===w.length);return(0,s.useEffect)((()=>{const e=()=>{0!==w.length&&1==v&&x(!1)};return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}}),[w.length,v]),s.createElement(i.l5,{template:n,customSetup:{dependencies:c({},S)},theme:g(h),options:{activeFile:b.activeFile,visibleFiles:b.visibleFiles,externalResources:["https://assets.productdb.io/docs/tailwind.js",...b.scripts]},files:b.files},s.createElement("div",{className:"relative top-2 z-10 flex w-fit items-center space-x-2 rounded-sm bg-neutral-800 p-1.5 text-xs font-bold text-neutral-100 dark:bg-neutral-300  dark:text-neutral-900"},s.createElement("span",null,"LIVE EDITOR"),s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",className:"ml-2 h-4"},s.createElement("path",{fill:"#FFD43B",d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"}))),s.createElement("div",{className:"flex flex-col rounded-sm border border-secondary-700 mb-4"},s.createElement("div",{onClick:e=>{e.stopPropagation(),x(!0)},className:"cursor-text"},v?s.createElement(i.cW,{showLineNumbers:!0,showInlineErrors:!0,className:"code-viewer",style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px",overflow:"scroll"}}):s.createElement(i.R8,{className:"code-viewer",initMode:"immediate",decorators:w,style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px"}})),s.createElement(i.G5,{showOpenInCodeSandbox:!1,className:"border-t-2 border-t-secondary-700",style:{flex:1,minHeight:f}})))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);