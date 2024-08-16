"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[8977],{22331:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(74848),a=t(28453);const o={title:"Virtual background",sidebar_position:5},r=void 0,s={id:"build-pre-call-ui/build-your-own/add-middleware",title:"Virtual background",description:"To add a video background changer, we need to do the install an addon first.",source:"@site/docs/react-ui-kit/build-pre-call-ui/build-your-own/add-middleware.mdx",sourceDirName:"build-pre-call-ui/build-your-own",slug:"/build-pre-call-ui/build-your-own/add-middleware",permalink:"/react-ui-kit/build-pre-call-ui/build-your-own/add-middleware",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/react-ui-kit/build-pre-call-ui/build-your-own/add-middleware.mdx",tags:[],version:"current",lastUpdatedAt:1723767138,formattedLastUpdatedAt:"Aug 16, 2024",sidebarPosition:5,frontMatter:{title:"Virtual background",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Audio/video - Device Selection",permalink:"/react-ui-kit/build-pre-call-ui/build-your-own/add-audio-video-device"},next:{title:"DyteMeeting",permalink:"/react-ui-kit/build-in-call-ui/default-meeting-ui"}},d={},c=[{value:"File: CustomMeetingPreview.tsx",id:"file-custommeetingpreviewtsx",level:3}];function l(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"To add a video background changer, we need to do the install an addon first."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"npm i @dytesdk/ui-kit-addons\n"})}),"\n",(0,i.jsx)(n.h3,{id:"file-custommeetingpreviewtsx",children:"File: CustomMeetingPreview.tsx"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import {\n  DyteParticipantTile,\n  DyteAvatar,\n  DyteNameTag,\n  DyteAudioVisualizer,\n  DyteMicToggle,\n  DyteCameraToggle,\n  DyteSettingsToggle,\n  DyteButton,\n  DyteControlbarButton,\n  defaultIconPack,\n  registerAddons,\n  DyteIcon,\n} from '@dytesdk/react-ui-kit';\nimport type DyteClient from '@dytesdk/web-core';\nimport { useEffect, useState } from 'react';\nimport { CustomStates, SetState } from './types';\nimport MediaPreviewModal from './media-preview-modal';\nimport VideoBackground from '@dytesdk/ui-kit-addons/video-background';\n\nconst effectsSVG =\n  '<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M19.745 4C20.3417 4 20.914 4.23705 21.336 4.65901C21.7579 5.08097 21.995 5.65326 21.995 6.25V12.805C21.5485 12.3774 21.0434 12.0154 20.495 11.73V6.25C20.495 6.05109 20.416 5.86032 20.2753 5.71967C20.1347 5.57902 19.9439 5.5 19.745 5.5H4.25C4.05109 5.5 3.86032 5.57902 3.71967 5.71967C3.57902 5.86032 3.5 6.05109 3.5 6.25V17.755C3.5 18.169 3.836 18.505 4.25 18.505L6.999 18.504L7 15.75C7.00002 15.3108 7.16517 14.8877 7.46268 14.5646C7.76019 14.2415 8.1683 14.0421 8.606 14.006L8.75 14H12.022C11.7223 14.4675 11.484 14.9716 11.313 15.5H8.75C8.69368 15.5001 8.63904 15.5192 8.59493 15.5542C8.55083 15.5893 8.51984 15.6382 8.507 15.693L8.5 15.75L8.499 18.504H11.077C11.1569 19.0193 11.2989 19.5229 11.5 20.004H4.25C3.65344 20.004 3.08129 19.7671 2.65936 19.3453C2.23744 18.9236 2.00027 18.3516 2 17.755V6.25C2 5.65326 2.23705 5.08097 2.65901 4.65901C3.08097 4.23705 3.65326 4 4.25 4H19.745Z\"></path><path d=\"M12 7C12.7956 7 13.5587 7.31607 14.1213 7.87868C14.6839 8.44129 15 9.20435 15 10C15 10.7956 14.6839 11.5587 14.1213 12.1213C13.5587 12.6839 12.7956 13 12 13C11.2044 13 10.4413 12.6839 9.87868 12.1213C9.31607 11.5587 9 10.7956 9 10C9 9.20435 9.31607 8.44129 9.87868 7.87868C10.4413 7.31607 11.2044 7 12 7ZM12 8.5C11.6022 8.5 11.2206 8.65804 10.9393 8.93934C10.658 9.22064 10.5 9.60218 10.5 10C10.5 10.3978 10.658 10.7794 10.9393 11.0607C11.2206 11.342 11.6022 11.5 12 11.5C12.3978 11.5 12.7794 11.342 13.0607 11.0607C13.342 10.7794 13.5 10.3978 13.5 10C13.5 9.60218 13.342 9.22064 13.0607 8.93934C12.7794 8.65804 12.3978 8.5 12 8.5Z\"></path><path d=\"M23 17.5C23 18.9587 22.4205 20.3576 21.3891 21.3891C20.3576 22.4205 18.9587 23 17.5 23C16.0413 23 14.6424 22.4205 13.6109 21.3891C12.5795 20.3576 12 18.9587 12 17.5C12 16.0413 12.5795 14.6424 13.6109 13.6109C14.6424 12.5795 16.0413 12 17.5 12C18.9587 12 20.3576 12.5795 21.3891 13.6109C22.4205 14.6424 23 16.0413 23 17.5ZM18.055 14.42C18.0207 14.2993 17.9479 14.193 17.8478 14.1174C17.7476 14.0417 17.6255 14.0008 17.5 14.0008C17.3745 14.0008 17.2524 14.0417 17.1522 14.1174C17.0521 14.193 16.9793 14.2993 16.945 14.42L16.388 16.208H14.585C14.019 16.208 13.785 16.962 14.242 17.308L15.7 18.413L15.143 20.2C14.968 20.761 15.584 21.228 16.042 20.881L17.5 19.777L18.958 20.881C19.416 21.228 20.032 20.761 19.857 20.201L19.3 18.413L20.758 17.309C21.216 16.962 20.981 16.208 20.415 16.208H18.612L18.055 14.421V14.42Z\"></path></svg>';\n\nexport default function CustomMeetingPreview() {\n  const [participantName, setParticipantName] = useState('');\n  const { meeting } = useDyteMeeting();\n  const permissions = useDyteSelector((m) => m.self.permissions);\n\n  useEffect(() => {\n    if (!meeting) {\n      return;\n    }\n    const videoBackground = new VideoBackground({\n      modes: ['blur', 'virtual'],\n      images: [\n        'https://assets.dyte.io/backgrounds/bg_0.jpg',\n        'https://assets.dyte.io/backgrounds/bg_1.jpg',\n        'https://assets.dyte.io/backgrounds/bg_2.jpg',\n        'https://assets.dyte.io/backgrounds/bg_3.jpg',\n        'https://assets.dyte.io/backgrounds/bg_4.jpg',\n      ],\n      randomCount: 8,\n      selector: '#dyte-integration-wrapper',\n    });\n    registerAddons([videoBackground], meeting);\n    setParticipantName(meeting.self.name);\n  }, [meeting]);\n\n  return (\n    <div\n      key=\"on-setup-screen\"\n      className=\"flex h-full w-full justify-around p-[10%]\"\n    >\n      <div className=\"flex h-full w-full justify-around p-[10%]\">\n        <DyteParticipantTile meeting={meeting} participant={meeting.self}>\n          <DyteAvatar participant={meeting.self} />\n          <DyteNameTag participant={meeting.self}>\n            <DyteAudioVisualizer participant={meeting.self} slot=\"start\" />\n          </DyteNameTag>\n          <div id=\"user-actions\" className=\"absolute bottom-2 right-2 flex\">\n            <DyteMicToggle meeting={meeting} size=\"sm\"></DyteMicToggle>\n            <DyteCameraToggle meeting={meeting} size=\"sm\"></DyteCameraToggle>\n            <DyteControlbarButton\n              className=\"cursor-pointer\"\n              size=\"sm\"\n              icon={effectsSVG}\n              onClick={() => {\n                const changer = document.querySelector(\n                  'dyte-background-changer'\n                );\n                if (changer) {\n                  const isOpen = changer?.getAttribute('data-open') === 'true';\n                  changer.setAttribute('data-open', isOpen ? 'false' : 'true');\n                  if (changer.shadowRoot?.querySelector('#main')) {\n                    (\n                      changer.shadowRoot.querySelector('#main') as any\n                    ).style.overflow = 'hidden';\n                  }\n                }\n              }}\n            />\n          </div>\n          <div className=\"absolute top-2 right-2\">\n            <DyteSettingsToggle />\n          </div>\n        </DyteParticipantTile>\n        <div className=\"flex h-1/2 w-1/4 flex-col justify-between\">\n          <div className=\"flex flex-col items-center\">\n            <p>Joining as</p>\n            <div>{participantName}</div>\n          </div>\n          {permissions.canEditDisplayName && (\n            <input\n              placeholder=\"Your name\"\n              className=\"bg-secondary-900 focus:border-primary mb-10 rounded-sm border p-2.5\"\n              autoFocus\n              value={participantName}\n              onChange={(event) => setParticipantName(event.target.value)}\n            />\n          )}\n          <DyteButton\n            kind=\"wide\"\n            size=\"lg\"\n            style={{ cursor: participantName ? 'pointer' : 'not-allowed' }}\n            onClick={async () => {\n              if (participantName) {\n                if (meeting.self.permissions.canEditDisplayName) {\n                  await meeting.self.setName(participantName);\n                }\n                await meeting.join();\n              }\n            }}\n          >\n            Join\n          </DyteButton>\n        </div>\n      </div>\n    </div>\n  );\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Here we have added the ",(0,i.jsx)(n.code,{children:"effectsSVG"}),", A button to open/close the background changer modal."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"<DyteControlbarButton\n  className=\"cursor-pointer\"\n  size=\"sm\"\n  icon={effectsSVG}\n  onClick={() => {\n    const changer = document.querySelector('dyte-background-changer');\n    if (changer) {\n      const isOpen = changer?.getAttribute('data-open') === 'true';\n      changer.setAttribute('data-open', isOpen ? 'false' : 'true');\n      if (changer.shadowRoot?.querySelector('#main')) {\n        (changer.shadowRoot.querySelector('#main') as any).style.overflow =\n          'hidden';\n      }\n    }\n  }}\n/>\n"})}),"\n",(0,i.jsx)(n.p,{children:"and the background changer modal itself."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"const videoBackground = new VideoBackground({\n  modes: ['blur', 'virtual'],\n  images: [\n    'https://assets.dyte.io/backgrounds/bg_0.jpg',\n    'https://assets.dyte.io/backgrounds/bg_1.jpg',\n    'https://assets.dyte.io/backgrounds/bg_2.jpg',\n    'https://assets.dyte.io/backgrounds/bg_3.jpg',\n    'https://assets.dyte.io/backgrounds/bg_4.jpg',\n  ],\n  randomCount: 8,\n  selector: '#dyte-integration-wrapper',\n});\nregisterAddons([videoBackground], meeting);\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(96540);const a={},o=i.createContext(a);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);