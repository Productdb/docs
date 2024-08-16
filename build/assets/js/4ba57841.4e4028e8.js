"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[57023],{98958:(n,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var o=t(74848),e=t(28453);const c={description:"Learn how to use and customize the DyteNotifications component in Dyte's React UI Kit with our detailed documentation."},a="DyteNotifications",s={id:"components/dyte-notifications",title:"DyteNotifications",description:"Learn how to use and customize the DyteNotifications component in Dyte's React UI Kit with our detailed documentation.",source:"@site/docs/react-ui-kit/components/dyte-notifications.mdx",sourceDirName:"components",slug:"/components/dyte-notifications",permalink:"/react-ui-kit/components/dyte-notifications",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/react-ui-kit/components/dyte-notifications.mdx",tags:[],version:"current",lastUpdatedAt:1723767138,formattedLastUpdatedAt:"Aug 16, 2024",frontMatter:{description:"Learn how to use and customize the DyteNotifications component in Dyte's React UI Kit with our detailed documentation."},sidebar:"tutorialSidebar",previous:{title:"DyteNotification",permalink:"/react-ui-kit/components/dyte-notification"},next:{title:"DyteOverlayModal",permalink:"/react-ui-kit/components/dyte-overlay-modal"}},r={},d=[{value:"Notifications Popup",id:"notifications-popup",level:2},{value:"Notification duration",id:"notification-duration",level:2},{value:"Notification Sound",id:"notification-sound",level:2},{value:"Controlling sound once participants count",id:"controlling-sound-once-participants-count",level:2},{value:"Props",id:"props",level:2}];function l(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,e.R)(),...n.components},{Head:t,PropsTable:c}=i;return t||f("Head",!0),c||f("PropsTable",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"dytenotifications",children:"DyteNotifications"}),"\n",(0,o.jsx)(i.p,{children:"A component which handles notifications."}),"\n",(0,o.jsx)(i.p,{children:"You can configure which notifications you want to see and which ones you want to hear.\nThere are also certain limits which you can set as well."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-jsx",metastring:"live",live:!0,children:"<DyteNotifications\n  meeting={meeting}\n  config={{\n    config: {\n      notifications: {\n        participant_left: false,\n      },\n      notification_sounds: {\n        participant_left: false,\n      },\n      participant_joined_sound_notification_limit: 10,\n      participant_chat_message_sound_notification_limit: 10,\n    },\n  }}\n/>\n"})}),"\n",(0,o.jsxs)(i.p,{children:["The configurations take a specific category of notifications. Available\ncategories are ",(0,o.jsx)(i.code,{children:"participant_joined"}),", ",(0,o.jsx)(i.code,{children:"participant_left"}),",\n",(0,o.jsx)(i.code,{children:"participant_joined_waitlist"}),", ",(0,o.jsx)(i.code,{children:"chat"}),", ",(0,o.jsx)(i.code,{children:"polls"}),", ",(0,o.jsx)(i.code,{children:"webinar"}),", ",(0,o.jsx)(i.code,{children:"tab_sync"}),"."]}),"\n",(0,o.jsx)(i.h2,{id:"notifications-popup",children:"Notifications Popup"}),"\n",(0,o.jsxs)(i.p,{children:["It is possible to customize which activity needs to show a notification alert.\nUse the ",(0,o.jsx)(i.code,{children:"notifications"})," configuration to update individual category of\nnotifications."]}),"\n",(0,o.jsx)(i.p,{children:"All categories are enabled by default."}),"\n",(0,o.jsxs)(i.p,{children:["To disable specific category of notifications set the value of the category to\n",(0,o.jsx)(i.code,{children:"false"})," like below."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-jsx",metastring:"live",live:!0,children:"const config = {\n  notifications: {\n    participant_left: false,\n    chat: false,\n    tab_sync: false,\n  },\n};\n\n<DyteNotifications meeting={meeting} config={config} />;\n"})}),"\n",(0,o.jsx)(i.h2,{id:"notification-duration",children:"Notification duration"}),"\n",(0,o.jsxs)(i.p,{children:["Similar to notification popup, it is possible to customize the duration of the\nnotification popup displayed on screen. By using the ",(0,o.jsx)(i.code,{children:"notification_duration"}),"\nconfiguration, it is possible to change the duration for individual category of\nnotifications."]}),"\n",(0,o.jsx)(i.p,{children:"Here are the default display durations (in milliseconds)"}),"\n",(0,o.jsx)(i.p,{children:"participant_joined: 2000\nparticipant_left: 2000\nparticipant_joined_waitlist: 4000\nchat: 2000\npolls: 2000\nwebinar: 2000\ntab_sync: 2000"}),"\n",(0,o.jsx)(i.p,{children:"To change the duration for a specific category of notifications set the value of\nthe category to the milliseconds."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-jsx",metastring:"live",live:!0,children:"const config = {\n  notification_duration: {\n    participant_joined: 5000, // Show participant joined notification for 5 seconds\n    participant_left: 1000, // Show participant left notification for 1 second only\n    chat: 5000, // Show chat for 1 second only\n    tab_sync: 1000, // Show tab sync changes for 1 second only\n  },\n};\n\n<DyteNotifications meeting={meeting} config={config} />;\n"})}),"\n",(0,o.jsx)(i.h2,{id:"notification-sound",children:"Notification Sound"}),"\n",(0,o.jsx)(i.p,{children:"It is possible to turn off the notification sound for specific category of\nnotifications."}),"\n",(0,o.jsxs)(i.p,{children:["To disable sound for a specific category of notifications set the value of the\ncategory to ",(0,o.jsx)(i.code,{children:"false"})," like below."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-jsx",metastring:"live",live:!0,children:"const config = {\n  notification_sounds: {\n    participant_left: false,\n    chat: false,\n    polls: false,\n  },\n};\n\n<DyteNotifications meeting={meeting} config={config} />;\n"})}),"\n",(0,o.jsx)(i.h2,{id:"controlling-sound-once-participants-count",children:"Controlling sound once participants count"}),"\n",(0,o.jsx)(i.p,{children:"It is possible to disable notification / sound automatically once the number of\nparticipants cross a certain limit."}),"\n",(0,o.jsx)(i.p,{children:"Turn off the notification sound for new chat messages after 10 participants"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-jsx",children:"const config = {\n  participant_chat_message_sound_notification_limit: 10,\n};\n"})}),"\n",(0,o.jsx)(i.p,{children:"Turn off the notification sound for participant joined notifications after 10\nparticipants"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-jsx",children:"const config = {\n  participant_joined_sound_notification_limit: 10,\n};\n"})}),"\n",(0,o.jsx)(i.p,{children:"Currently the number of configurations are limited, we are adding it for more\ncategories soon."}),"\n",(0,o.jsx)(i.h2,{id:"props",children:"Props"}),"\n",(0,o.jsx)(c,{of:"dyte-notifications"}),"\n",(0,o.jsx)(t,{children:(0,o.jsx)("title",{children:"React UI Kit DyteNotifications"})})]})}function p(n={}){const{wrapper:i}={...(0,e.R)(),...n.components};return i?(0,o.jsx)(i,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}function f(n,i){throw new Error("Expected "+(i?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(n,i,t)=>{t.d(i,{R:()=>a,x:()=>s});var o=t(96540);const e={},c=o.createContext(e);function a(n){const i=o.useContext(c);return o.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function s(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:a(n.components),o.createElement(c.Provider,{value:i},n.children)}}}]);