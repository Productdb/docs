"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[42076],{41023:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var o=t(74848),r=t(28453),a=t(74235),s=t(15947),i=t(16799);const c={sidebar_position:6},l="Customize Meeting Locale",d={id:"customizations/custom-locale",title:"Customize Meeting Locale",description:"Dyte's UI Kit allows you to customize all the text within the video call interface. You can personalize the text to align with your specific locale needs.",source:"@site/docs/react-ui-kit/customizations/custom-locale.mdx",sourceDirName:"customizations",slug:"/customizations/custom-locale",permalink:"/react-ui-kit/customizations/custom-locale",draft:!1,unlisted:!1,editUrl:"https://github.com/productdb/docs/tree/main/docs/react-ui-kit/customizations/custom-locale.mdx",tags:[],version:"current",lastUpdatedAt:1723767138,formattedLastUpdatedAt:"Aug 16, 2024",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Customize Meeting Icons",permalink:"/react-ui-kit/customizations/custom-iconpack"},next:{title:"Release Notes",permalink:"/react-ui-kit/release-notes"}},u={},m=[{value:"Step 1: Integrate Dyte&#39;s web SDK into your web application",id:"step-1-integrate-dytes-web-sdk-into-your-web-application",level:2},{value:"Step 2: Customize the default language pack",id:"step-2-customize-the-default-language-pack",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Details:t,Head:c}=n;return t||h("Details",!0),c||h("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"customize-meeting-locale",children:"Customize Meeting Locale"}),"\n",(0,o.jsx)(n.p,{children:"Dyte's UI Kit allows you to customize all the text within the video call interface. You can personalize the text to align with your specific locale needs."}),"\n",(0,o.jsx)(n.p,{children:"Customizing the locale involve the following steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Integrate Dyte's web SDK into your web application"}),"\n",(0,o.jsx)(n.li,{children:"Customize the default language pack"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"step-1-integrate-dytes-web-sdk-into-your-web-application",children:"Step 1: Integrate Dyte's web SDK into your web application"}),"\n",(0,o.jsxs)(t,{open:!0,children:[(0,o.jsx)("summary",{children:(0,o.jsx)(n.p,{children:"To get started with customizing the icons for your meetings, you need to first integrate Dyte's Web SDK into your web application."})}),(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Install the package using npm or Yarn."}),"\n"]}),(0,o.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,o.jsx)(s.A,{value:"npm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm install @dytesdk/react-ui-kit @dytesdk/react-web-core\n"})})}),(0,o.jsx)(s.A,{value:"yarn",label:"Yarn",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn add @dytesdk/react-ui-kit @dytesdk/react-web-core\n"})})}),(0,o.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pnpm add @dytesdk/react-ui-kit @dytesdk/react-web-core\n"})})})]}),(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["Initialize the Dyte client using the ",(0,o.jsx)(n.code,{children:"useDyteClient()"})," hook. It returns an array with two values, the meeting object and a function to initialize the meeting."]}),"\n",(0,o.jsxs)(n.li,{children:["Create a meeting room using the ",(0,o.jsx)(n.a,{href:"/api#/operations/create_meeting",children:"Create Meeting API"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Generate an ",(0,o.jsx)(n.code,{children:"authToken"})," using the ",(0,o.jsx)(n.a,{href:"/api#/operations/add_participant",children:"Add Participant API"}),". An ",(0,o.jsx)(n.code,{children:"authToken"})," is a unique token that is used to identify a user in the meeting."]}),"\n",(0,o.jsxs)(n.li,{children:["Initialize the meeting using the ",(0,o.jsx)(n.code,{children:"initMeeting()"})," method exposed by ",(0,o.jsx)(n.code,{children:"useDyteClient"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Pass the meeting object to the UI Kit."}),"\n"]}),(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"DyteMeeting"})," component generates the default UI experience. Read more about how to customize the UI ",(0,o.jsx)(n.a,{href:"/react-ui-kit/basics/integrate",children:"here"}),"."]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"import { useDyteClient } from '@dytesdk/react-web-core';\nimport { DyteMeeting } from '@dytesdk/react-ui-kit';\n\nfunction App() {\n  const [meeting, initMeeting] = useDyteClient();\n\n  useEffect(() => {\n    initMeeting({\n      authToken: '<auth-token>',\n      defaults: {\n        audio: false,\n        video: true,\n      },\n    });\n  }, []);\n\n  return <DyteMeeting meeting={meeting} />;\n}\n"})})]}),"\n",(0,o.jsx)(n.h2,{id:"step-2-customize-the-default-language-pack",children:"Step 2: Customize the default language pack"}),"\n",(0,o.jsx)(n.p,{children:"Now that you've integrated Dyte SDK into your application successfully, let's quickly understand how you can customize the language pack for your application."}),"\n",(0,o.jsx)(n.p,{children:"Dyte's default language pack can be imported like so."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"import { defaultLanguage, useLanguage } from '@dytesdk/react-ui-kit';\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In order to replace Dyte's default locale set with your own, you can pass your own locale to the ",(0,o.jsx)(n.code,{children:"t"})," prop exposed by the UI components."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"// Customise Dyte's default locale object\nconst myLanguagePack = useLanguage({\n  ...defaultLanguage,\n  'mute_all': 'Mute All Users',\n});\n\n<DyteMeeting meeting={meeting!} t={myLanguagePack} />;\n"})}),"\n","\n","\n",(0,o.jsx)(i.Ay,{}),"\n",(0,o.jsxs)(c,{children:[(0,o.jsx)("title",{children:"React UI Kit Customize Meeting Locale"}),(0,o.jsx)("meta",{name:"description",content:"Learn how to customize meeting locale in React with Dyte's features. Follow our guide for effective customization and localization."})]})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},16799:(e,n,t)=>{t.d(n,{Ay:()=>s});var o=t(74848),r=t(28453);function a(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"productdbs-default-language-reference",children:"ProductDB's Default Language Reference"}),"\n",(0,o.jsx)(n.p,{children:"Here is the default language pack offered by ProductDB:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "about_call": "About Call",\n  "screen": "Screen",\n  "camera": "Camera",\n  "leave": "Leave",\n  "dismiss": "Dismiss",\n  "logo": "Logo",\n  "page": "Page",\n  "more": "More",\n  "page.prev": "Previous Page",\n  "page.next": "Next Page",\n  "layout": "Layout",\n  "layout.auto": "Auto Layout",\n  "settings": "Settings",\n  "file": "File",\n  "image": "Image",\n  "connection": "Connection",\n  "leave_confirmation": "Are you sure you want to leave the call?",\n  "cancel": "Cancel",\n  "yes": "Yes",\n  "(you)": "(you)",\n  "you": "You",\n  "everyone": "Everyone",\n  "to": "To",\n  "mute": "Mute",\n  "kick": "Kick",\n  "pin": "Pin",\n  "pinned": "Pinned",\n  "accept": "Accept",\n  "unpin": "Unpin",\n  "pip_on": "Show PiP",\n  "pip_off": "Hide PiP",\n  "viewers": "Viewers",\n  "join": "Join",\n  "joined": "Joined",\n  "create": "Create",\n  "close": "Close",\n  "ask": "Ask",\n  "type": "Type",\n  "activate": "Activate",\n  "mic_off": "Mic Off",\n  "disable_mic": "Disable Mic",\n  "mic_on": "Mic On",\n  "enable_mic": "Enable Mic",\n  "audio": "Audio",\n  "test": "Test",\n  "mute_all": "Mute all",\n  "mute_all.description": "Everyone in the meeting will be muted.",\n  "mute_all.header": "Are you sure?",\n  "mute_all.allow_unmute": "Allow others to unmute",\n  "video_off": "Video Off",\n  "disable_video": "Disable Video",\n  "video_on": "Video On",\n  "enable_video": "Enable Video",\n  "video": "Video",\n  "offline": "You\'re offline",\n  "offline.description": "Please ensure that you are connected to the internet.",\n  "disconnected": "You haven\'t joined the meeting.",\n  "disconnected.description": "Please join the meeting in order to see and interact with other participants.",\n  "participants": "Participants",\n  "participants.errors.empty_results": "Couldn\'t find a participant with the specified name or ID.",\n  "participants.empty_list": "It looks like nobody is here.",\n  "participants.turn_off_video": "Turn off video",\n  "polls": "Polls",\n  "polls.by": "Poll by",\n  "polls.question": "Poll Question",\n  "polls.question.placeholder": "What is your poll for?",\n  "polls.answers": "Answers",\n  "polls.option": "Add an option.",\n  "polls.option.placeholder": "Enter an option",\n  "polls.results.anon": "Anonymous",\n  "polls.results.hide": "Hide results before voting",\n  "polls.create": "Create Poll",\n  "polls.cancel": "Cancel Poll Creation",\n  "polls.errors.question_required": "Question is required.",\n  "polls.errors.empty_option": "Empty options not allowed.",\n  "screenshare": "Screen Share",\n  "screenshare.min_preview": "Minimize Preview",\n  "screenshare.max_preview": "Expand Preview",\n  "screenshare.shared": "Your screen is being shared.",\n  "screenshare.start": "Share Screen",\n  "screenshare.stop": "Stop Sharing",\n  "screenshare.error.unknown": "An error occured while starting screenshare.",\n  "screenshare.error.max_count": "Maximum screen share limit reached.",\n  "plugins": "Plugins",\n  "perm_denied": "Permission denied by browser.",\n  "perm_denied.audio": "Mic Permission denied by browser",\n  "perm_denied.video": "Camera Permission denied by browser",\n  "perm_denied.screenshare": "Screenshare Permission denied by browser",\n  "perm_denied.audio.chrome.message": "Under Chrome settings, navigate to \'Privacy and Security > Site Settings > Permissions\'. Select \'Microphone\', provide permission and reload this application.",\n  "perm_denied.video.chrome.message": "Under Chrome settings, navigate to \'Privacy and Security > Site Settings > Permissions\'. Select \'Camera\', provide permission and reload this application.",\n  "perm_denied.screenshare.chrome.message": "Under Chrome settings, navigate to \'Privacy and Security > Site Settings > Permissions\'. Select \'Screenshare\', provide permission and reload this application.",\n  "perm_denied.audio.safari.message": "Under Safari settings, navigate to \'Websites > Microphone\', provide permission and reload this application.",\n  "perm_denied.video.safari.message": "Under Safari settings, navigate to \'Websites > Camera\', provide permission and reload this application.",\n  "perm_denied.screenshare.safari.message": "Under Safari settings, navigate to \'Websites > Screenshare\', provide permission and reload this application.",\n  "perm_denied.audio.edge.message": "Under Edge settings, navigate to \'Site Permissions > Microphone\', provide permission and reload this application.",\n  "perm_denied.video.edge.message": "Under Edge settings, navigate to \'Site Permissions > Camera\', provide permission and reload this application.",\n  "perm_denied.screenshare.edge.message": "Under Edge settings, navigate to \'Site Permissions > Screenshare\', provide permission and reload this application.",\n  "perm_denied.audio.microsoft edge.message": "Under Edge settings, navigate to \'Site Permissions > Microphone\', provide permission and reload this application.",\n  "perm_denied.video.microsoft edge.message": "Under Edge settings, navigate to \'Site Permissions > Camera\', provide permission and reload this application.",\n  "perm_denied.screenshare.microsoft edge.message": "Under Edge settings, navigate to \'Site Permissions > Screenshare\', provide permission and reload this application.",\n  "perm_denied.audio.firefox.message": "Under Firefox settings, navigate to \'Privacy and Security > Permissions > Microphone\', provide permission and reload this application.",\n  "perm_denied.video.firefox.message": "Under Firefox settings, navigate to \'Privacy and Security > Permissions > Camera\', provide permission and reload this application.",\n  "perm_denied.screenshare.firefox.message": "Under Firefox settings, navigate to \'Privacy and Security > Permissions > Screenshare\', provide permission and reload this application.",\n  "perm_denied.audio.others.message": "From your browser settings, enable \'Microphone\' permissions and reload this application.",\n  "perm_denied.video.others.message": "From your browser settings, enable \'Camera\' permissions and reload this application.",\n  "perm_denied.screenshare.others.message": "From your browser settings, enable \'Screenshare\' permissions and reload this application.",\n  "perm_sys_denied": "Permission denied by system",\n  "perm_sys_denied.audio": "Mic permission denied by system",\n  "perm_sys_denied.video": "Camera permission denied by system",\n  "perm_sys_denied.screenshare": "Screenshare permission denied by system",\n  "perm_sys_denied.audio.macos.message": "Open Apple Menu, Navigate to \'System Settings > Privacy & Security > Microphone\'. Allow access to your browser and reload this application.",\n  "perm_sys_denied.video.macos.message": "Open Apple Menu, Navigate to \'System Settings > Privacy & Security > Camera\'. Allow access to your browser and reload this application.",\n  "perm_sys_denied.screenshare.macos.message": "Open Apple Menu, Navigate to \'System Settings > Privacy & Security > Screenshare\'. Allow access to your browser and reload this application.",\n  "perm_sys_denied.audio.ios.message": "On your iPhone, navigate to \'Settings > Privacy > Microphone\', allow access to your browser and reload this application.",\n  "perm_sys_denied.video.ios.message": "On your iPhone, navigate to \'Settings > Privacy > Camera\', allow access to your browser and reload this application.",\n  "perm_sys_denied.screenshare.ios.message": "On your iPhone, navigate to \'Settings > Privacy > Screenshare\', allow access to your browser and reload this application.",\n  "perm_sys_denied.audio.windows.message": "Go to windows settings, select \'Settings > Privacy > Microphone\'. Allow permissions to your browser and reload this application.",\n  "perm_sys_denied.video.windows.message": "Go to windows settings, select \'Settings > Privacy > Camera\'. Allow permissions to your browser and reload this application.",\n  "perm_sys_denied.screenshare.windows.message": "Go to windows settings, select \'Settings > Privacy > Screenshare\'. Allow permissions to your browser and reload this application.",\n  "perm_sys_denied.audio.android.message": "On you device, navigate to \'Settings > Apps\'. Select your browser, allow Microphone permissions and reload this application.",\n  "perm_sys_denied.video.android.message": "On you device, navigate to \'Settings > Apps\'. Select your browser, allow Camera permissions and reload this application.",\n  "perm_sys_denied.screenshare.android.message": "On you device, navigate to \'Settings > Apps\'. Select your browser, allow Screenshare permissions and reload this application.",\n  "perm_sys_denied.audio.others.message": "Navigate to your system settings. Allow \'Microphone\' permissions for your browser and reload this application.",\n  "perm_sys_denied.video.others.message": "Navigate to your system settings. Allow \'Camera\' permissions for your browser and reload this application.",\n  "perm_sys_denied.screenshare.others.message": "Navigate to your system settings. Allow \'Screenshare\' permissions for your browser and reload this application.",\n  "perm_could_not_start": "Could not capture device.",\n  "perm_could_not_start.audio": "Unable to start your Microphone",\n  "perm_could_not_start.video": "Unable to start your Camera",\n  "perm_could_not_start.screenshare": "Unable to start your Screenshare",\n  "perm_could_not_start.audio.message": "Looks like the system could not capture your microphone. Please restart your device or upgrade your browser to fix this.",\n  "perm_could_not_start.video.message": "Looks like the system could not capture your camera. Please restart your device or upgrade your browser to fix this.",\n  "perm_could_not_start.screenshare.message": "Looks like the system could not capture your screenshare. Please restart your device or upgrade your browser to fix this.",\n  "full_screen": "Full Screen",\n  "full_screen.exit": "Exit Full Screen",\n  "waitlist.header_title": "Waiting",\n  "waitlist.body_text": "You are in the waiting room, the host will let you in soon.",\n  "waitlist.deny_request": "Deny request",\n  "waitlist.accept_request": "Accept request",\n  "waitlist.accept_all": "Accept all",\n  "stage_request.header_title": "Join Stage Requests",\n  "stage_request.deny_request": "Deny request",\n  "stage_request.accept_request": "Accept request",\n  "stage_request.accept_all": "Accept all",\n  "stage_request.deny_all": "Deny all",\n  "stage_request.approval_pending": "Pending",\n  "stage_request.denied": "Denied",\n  "stage_request.request": "Join stage",\n  "stage_request.requested": "Requested",\n  "stage_request.cancel_request": "Cancel request",\n  "stage_request.leave_stage": "Leave stage",\n  "stage_request.request_tip": "Request to join the discussion",\n  "stage_request.leave_tip": "Leave the stage",\n  "stage_request.pending_tip": "Request pending",\n  "stage_request.denied_tip": "Rejected request",\n  "stage.empty_host": "The stage is empty",\n  "stage.empty_host_summary": "You are off stage. You can manage stage request from the participants tab.",\n  "stage.empty_viewer": "There is no one on stage",\n  "stage.remove_from_stage": "Remove from stage",\n  "stage.invited_notification": "has been invited to join stage.",\n  "stage.add_to_stage": "Invite to stage",\n  "stage.join_title": "Join Stage",\n  "stage.join_summary": "You are about to join the stage, your video & audio as shown above will be visible to all participants.",\n  "stage.join_cancel": "Cancel",\n  "stage.join_confirm": "Join",\n  "setup_screen.join_in_as": "Join in as",\n  "setup_screen.joining_as": "Joining as",\n  "setup_screen.your_name": "Your name",\n  "stage.reconnecting": "Reconnecting...",\n  "recording.label": "REC",\n  "recording.indicator": "This meeting is being recorded.",\n  "recording.started": "This meeting is being recorded.",\n  "recording.stopped": "Recording for this meeting has been stopped.",\n  "recording.paused": "Recording for this meeting has been paused.",\n  "recording.error.start": "Error while starting recording.",\n  "recording.error.stop": "Error while stopping recording",\n  "recording.error.resume": "Error while resuming recording",\n  "recording.start": "Start Recording",\n  "recording.stop": "Stop Recording",\n  "recording.resume": "Resume Recording",\n  "recording.starting": "Starting",\n  "recording.stopping": "Stopping",\n  "recording.loading": "Loading",\n  "recording.idle": "Record",\n  "audio_playback": "Play Audio",\n  "audio_playback.title": "Allow Audio Playback",\n  "audio_playback.description": "In order to play audio properly on your device, click the button below.",\n  "breakout_rooms": "Breakout Rooms",\n  "breakout_rooms.room_config_header": "Create Breakout",\n  "breakout_rooms.join_breakout_header": "Join Breakout",\n  "breakout_rooms.empty": "Nobody here yet.",\n  "breakout_rooms.delete": "Delete Room",\n  "breakout_rooms.switch": "Switch",\n  "breakout_rooms.main_room": "Main Room",\n  "breakout_rooms.shuffle_participants": "Shuffle Participants",\n  "breakout_rooms.deselect": "Deselect",\n  "breakout_rooms.selected": "selected",\n  "breakout_rooms.num_of_rooms": "No. of Rooms",\n  "breakout_rooms.approx": "Approx.",\n  "breakout_rooms.participants_per_room": "participants/room",\n  "breakout_rooms.division_text": "when equally divided.",\n  "breakout_rooms.start_breakout": "Start Breakout",\n  "breakout_rooms.close_breakout": "Close Breakout",\n  "breakout_rooms.update_breakout": "Update Breakout",\n  "breakout_rooms.discard_changes": "Discard Changes",\n  "breakout_rooms.room": "Room",\n  "breakout_rooms.rooms": "Rooms",\n  "breakout_rooms.room_name": "Room Name",\n  "breakout_rooms.edit_room_name": "Edit Room Name",\n  "breakout_rooms.save_room_name": "Save Room Name",\n  "breakout_rooms.add_room": "Add",\n  "breakout_rooms.add_room_brief": "Add Room",\n  "breakout_rooms.select_all": "Select all",\n  "breakout_rooms.unassign_all": "Unassign all",\n  "breakout_rooms.assign": "Assign",\n  "breakout_rooms.assign_participants": "Assign Participants",\n  "breakout_rooms.none_assigned": "No participants assigned yet",\n  "breakout_rooms.drag_drop_participants": "Drag and drop participants",\n  "breakout_rooms.click_drop_participants": "Click here to assign",\n  "breakout_rooms.status.assign_multiple": "Assign multiple participants at once by clicking and selecting them",\n  "breakout_rooms.status.select_room": "Select a room to assign",\n  "breakout_rooms.ephemeral_status.participants_assigned": "Participants assigned",\n  "breakout_rooms.ephemeral_status.participants_assigned_randomly": "Participants assigned randomly",\n  "breakout_rooms.ephemeral_status.changes_discarded": "Changes discarded",\n  "breakout_rooms.confirm_modal.start_breakout.header": "Start breakout rooms?",\n  "breakout_rooms.confirm_modal.start_breakout.content": "Once started, all participants will be moved to their assigned rooms.",\n  "breakout_rooms.confirm_modal.start_breakout.cancelText": "No, go back",\n  "breakout_rooms.confirm_modal.start_breakout.ctaText": "Yes, start",\n  "breakout_rooms.confirm_modal.close_breakout.header": "Close breakout rooms?",\n  "breakout_rooms.confirm_modal.close_breakout.content": "All breakout rooms will be closed & participants will be moved back to the main room.",\n  "breakout_rooms.confirm_modal.close_breakout.ctaText": "Yes, close breakout",\n  "breakout_rooms.move_reason.started_msg": "Starting breakout rooms...",\n  "breakout_rooms.move_reason.started_desc": "You are being moved to your assigned room",\n  "breakout_rooms.move_reason.closed_msg": "Closing Breakout rooms...",\n  "breakout_rooms.move_reason.closed_desc": "You are being moved back to the main room",\n  "breakout_rooms.move_reason.switch_room": "Joining Breakout Room...",\n  "breakout_rooms.move_reason.switch_main_room": "Joining Main Room...",\n  "breakout_rooms.all_assigned": "All participants have been assigned",\n  "breakout_rooms.empty_main_room": "No more participants in the main room.",\n  "breakout_rooms.leave_confirmation": "Are you sure you want to leave the call? You are in a breakout room, you can join the main room too.",\n  "breakout_rooms.leave_confirmation.main_room_btn": "Go back to main room",\n  "ai": "AI",\n  "ai.meeting_ai": "MeetingAI",\n  "ai.home": "Home",\n  "ai.transcriptions": "Transcriptions",\n  "ai.personal": "Personal",\n  "ai.caption_view": "Caption View",\n  "ai.chat.tooltip": "This conversation will just be visible to you and not to others in the call.",\n  "ai.chat.summerise": "Hey AI, summarise this call",\n  "ai.chat.agenda": "Hey AI, what is today\'s agenda?",\n  "search": "Search",\n  "search.could_not_find": "Couldn\'t find a participant with the specified name or ID.",\n  "search.empty": "It looks like nobody is here.",\n  "end": "End Meeting",\n  "end.all": "End meeting for all",\n  "ended": "The meeting ended.",\n  "ended.rejected": "Your request to join the meeting was denied.",\n  "ended.left": "You left the meeting.",\n  "ended.kicked": "You were removed from the meeting.",\n  "ended.disconnected": "The call ended because the connection was lost.",\n  "ended.network": "Please check your internet connection and try again.",\n  "network": "Network",\n  "network.reconnecting": "Connection lost. Trying to reconnect...",\n  "network.delay": "Taking too long to reconnect...",\n  "network.delay_extended": "Taking too long to reconnect. Please check your network connection.",\n  "network.restored": "Connection restored",\n  "network.lost": "Connection lost",\n  "network.lost_extended": "Connection lost. Please check your network connection.",\n  "network.disconnected": "Could not reconnect. Please leave the meeting and try refreshing the window.",\n  "network.leaving": "Automatically leaving the meeting in 10 seconds.",\n  "livestream": "Livestream",\n  "livestream.indicator": "This meeting is being livestreamed.",\n  "livestream.skip": "Skip to Live",\n  "livestream.idle": "Waiting to go live.",\n  "livestream.starting": "Livestream is starting...",\n  "livestream.stopping": "Livestream is stopping...",\n  "livestream.error.not_supported": "Player not supported.",\n  "livestream.error.not_found": "Playback URL not found.",\n  "livestream.error.unknown": "An unknown error occured.",\n  "livestream.error.sync": "Could not sync livestream please try again later.",\n  "livestream.error.start": "Error while starting livestream.",\n  "livestream.error.stop": "Error while stopping livestream.",\n  "livestream.go_live": "Go Live",\n  "livestream.end_live": "End Live",\n  "livestream.error": "Error",\n  "cta.help": "Need help on how to do this?",\n  "cta.continue": "Continue as it is",\n  "cta.reload": "Reload",\n  "cta.confirmation": "Are you sure?",\n  "remote_access.empty": "There are no remote requests, yet.",\n  "remote_access.requests": "The following people have requested remote control to your screen share.",\n  "remote_access.allow": "Please select whom you want to give access to.",\n  "remote_access.grant": "Grant acess",\n  "remote_access.indicator": "Any plugin or screenshare you switch to will sync the change across the meeting",\n  "chat": "Chat",\n  "chat.new": "New",\n  "chat.new_channel": "Create new channel",\n  "chat.channel_name": "Enter channel name",\n  "chat.member_name": "Enter member name",\n  "chat.add_members": "Add members",\n  "chat.delete_msg": "Delete",\n  "chat.edit_msg": "Edit",\n  "chat.send_msg": "Send message",\n  "chat.send_attachment": "Drop files/images to send",\n  "chat.send_img": "Send an image",\n  "chat.send_file": "Send a file",\n  "chat.send_emoji": "Send an emoji",\n  "chat.update_msg": "Update message",\n  "chat.channel_members": "Channel Members",\n  "chat.img.loading": "Loading image",\n  "chat.error.img_not_found": "Image not found",\n  "chat.error.empty_results": "Couldn\'t find a member with the specified name.",\n  "chat.img.shared_by": "Shared by",\n  "chat.reply": "Reply",\n  "chat.message_placeholder": "Message..",\n  "chat.click_to_send": "Click to send as message",\n  "chat.search_msgs": "Search messages",\n  "chat.search_conversations": "Search conversations",\n  "chat.start_conversation": "Start a conversation..",\n  "chat.empty_search": "No messages found",\n  "chat.empty_channel": "Send a message to get started",\n  "chat.cancel_upload": "Cancel upload",\n  "chat.view_chats": "View chats",\n  "chat.everyone": "everyone",\n  "chat.pinned_msgs": "Pinned messages",\n  "chat.toggle_pinned_msgs": "Toggle pinned messages",\n  "date.today": "Today",\n  "date.yesteday": "Yesterday",\n  "date.sunday": "Sunday",\n  "date.monday": "Monday",\n  "date.tuesday": "Tuesday",\n  "date.wednesday": "Wednesday",\n  "date.thursday": "Thursday",\n  "date.friday": "Friday",\n  "date.saturday": "Saturday",\n  "list.empty": "No items found",\n  "grid.listening": "Listening",\n  "transcript.off": "Turn off Transcripts",\n  "transcript.on": "Turn on Transcripts",\n  "settings.notification_sound": "Notification sound",\n  "settings.microphone_input": "Microphone (input)",\n  "settings.speaker_output": "Speaker (output)",\n  "settings.mirror_video": "Mirror my Video",\n  "settings.camera_off": "Camera is off",\n  "dialog.close": "Close dialog",\n  "notifications.joined": "just joined",\n  "notifications.left": "left",\n  "notifications.requesting_to_join_meeting": "is requesting to join the meeting",\n  "notifications.requested_to_join_stage": "has requested to join stage",\n  "notifications.joined_stage": "has joined stage",\n  "notifications.request_to_join_accepted": "Request to join accepted",\n  "notifications.request_to_join_rejected": "Request to join rejected",\n  "notifications.accept": "Accept",\n  "notifications.new_poll_created_by": "New poll created by",\n  "notifications.connected_to": "Connected to",\n  "notifications.plugin_switched_to": "Plugin switched to",\n  "notifications.remote_control_requested": "has requested for remote control",\n  "notifications.remote_control_request_sent": "Sent remote control request to",\n  "notifications.remote_control_request_accepted": "has granted remote control",\n  "notifications.remote_control_granted": "Granted remote control to",\n  "notifications.remote_control_terminated": "Existing remote control has been terminated"\n}\n'})})]})}function s(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},15947:(e,n,t)=>{t.d(n,{A:()=>s});var o=t(96540),r=t(18215);const a={tabItem:"tabItem_Ymn6"};function s({children:e,hidden:n,className:t}){return o.createElement("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,t),hidden:n},e)}},74235:(e,n,t)=>{t.d(n,{A:()=>P});var o=t(96540),r=t(18215),a=t(52204),s=t(56347),i=t(13321),c=t(57641),l=t(73094),d=t(14278);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function p(e){var n,t;return null!==(t=null===(n=o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function g(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=null!=n?n:function(e){return p(e).map((({props:{value:e,label:n,attributes:t,default:o}})=>({value:e,label:n,attributes:t,default:o})))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h({value:e,tabValues:n}){return n.some((n=>n.value===e))}function _({queryString:e=!1,groupId:n}){const t=(0,s.W6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),a=(0,c.aZ)(r),i=(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace(m(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){u(e,n,t[n])}))}return e}({},t.location),{search:n.toString()}))}),[r,t]);return[a,i]}function y(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=g(e),[s,c]=(0,o.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var t;const o=null!==(t=n.find((e=>e.default)))&&void 0!==t?t:n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:a}))),[l,u]=_({queryString:t,groupId:r}),[m,p]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,d.Dv)(n);return[t,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:r}),y=(()=>{const e=null!=l?l:m;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{y&&c(y)}),[y]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),p(e)}),[u,p,a]),tabValues:a}}var b=t(12075);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){v(e,n,t[n])}))}return e}function k(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function j({className:e,block:n,selectedValue:t,selectValue:s,tabValues:i}){const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),d=e=>{const n=e.currentTarget,o=c.indexOf(n),r=i[o].value;r!==t&&(l(n),s(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=c.indexOf(e.currentTarget)+1;var t;n=null!==(t=c[o])&&void 0!==t?t:c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;var o;n=null!==(o=c[t])&&void 0!==o?o:c[c.length-1];break}}null==n||n.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},e)},i.map((({value:e,label:n,attributes:a})=>o.createElement("li",k(w({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>c.push(e),onKeyDown:u,onClick:d},a),{className:(0,r.A)("tabs__item",f.tabItem,null==a?void 0:a.className,{"tabs__item--active":t===e})}),null!=n?n:e))))}function S({lazy:e,children:n,selectedValue:t}){const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===t));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function x(e){const n=y(e);return o.createElement("div",{className:(0,r.A)("tabs-container",f.tabList)},o.createElement(j,w({},e,n)),o.createElement(S,w({},e,n)))}function P(e){const n=(0,b.A)();return o.createElement(x,w({key:String(n)},e),p(e.children))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var o=t(96540);const r={},a=o.createContext(r);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);