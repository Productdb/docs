"use strict";(self.webpackChunkproductdb_docs=self.webpackChunkproductdb_docs||[]).push([[80087],{14694:(e,t,r)=>{r.d(t,{T:()=>s});var a=r(72944),o=r(8327);const n=e=>e.map((e=>{switch(e.type){case"a":if("string"==typeof e.content)return t=e.content,(0,a.h)("a",{class:"link",href:t,target:"_blank",rel:"noopener noreferrer"},t);case"b":return(e=>"string"==typeof e?(0,a.h)("b",null,e):(0,a.h)("b",null,n(e)))(e.content);case"i":return(e=>"string"==typeof e?(0,a.h)("i",null,e):(0,a.h)("i",null,n(e)))(e.content);case"s":return(e=>"string"==typeof e?(0,a.h)("s",null,e):(0,a.h)("b",null,n(e)))(e.content);case"q":return(0,a.h)("span",{class:"block-quote"});default:return(e=>"string"==typeof e?e:(0,a.h)("p",null,n(e)))(e.content)}var t})),s=({message:e})=>{const t=e.slice(0,o.M),r=(0,o.e)(t,!0),s=(0,o.s)(t);return(0,a.h)("p",null,0!==r.length&&(0,a.h)("blockquote",null,r.split("\n").map((e=>{const t=(0,o.p)(e);return(0,a.h)("p",null,n(t))}))),s.split("\n").map((e=>{const t=(0,o.p)(e);return(0,a.h)("p",null,n(t))})))}},8327:(e,t,r)=>{r.d(t,{M:()=>w,T:()=>i,d:()=>o,e:()=>v,f:()=>d,g:()=>n,h:()=>s,i:()=>c,j:()=>a,k:()=>y,p:()=>m,r:()=>l,s:()=>u});r(55055);const a=e=>{let t=null;try{const r=JSON.parse(e.message),{target:a,message:o}=r;t=void 0===a||void 0===o?e:Object.assign(Object.assign({},e),{targetUserIds:a,message:o})}catch(r){t=e}return t};function o(e,t){return e.localeCompare(t)}function n(e){return e.sort(((e,t)=>e.localeCompare(t))).join("_")}function s(e,t){if(null==e)return!0;for(const r of e)if("file"===r.kind){const e=r.getAsFile();r.type.startsWith("image/")?t("image",e):t("file",e)}}const i="dm__";function c(e){return e.isDirectMessage}function d(e){return[...new Set(e)].sort(o).join("<>")}function l(e){return e.split("").reverse().join("")}const p=/^\*([^*\s]+)\*/,h=/^_([^_\s]+)_/,b=/^~([^~\s]+)~/,g=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.,~#?&//=]*)/,y=/<blockquote>[.\s\S]*<\/blockquote>\n\n/m;function v(e,t=!1){if(!y.test(e))return"";let r=0,a=13;return t&&(r=12,a=0),e.substring(e.indexOf("<blockquote>")+r,e.indexOf("</blockquote>")+a)}function u(e){return e.replace(y,"")}const w=2e3,x=["<a>","<b>","<i>","<q>","<s>"];function m(e){e=(e=e.split(" ").map((e=>{if(g.test(e)){const t=g.exec(e);e=e.replace(t[0],`<a>${t[0]}</a>`)}else{if(p.test(e)){const t=p.exec(e);e=e.replace(t[0],`<b>${t[1]}</b>`)}if(h.test(e)){const t=h.exec(e);e=e.replace(t[0],`<i>${t[1]}</i>`)}if(b.test(e)){const t=b.exec(e);e=e.replace(t[0],`<s>${t[1]}</s>`)}}return e})).join(" ")).split(" ").map(((e,t)=>">"!==e||0!==t&&">"!==e[t-1]?e:"<q></q>")).join(" ");const[t]=f(e);return t}function f(e,t=""){const r=[];if(0===e.length)return[r,0];let a=0;for(;a<e.length;){if(t.length&&t===e.substring(a,a+t.length))return[r,a+t.length];if(x.includes(e.substring(a,a+3))){const[t,o]=f(e.substring(a+3),`</${e[a+1]}>`);r.push({type:e[a+1],content:1===t.length&&"plain_text"===t[0].type?t[0].content:t}),a+=o+3}else{let t=r[r.length-1];t&&"plain_text"===t.type||(r.push({type:"plain_text",content:""}),t=r[r.length-1]),t.content+=e[a],a++}}return[r,a]}},80087:(e,t,r)=>{r.r(t),r.d(t,{dyte_channel_selector_ui:()=>i});var a=r(72944),o=(r(26468),r(60064),r(94370),r(17073)),n=r(74157),s=(r(55055),r(14694));r(70694),r(64383),r(8327);const i=class{constructor(e){(0,a.r)(this,e),this.channelChanged=(0,a.c)(this,"channelChanged",7),this.handleResize=e=>{this.isHidden=!e.matches},this.channelSelected=e=>{this.channelChanged.emit(e),this.onRevealClicked()},this.onSearchInput=e=>{this.searchQuery=e.target.value},this.onRevealClicked=()=>{this.matchMedia.matches||(this.isHidden=!this.isHidden)},this.renderChannelDisplayPic=e=>{const t=e.displayPictureUrl&&0!==e.displayPictureUrl.length;return e.isDirectMessage||t?(0,a.h)("div",{class:"channel-display"},(0,a.h)("dyte-avatar",{participant:{name:e.displayName,picture:e.displayPictureUrl}})):(0,a.h)("div",{class:"channel-display"},(0,a.h)("dyte-icon",{icon:this.iconPack.people,slot:"start"}))},this.renderRecentMessage=e=>{if(!e.latestMessage)return(0,a.h)("p",{class:"latest-msg new"},this.t("chat.start_conversation"));let t=e.isDirectMessage?"":`${e.latestMessage.displayName}: `;if("text"===e.latestMessage.type)return(0,a.h)("p",{class:"latest-msg"},t,(0,a.h)(s.T,{message:e.latestMessage.message}));let r="";return"image"===e.latestMessage.type?r=this.t("image"):"file"===e.latestMessage.type&&(r=this.t("file")),(0,a.h)("p",{class:"latest-msg"},`${t}${r}`)},this.channels=void 0,this.selectedChannelId=void 0,this.iconPack=o.d,this.t=(0,n.u)(),this.showRecentMessage=!1,this.isHidden=!1,this.searchQuery=""}connectedCallback(){this.matchMedia=window.matchMedia("(orientation: landscape) and (min-width: 400px)"),this.matchMedia.addEventListener("change",this.handleResize),this.isHidden=!this.matchMedia.matches}disconnectedCallback(){this.matchMedia.removeEventListener("change",this.handleResize)}componentDidRender(){this.$el.style.transform=this.isHidden?"translateX(-380px)":"translateX(0)"}getTimeLabel(e){const t=e.time,r=new Date,a=new Date(r);a.setDate(r.getDate()-1);const o=new Date(r);if(o.setDate(r.getDate()-r.getDay()-1),t.toDateString()===r.toDateString())return t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});if(t.toDateString()===a.toDateString())return this.t("date.yesteday");if(t>o){const e=["date.sunday","date.monday","date.tuesday","date.wednesday","date.thursday","date.friday","date.saturday"];return this.t(e[t.getDay()])}return Intl.DateTimeFormat([],{day:"2-digit",month:"2-digit",year:"2-digit"}).format(t)}render(){return(0,a.h)(a.H,null,(0,a.h)("div",{class:"container",ref:e=>this.$el=e},this.isHidden&&(0,a.h)("dyte-button",{iconPack:this.iconPack,t:this.t,kind:"icon",variant:"ghost",size:"md",onClick:this.onRevealClicked,class:"sidebar-btn"},(0,a.h)("dyte-icon",{icon:this.isHidden?this.iconPack.chevron_left:this.iconPack.dismiss,iconPack:this.iconPack,t:this.t})),(0,a.h)("slot",{name:"header"}),(0,a.h)("div",{class:"search-wrapper"},(0,a.h)("div",{class:"search"},(0,a.h)("input",{type:"search",autocomplete:"off",placeholder:this.t("chat.search_conversations"),onInput:this.onSearchInput}),(0,a.h)("dyte-icon",{icon:this.iconPack.search,iconPack:this.iconPack,t:this.t,class:"search-icon"}))),(0,a.h)("div",{class:"channel-container scrollbar",role:"list"},this.channels.filter((e=>""===this.searchQuery||e.displayName.includes(this.searchQuery))).map((e=>(0,a.h)("div",{class:{channel:!0,selected:e.id===this.selectedChannelId,highlight:!!e.unreadCount},role:"listitem",onClick:()=>{this.channelSelected(e.id)}},this.renderChannelDisplayPic(e),(0,a.h)("div",{class:"channel-card","is-direct-message":e.isDirectMessage},(0,a.h)("div",{class:"recent-message-row"},(0,a.h)("span",{class:"channel-name"},e.displayName),e.latestMessage&&(0,a.h)("span",{class:"latest-msg-time"},this.getTimeLabel(e.latestMessage))),(0,a.h)("div",{class:"recent-message-row"},this.renderRecentMessage(e),e.unreadCount>0&&e.id!==this.selectedChannelId?(0,a.h)("span",{class:"new-msgs-count"},e.unreadCount<99?e.unreadCount:"99+"):null))))))),!this.isHidden&&(0,a.h)("div",{class:"overlay-container"},(0,a.h)("dyte-button",{iconPack:this.iconPack,t:this.t,kind:"icon",variant:"ghost",size:"md",onClick:this.onRevealClicked,class:"sidebar-btn"},(0,a.h)("dyte-icon",{icon:this.isHidden?this.iconPack.chevron_left:this.iconPack.dismiss,iconPack:this.iconPack,t:this.t}))))}};i.style=".scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{display:flex}.container{display:flex;height:100%;width:var(--dyte-space-96, 384px);flex-direction:column;position:absolute;--tw-translate-x:calc(var(--dyte-space-96, 384px) * -1);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));border-top-width:var(--dyte-border-width-none, 0);border-bottom-width:var(--dyte-border-width-none, 0);border-right-width:var(--dyte-border-width-sm, 1px);border-left-width:var(--dyte-border-width-none, 0);border-style:solid;--tw-border-opacity:1;border-right-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-border-opacity));transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}@keyframes fade{0%{opacity:0}100%{opacity:1}}.overlay-container{width:100vw;--tw-translate-x:var(--dyte-space-96, 384px);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;animation:fade 0.8s}.overlay-container .sidebar-btn{position:static;padding:var(--dyte-space-4, 16px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.sidebar-btn{position:absolute;right:calc(var(--dyte-space-9, 36px) * -1);top:var(--dyte-space-4, 16px);height:var(--dyte-space-8, 32px);width:var(--dyte-space-7, 28px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));border-radius:var(--dyte-border-radius-sm, 4px)}@media (orientation: landscape) and (min-width: 400px){.container{position:static;--tw-translate-x:var(--dyte-space-0, 0px);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.sidebar-btn,.overlay-container{display:none}}.search-wrapper{display:flex;align-items:center;gap:var(--dyte-space-2, 8px);padding:var(--dyte-space-2, 8px);border-left-width:var(--dyte-border-width-none, 0);border-right-width:var(--dyte-border-width-none, 0);border-bottom-width:var(--dyte-border-width-sm, 1px);border-top-width:var(--dyte-border-width-none, 0);border-style:solid;--tw-border-opacity:1;border-bottom-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-border-opacity))}.search{position:sticky;box-sizing:border-box;display:flex;align-items:center;border-radius:var(--dyte-border-radius-sm, 4px);margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-0, 0px);height:var(--dyte-space-8, 32px);width:100%}.search .search-icon{height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);padding:var(--dyte-space-2, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52));border-top-right-radius:var(--dyte-border-radius-sm, 4px);border-bottom-right-radius:var(--dyte-border-radius-sm, 4px)}.search input{box-sizing:border-box;width:100%;padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px);padding-left:var(--dyte-space-2, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));border-width:var(--dyte-border-width-none, 0);border-style:none;outline:2px solid transparent;outline-offset:2px;font-size:14px;line-height:1.25rem}.search input::-moz-placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.search input::placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.search input{border-top-left-radius:var(--dyte-border-radius-sm, 4px);border-bottom-left-radius:var(--dyte-border-radius-sm, 4px)}.channel-container{box-sizing:border-box;display:flex;flex-direction:column;padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px);overflow-y:scroll}.channel-container .channel{display:flex;align-items:center;justify-content:space-between;gap:var(--dyte-space-2, 8px);padding:var(--dyte-space-0, 0px);border-left-width:var(--dyte-border-width-none, 0);border-right-width:var(--dyte-border-width-none, 0);border-bottom-width:var(--dyte-border-width-sm, 1px);border-top-width:var(--dyte-border-width-none, 0);border-style:solid;--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-border-opacity))}.channel-container .channel:hover{cursor:pointer;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-on-brand-900, var(--dyte-colors-text-900, 255 255 255 / 0.88)))}.channel-container .channel:hover .latest-msg-time,.channel-container .channel:hover .latest-msg,.channel-container .channel:hover .latest-msg.new{color:rgb(var(--dyte-colors-text-on-brand-700, var(--dyte-colors-text-700, 255 255 255 / 0.64)))}.channel-container .channel-display{display:flex;gap:var(--dyte-space-2, 8px);align-self:center;padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-0, 0px)}.channel-container .channel-display dyte-avatar{height:var(--dyte-space-9, 36px);width:var(--dyte-space-9, 36px);flex-shrink:0;font-size:12px}.channel-container .channel-display dyte-icon{height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);flex-shrink:0;padding:var(--dyte-space-2, 8px);border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)))}.channel-container .channel-card{width:100%;padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);padding-left:var(--dyte-space-1, 4px)}.channel-container .channel-card .channel-name{max-width:var(--dyte-space-60, 240px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:14px;font-weight:500}.channel-container .channel-card .latest-msg{margin:var(--dyte-space-0, 0px);max-width:var(--dyte-space-56, 224px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:14px}.channel-container .channel-card .latest-msg.new{font-weight:200;font-style:italic;color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.channel-container .channel-card .latest-msg-time{font-size:12px;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}.channel-container .channel-meta{width:var(--dyte-space-12, 48px);display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between;gap:var(--dyte-space-1\\.5, 6px);font-size:12px;font-weight:600}.channel-container .new-msgs-count{height:var(--dyte-space-4, 16px);min-width:var(--dyte-space-4, 16px);padding-top:1px;padding-bottom:1px;padding-left:2px;padding-right:2px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)));border-radius:var(--dyte-border-radius-sm, 4px);text-align:center;font-size:12px}.channel-container .selected{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-on-brand-900, var(--dyte-colors-text-900, 255 255 255 / 0.88)))}.channel-container .selected .latest-msg-time,.channel-container .selected .latest-msg,.channel-container .selected .latest-msg.new{color:rgb(var(--dyte-colors-text-on-brand-700, var(--dyte-colors-text-700, 255 255 255 / 0.64)))}.channel-container .highlight .channel-title span{font-weight:700}.latest-msg p{margin:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-1, 4px);display:inline-block}.latest-msg blockquote{display:none}.recent-message-row{margin-bottom:var(--dyte-space-2, 8px);display:flex;width:100%;flex-direction:row;justify-content:space-between}"}}]);