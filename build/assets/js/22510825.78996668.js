"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[27430],{82745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=n(74848),s=n(28453);const l={title:"Basic structure",sidebar_position:1},o=void 0,r={id:"build-pre-call-ui/build-your-own/initial-code-skeleton",title:"Basic structure",description:"What are we building?",source:"@site/docs/ios/build-pre-call-ui/build-your-own/initial-code-skeleton.mdx",sourceDirName:"build-pre-call-ui/build-your-own",slug:"/build-pre-call-ui/build-your-own/initial-code-skeleton",permalink:"/ios/build-pre-call-ui/build-your-own/initial-code-skeleton",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/ios/build-pre-call-ui/build-your-own/initial-code-skeleton.mdx",tags:[],version:"current",lastUpdatedAt:1723755734,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:1,frontMatter:{title:"Basic structure",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"ProductDBSetupScreen",permalink:"/ios/build-pre-call-ui/default-setup-screen"},next:{title:"Setting Screen",permalink:"/ios/build-pre-call-ui/build-your-own/productdb-setting"}},d={},c=[{value:"What are we building?",id:"what-are-we-building",level:2},{value:"Permissions",id:"permissions",level:3}];function a(e){const t={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"what-are-we-building",children:"What are we building?"}),"\n",(0,i.jsx)(t.p,{children:"We are deconstructing the default setup screen."}),"\n",(0,i.jsx)(t.p,{children:"At the end of this group of docs, we should have the following screen built using low level components."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"meeting UI screenshot with labeled parts",src:n(60103).A+"",width:"263",height:"570"})}),"\n",(0,i.jsx)(t.p,{children:"Let's put a basic skeleton and the initial boilerplate code."}),"\n",(0,i.jsx)(t.p,{children:"Barebone ui needed to redner for name textField and a button to join the meeting will look as follow:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:'let joinButton = ProductDBJoinButton(meeting: self.mobileClient) { [weak self] button, success in\n                      guard let self = self else {return}\n                      if success {\n                          self.delegate?.userJoinedMeetingSuccessfully(sender: self)\n                      }\n                  }\n\nlet textFieldBottom: ProductDBTextField = {\n                                          let textField = ProductDBTextField()\n                                          textField.setPlaceHolder(text: "Insert your name")\n                                          return textField\n                                      }()\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Now inside your ",(0,i.jsx)(t.code,{children:"setup screen"})," you'll need to set name for user"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:"public override func viewDidLoad() {\n    super.viewDidLoad()\n    textFieldBottom.text = self.meeting.localUser.name\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"A common use case of pre-call UI is to give the user a option to set / edit their name."}),"\n",(0,i.jsx)(t.h3,{id:"permissions",children:"Permissions"}),"\n",(0,i.jsxs)(t.p,{children:["Requires ",(0,i.jsx)(t.code,{children:"meeting.localUser.permissions.miscellaneous.canEditDisplayName"})," to be ",(0,i.jsx)(t.code,{children:"true"})]}),"\n",(0,i.jsxs)(t.p,{children:["In the preset editor, ensure ",(0,i.jsx)(t.code,{children:"Miscellaneous > Edit Name"})," is toggled enabled."]}),"\n",(0,i.jsx)("img",{src:"/static/react/preset-edit-name.png"}),"\n",(0,i.jsx)(t.p,{children:"Observe and change textField on text changes"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:"\nfunc setupTextField() {\n  textFieldBottom.addTarget(self, action: #selector(textFieldEditingDidChange), for: .editingChanged)\n  textFieldBottom.delegate = self\n}\n\n@objc func textFieldEditingDidChange(_ sender: Any) {\n  if !((textFieldBottom.text?.trimmingCharacters(in: .whitespaces).isEmpty) ?? false) {\n      if let text = textFieldBottom.text {\n          self.meeting.localUser.name = text\n      }\n  }\n}\n\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"meeting.localUser.name = text"})," sets the new name for the participant."]}),"\n",(0,i.jsxs)(t.p,{children:["At the end, we let user join the meeting using ",(0,i.jsx)(t.code,{children:"meeting.joinRoom()"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},60103:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/meeting-setup-c929316cccbe4e4c20fc788089944c8d.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(96540);const s={},l=i.createContext(s);function o(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);