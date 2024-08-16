"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[40456],{93358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(74848),i=n(28453),s=n(81398);const r={title:"Customize Control Bar",sidebar_position:4},a=void 0,l={id:"build-in-call-ui/build-your-own/customize-control-bar",title:"Customize Control Bar",description:"Source Code//github.com/productdb-io/react-samples/tree/main/samples/create-your-own-ui",source:"@site/docs/react-ui-kit/build-in-call-ui/build-your-own/customize-control-bar.mdx",sourceDirName:"build-in-call-ui/build-your-own",slug:"/build-in-call-ui/build-your-own/customize-control-bar",permalink:"/react-ui-kit/build-in-call-ui/build-your-own/customize-control-bar",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/react-ui-kit/build-in-call-ui/build-your-own/customize-control-bar.mdx",tags:[],version:"current",lastUpdatedAt:1723758501,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:4,frontMatter:{title:"Customize Control Bar",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Customize Header",permalink:"/react-ui-kit/build-in-call-ui/build-your-own/customize-header"},next:{title:"Build Stage UI using ProductDBGrid",permalink:"/react-ui-kit/build-in-call-ui/build-your-own/stage-ui-using-dyte-grid"}},c={},d=[];function u(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Source Code: ",(0,o.jsx)(t.a,{href:"https://github.com/productdb-io/react-samples/tree/main/samples/create-your-own-ui",children:"https://github.com/productdb-io/react-samples/tree/main/samples/create-your-own-ui"})]}),"\n",(0,o.jsxs)(t.p,{children:["ProductDB's default header component ",(0,o.jsx)(t.code,{children:"ProductDBControlbar"})," can be used as the following."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"<ProductDBControlbar meeting={meeting} />\n"})}),"\n",(0,o.jsx)(t.p,{children:"Following code shows you can customise the ProductDBControlbar as per your use case."}),"\n","\n","\n",(0,o.jsx)(s.A,{hide:[{start:1,end:5},{start:44,end:241}],highlight:[{start:6,end:42}],file:"\nimport { defaultConfig, generateConfig, ProductDBBreakoutRoomsToggle, ProductDBCameraToggle, ProductDBChatToggle, ProductDBControlbar, ProductDBControlbarButton, ProductDBDebuggerToggle, ProductDBFullscreenToggle, ProductDBLeaveButton, ProductDBMicToggle, ProductDBMoreToggle, ProductDBMuteAllButton, ProductDBParticipantsToggle, ProductDBPipToggle, ProductDBPluginsToggle, ProductDBPoll, ProductDBPollsToggle, ProductDBRecordingToggle, ProductDBScreenShareToggle, ProductDBSettingsToggle, ProductDBStageToggle } from '@dytesdk/react-ui-kit';\nimport { useDyteMeeting, useDyteSelector } from '@dytesdk/react-web-core';\nimport { useEffect, useState } from 'react';\n\nfunction ControlBarWithCustomUI({\n    meeting, states, config, setStates,\n}: { meeting: ProductDBClient, config: UIConfig, states: CustomStates, setStates: SetStates }\n){\n\n    // Change selector as per your needs.\n    const fullScreenTargetElement = document.querySelector('document') as HTMLElement;\n\n    return <div className=\"flex w-full bg-black text-white justify-between\">\n        <div id=\"controlbar-left\" className=\"flex items-center overflow-visible justify-center\">\n            <ProductDBFullscreenToggle states={states} targetElement={fullScreenTargetElement}/>\n            <ProductDBSettingsToggle states={states} />\n            <ProductDBScreenShareToggle states={states} meeting={meeting} />\n        </div>\n        <div id=\"controlbar-center\" className=\"flex items-center overflow-visible justify-center\">\n            <ProductDBMicToggle meeting={meeting} />\n            <ProductDBCameraToggle meeting={meeting} />\n            <ProductDBStageToggle meeting={meeting} />\n            <ProductDBLeaveButton/>\n            <ProductDBMoreToggle states={states}>\n                <div slot=\"more-elements\">\n                    <ProductDBPipToggle meeting={meeting} states={states} config={config} variant=\"horizontal\" />\n                    <ProductDBMuteAllButton meeting={meeting} variant=\"horizontal\"/>\n                    <ProductDBBreakoutRoomsToggle meeting={meeting} states={states} variant=\"horizontal\"/>\n                    <ProductDBRecordingToggle meeting={meeting} variant=\"horizontal\"/>\n                    <ProductDBDebuggerToggle meeting={meeting} states={states} variant=\"horizontal\"/>\n                </div>\n            </ProductDBMoreToggle>\n        </div>\n        <div id=\"controlbar-right\" className=\"flex items-center overflow-visible justify-center\">\n            <ProductDBChatToggle meeting={meeting} states={states}/>\n            <ProductDBPollsToggle meeting={meeting} states={states}/>\n            <ProductDBParticipantsToggle meeting={meeting} states={states}/>\n            <ProductDBPluginsToggle meeting={meeting} states={states} />\n        </div>\n    </div>\n}\n\nexport default function Meeting() {\n  const { meeting } = useDyteMeeting();\n  const [config, setConfig] = useState(defaultConfig);\n  /**\n  * We need setStates method to add custom functionalities,\n  * as well as to ensure that web-core & ui-kit are in Sync.\n  */\n  const [states, setStates] = useState<CustomStates>({\n    meeting: 'setup',\n    sidebar: 'chat'\n  });\n\nuseEffect(() => {\n  async function setupMeetingConfigs(){\n      const theme = meeting!.self.config;\n      const { config } = generateConfig(theme, meeting!);\n\n      /**\n       * Full screen toggle, by default requests productdb-meeting/ProductDBMeeting element to be in full screen.\n       * Since ProductDBMeeting element is not here,\n       *  we need to pass productdb-fullscreen-toggle, an targetElementId through config.\n       */\n      setFullScreenToggleTargetElement({config, targetElementId: 'root'});\n\n      setConfig({...config});\n\n    /**\n     * Add listeners on meeting & self to monitor leave meeting, join meeting and so on.\n     * This work was earlier done by ProductDBMeeting component internally.\n     */\n      const stateListenersUtils = new ProductDBStateListenersUtils(() => meeting, () => states, () => setStates);\n      stateListenersUtils.addProductDBEventListeners();\n\n      try{\n        await meeting.join();\n      } catch(e){\n        // do nothing\n      }\n    }\n\n    if(meeting){\n      setupMeetingConfigs();\n    }\n\n}, [meeting]);\n\nreturn (\n  /**\n  * Using a ref hack, we are adding \"dyteStateUpdate\" listener,\n  * so that we can listen to child component's internal state changes.\n  */\n  <div className=\"flex w-full h-full bg-black text-white\" ref={(el) => {\n            el?.addEventListener('dyteStateUpdate', (e) => {\n              const { detail: newStateUpdate } = e as unknown as { detail: CustomStates };\n              setStates((oldState: CustomStates) => { return {\n                ...oldState,\n                ...newStateUpdate,\n              }});\n            });\n          }}>\n      <ControlBarWithCustomUI meeting={meeting} config={config} states={states} setStates={setStates} />\n  </div>\n);\n\n}\n\n/**\n* ProductDBStateListenersUtils is a class that listens to web-core changes and syncs them with ui-kit\n*/\nclass ProductDBStateListenersUtils{\n\n    getStates: () => CustomStates;\n\n    getStateSetter: () => (newState: CustomStates) => void;\n\n    getMeeting: () => ProductDBClient;\n\n    get states(){\n        return this.getStates();\n    }\n\n    get setGlobalStates(){\n        return this.getStateSetter();\n    };\n\n    get meeting(){\n        return this.getMeeting();\n    }\n\n    constructor(getMeeting: () => ProductDBClient, getGlobalStates: () => CustomStates, getGlobalStateSetter: () => (newState: CustomStates) => void){\n        this.getMeeting = getMeeting;\n        this.getStates = getGlobalStates;\n        this.getStateSetter = getGlobalStateSetter;\n    }\n    private updateStates(newState: CustomStates){\n        this.setGlobalStates((oldState: CustomStates) => { return {\n            ...oldState,\n            ...newState,\n        }});\n        console.log(newState);\n    }\n    private roomJoinedListener = () => {\n        this.updateStates({ meeting: 'joined' });\n      };\n\n      private socketServiceRoomJoinedListener = () => {\n        if (this.meeting.stage.status === 'ON_STAGE' || this.meeting.stage.status === undefined) return;\n        this.updateStates({ meeting: 'joined' });\n      };\n\n      private waitlistedListener = () => {\n        this.updateStates({ meeting: 'waiting' });\n      };\n\n      private roomLeftListener = ({ state }: { state: RoomLeftState }) => {\n        const states = this.states;\n        if (states?.roomLeftState === 'disconnected') {\n          this.updateStates({ meeting: 'ended', roomLeftState: state });\n          return;\n        }\n        this.updateStates({ meeting: 'ended', roomLeftState: state });\n      };\n\n      private mediaPermissionUpdateListener = ({ kind, message }: {\n        kind: PermissionSettings['kind'],\n        message: string,\n      }) => {\n        if (['audio', 'video'].includes(kind!)) {\n          if (message === 'ACCEPTED' || message === 'NOT_REQUESTED' || this.states.activeDebugger)\n            return;\n          const permissionModalSettings: PermissionSettings = {\n            enabled: true,\n            kind,\n          };\n          this.updateStates({ activePermissionsMessage: permissionModalSettings });\n        }\n      };\n\n      private joinStateAcceptedListener = () => {\n        this.updateStates({ activeJoinStage: true });\n      };\n\n      private handleChangingMeeting(destinationMeetingId: string) {\n        this.updateStates({\n            activeBreakoutRoomsManager: {\n                ...this.states.activeBreakoutRoomsManager,\n                active: this.states.activeBreakoutRoomsManager!.active,\n                destinationMeetingId,\n            }\n        });\n    }\n\n    addProductDBEventListeners(){\n        if (this.meeting.meta.viewType === 'LIVESTREAM') {\n            this.meeting.self.addListener('socketServiceRoomJoined', this.socketServiceRoomJoinedListener);\n          }\n          this.meeting.self.addListener('roomJoined', this.roomJoinedListener);\n\n          this.meeting.self.addListener('waitlisted', this.waitlistedListener);\n          this.meeting.self.addListener('roomLeft', this.roomLeftListener);\n          this.meeting.self.addListener('mediaPermissionUpdate', this.mediaPermissionUpdateListener);\n          this.meeting.self.addListener('joinStageRequestAccepted', this.joinStateAcceptedListener);\n\n          if (this.meeting.connectedMeetings.supportsConnectedMeetings) {\n            this.meeting.connectedMeetings.once('changingMeeting', this.handleChangingMeeting);\n          }\n\n    }\n    cleanupProductDBEventListeners(){\n\n    }\n\n}\n\n/**\n* setFullScreenToggleTargetElement updates the ui-kit config,\n* to set targetElement to full screen toggle.\n*/\nfunction setFullScreenToggleTargetElement({config, targetElementId}: { config: UIConfig, targetElementId: string }){\n    if (config.root && Array.isArray(config.root['div#controlbar-left'])) {\n        const fullScreenToggleIndex = config.root['div#controlbar-left'].indexOf('productdb-fullscreen-toggle');\n        if(fullScreenToggleIndex > -1){\n            config.root['div#controlbar-left'][fullScreenToggleIndex] = ['productdb-fullscreen-toggle', {\n                variant: 'vertical',\n                targetElement: document.querySelector(\"#\"+targetElementId),\n            }];\n        }\n    }\n    ['productdb-more-toggle.activeMoreMenu', 'productdb-more-toggle.activeMoreMenu.md', 'productdb-more-toggle.activeMoreMenu.sm'].forEach((configElemKey) => {\n        const configElem = config?.root?.[configElemKey] as any;\n        configElem?.forEach((dyteElemConfigSet: any) => {\n            if (dyteElemConfigSet[0] === 'productdb-fullscreen-toggle') {\n                dyteElemConfigSet[1].targetElement = document.querySelector(\"#\"+targetElementId);\n            }\n        });\n    });\n}\n\n"})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},81398:(e,t,n)=>{n.d(t,{A:()=>p});var o=n(24967),i=n(96540);const s=e=>`import React, { useEffect } from 'react';\nimport { ProductDBProvider, useDyteClient } from '@dytesdk/react-web-core';\nimport { provideProductDBDesignSystem } from '@dytesdk/react-ui-kit';\nimport Custom from './meeting.tsx';\n\nconst initInProgress = {\n  value: false,\n};\n\nexport default function App() {\n  const [meeting, initMeeting] = useDyteClient();\n\n  useEffect(() => {\n    if (initInProgress.value) return;\n    initInProgress.value = true;\n    initMeeting({\n      roomName: 'qplrfc-uuujcj',\n      authToken:\n        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkYzU0MGRjLWQ5MjUtNDVjMi1hZTFiLWM2NDc2YTUwNmM2NyIsImxvZ2dlZEluIjp0cnVlLCJpYXQiOjE2NjU2NDcxNjksImV4cCI6MTY3NDI4NzE2OX0.hJvo1PV1_jaxwiQbT8ft7Yi4lhIPgAsuEJHqohHYC_2XNef7kA4NhrYLvwrrxOo3AKh9_XTjnj_bsgzIDh35RRggawJniEjuE83ju2xhMXMVaa7TNDje2BsH5-VnFJ4y5hOwxGphrP5iHY_U4k_0qOQcEfVEJMymJvx0gq_Ueds',\n      defaults: {\n        audio: false,\n        video: false,\n      },\n    }).then((m) => {\n\n\n      // window.meeting = m;\n      m.meta.meetingStartedTimestamp = new Date();\n      m.participants.setMockParticipantCount(5, 5);\n      // m.recording.recordingState = 'RECORDING';\n      const theme = document.getElementsByTagName('html')[0].dataset['theme'];\n      initInProgress.value = false;\n      provideProductDBDesignSystem(document.body, {\n        theme: "${e}",\n      });\n      document.getElementsByTagName("html")[0].classList.remove("dark");\n      document.getElementsByTagName("html")[0].classList.remove("light");\n      document.getElementsByTagName("html")[0].classList.add("${e}");\n\n      HTMLAudioElement.prototype.play = function() {};\n      window.tailwind.config.darkMode = 'selector';\n    });\n  }, []);\n\n\n  return (<div className="bg-white dark:bg-black flex justify-center items-center w-full h-screen">\n    <ProductDBProvider value={meeting}><Custom /></ProductDBProvider>\n    </div>\n  );\n}`;var r=n(33257),a=n(59047);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){l(e,t,n[t])}))}return e}const d=(e,t,n,o={})=>"react-ts"==e?{files:{"/App.tsx":s(t),"/meeting.tsx":n},activeFile:"/meeting.tsx",visibleFiles:["/meeting.tsx",...Object.keys(o)],scripts:[]}:"angular"==e?{files:{"/src/app/app.component.html":'<productdb-meeting #meeting show-setup-screen="true"></productdb-meeting>',"/src/app/app.component.ts":n,"/src/app/app.module.ts":"import { NgModule } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\n\nimport { AppComponent } from './app.component';\n\nimport { ProductDBComponentsModule } from '@dytesdk/angular-ui-kit';\n\n@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule, ProductDBComponentsModule],\n  providers: [],\n  bootstrap: [AppComponent],\n})\nexport class AppModule {}"},activeFile:"/src/app/app.component.ts",visibleFiles:["/src/app/app.module.ts","/src/app/app.component.ts","/src/app/app.component.html",...Object.keys(o)],scripts:[]}:{activeFile:"/index.html",visibleFiles:["/index.html"],files:{"/index.html":n},scripts:["https://cdn.jsdelivr.net/npm/@dytesdk/web-core@1.31.0-stripped.2/dist/index.iife.js","https://assets.productdb.io/docs/web.js"]},u=e=>"react-ts"==e?{"@dytesdk/react-ui-kit":"1.66.0","@dytesdk/react-web-core":"1.36.4-stripped.1","@dytesdk/web-core":"1.31.0-stripped.2"}:"angular"==e?{"@dytesdk/angular-ui-kit":"1.66.0","@dytesdk/web-core":"1.31.0-stripped.2"}:{},g=(e,t)=>{let n=[];return e.forEach((e=>{for(let t=e.start;t<=e.end;t++)n.push({className:"highlight",line:t})})),t.forEach((e=>{for(let t=e.start;t<=e.end;t++)n.push({className:"hide",line:t})})),n},m=e=>"light"===e?a.Zw:a.iU;function p({file:e,files:t={},framework:n="react-ts",entry:s,highlight:a=[],additionalDecorators:l=[],hide:p=[],minHeight:f="480px"}){const{colorMode:h}=(0,r.G)(),b=d(n,h,null!=e?e:"",t),S=u(n),v=[...l,...g(a,p)],[w,P]=(0,i.useState)(0===v.length);return(0,i.useEffect)((()=>{const e=()=>{0!==v.length&&1==w&&P(!1)};return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}}),[v.length,w]),i.createElement(o.l5,{template:n,customSetup:{dependencies:c({},S)},theme:m(h),options:{activeFile:b.activeFile,visibleFiles:b.visibleFiles,externalResources:["https://assets.productdb.io/docs/tailwind.js",...b.scripts]},files:b.files},i.createElement("div",{className:"relative top-2 z-10 flex w-fit items-center space-x-2 rounded-sm bg-neutral-800 p-1.5 text-xs font-bold text-neutral-100 dark:bg-neutral-300  dark:text-neutral-900"},i.createElement("span",null,"LIVE EDITOR"),i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",className:"ml-2 h-4"},i.createElement("path",{fill:"#FFD43B",d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"}))),i.createElement("div",{className:"flex flex-col rounded-sm border border-secondary-700 mb-4"},i.createElement("div",{onClick:e=>{e.stopPropagation(),P(!0)},className:"cursor-text"},w?i.createElement(o.cW,{showLineNumbers:!0,showInlineErrors:!0,className:"code-viewer",style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px",overflow:"scroll"}}):i.createElement(o.R8,{className:"code-viewer",initMode:"immediate",decorators:v,style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px"}})),i.createElement(o.G5,{showOpenInCodeSandbox:!1,className:"border-t-2 border-t-secondary-700",style:{flex:1,minHeight:f}})))}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(96540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);