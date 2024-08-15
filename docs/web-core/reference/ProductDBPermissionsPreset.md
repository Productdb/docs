---
sidebar_position: 6
web_core_version: 1.32.1
---

<!-- Auto Generated Below -->

<a name="module_ProductDBPermissionsPreset"></a>

The ProductDBPermissionsPreset class represents the meeting permissions for the current participant


* [ProductDBPermissionsPreset](#module_ProductDBPermissionsPreset)
    * [.stageEnabled](#module_ProductDBPermissionsPreset+stageEnabled)
    * [.stageAccess](#module_ProductDBPermissionsPreset+stageAccess)
    * [.acceptWaitingRequests](#module_ProductDBPermissionsPreset+acceptWaitingRequests)
    * [.requestProduceVideo](#module_ProductDBPermissionsPreset+requestProduceVideo)
    * [.requestProduceAudio](#module_ProductDBPermissionsPreset+requestProduceAudio)
    * [.requestProduceScreenshare](#module_ProductDBPermissionsPreset+requestProduceScreenshare)
    * [.canAllowParticipantAudio](#module_ProductDBPermissionsPreset+canAllowParticipantAudio)
    * [.canAllowParticipantScreensharing](#module_ProductDBPermissionsPreset+canAllowParticipantScreensharing)
    * [.canAllowParticipantVideo](#module_ProductDBPermissionsPreset+canAllowParticipantVideo)
    * [.canDisableParticipantAudio](#module_ProductDBPermissionsPreset+canDisableParticipantAudio)
    * [.canDisableParticipantVideo](#module_ProductDBPermissionsPreset+canDisableParticipantVideo)
    * [.kickParticipant](#module_ProductDBPermissionsPreset+kickParticipant)
    * [.pinParticipant](#module_ProductDBPermissionsPreset+pinParticipant)
    * [.canRecord](#module_ProductDBPermissionsPreset+canRecord)
    * [.waitingRoomBehaviour](#module_ProductDBPermissionsPreset+waitingRoomBehaviour)
    * [.plugins](#module_ProductDBPermissionsPreset+plugins)
    * [.polls](#module_ProductDBPermissionsPreset+polls)
    * [.canProduceVideo](#module_ProductDBPermissionsPreset+canProduceVideo)
    * [.canProduceScreenshare](#module_ProductDBPermissionsPreset+canProduceScreenshare)
    * [.canProduceAudio](#module_ProductDBPermissionsPreset+canProduceAudio)
    * [.chatPublic](#module_ProductDBPermissionsPreset+chatPublic)
    * [.chatPrivate](#module_ProductDBPermissionsPreset+chatPrivate)
    * [.hiddenParticipant](#module_ProductDBPermissionsPreset+hiddenParticipant)
    * [.showParticipantList](#module_ProductDBPermissionsPreset+showParticipantList)
    * [.canChangeParticipantPermissions](#module_ProductDBPermissionsPreset+canChangeParticipantPermissions)
    * [.canLivestream](#module_ProductDBPermissionsPreset+canLivestream)

<a name="module_ProductDBPermissionsPreset+stageEnabled"></a>

### permissions.stageEnabled
The `stageEnabled` property returns a boolean value.
If `true`, stage management is available for the participant.

<a name="module_ProductDBPermissionsPreset+stageAccess"></a>

### permissions.stageAccess
The `stageAccess` property dictactes how a user interacts with the stage.
There possible values are `ALLOWED`, `NOT_ALLOWED`, `CAN_REQUEST`;

<a name="module_ProductDBPermissionsPreset+acceptWaitingRequests"></a>

### permissions.acceptWaitingRequests
The `acceptWaitingRequests` returns boolean value.
If `true`, participant can accept the request of waiting participant.

<a name="module_ProductDBPermissionsPreset+requestProduceVideo"></a>

### permissions.requestProduceVideo
The `requestProduceVideo` returns boolean value.
If `true`, participant can send request to participants
about producing video.

<a name="module_ProductDBPermissionsPreset+requestProduceAudio"></a>

### permissions.requestProduceAudio
The `requestProduceAudio` returns boolean value.
If `true`, participant can send request to participants
about producing audio.

<a name="module_ProductDBPermissionsPreset+requestProduceScreenshare"></a>

### permissions.requestProduceScreenshare
The `requestProduceScreenshare` returns boolean value.
If `true`, participant can send request to participants
about sharing screen.

<a name="module_ProductDBPermissionsPreset+canAllowParticipantAudio"></a>

### permissions.canAllowParticipantAudio
The `canAllowParticipantAudio` returns boolean value.
If `true`, participant can enable other participants` audio.

<a name="module_ProductDBPermissionsPreset+canAllowParticipantScreensharing"></a>

### permissions.canAllowParticipantScreensharing
The `canAllowParticipantScreensharing` returns boolean value.
If `true`, participant can enable other participants` screen share.

<a name="module_ProductDBPermissionsPreset+canAllowParticipantVideo"></a>

### permissions.canAllowParticipantVideo
The `canAllowParticipantVideo` returns boolean value.
If `true`, participant can enable other participants` video.

<a name="module_ProductDBPermissionsPreset+canDisableParticipantAudio"></a>

### permissions.canDisableParticipantAudio
If `true`, a participant can disable other participants` audio.

<a name="module_ProductDBPermissionsPreset+canDisableParticipantVideo"></a>

### permissions.canDisableParticipantVideo
If `true`, a participant can disable other participants` video.

<a name="module_ProductDBPermissionsPreset+kickParticipant"></a>

### permissions.kickParticipant
The `kickParticipant` returns boolean value.
If `true`, participant can remove other participants from the meeting.

<a name="module_ProductDBPermissionsPreset+pinParticipant"></a>

### permissions.pinParticipant
The `pinParticipant` returns boolean value.
If `true`, participant can pin a participant in the meeting.

<a name="module_ProductDBPermissionsPreset+canRecord"></a>

### permissions.canRecord
The `canRecord` returns boolean value.
If `true`, participant can record the meeting.

<a name="module_ProductDBPermissionsPreset+waitingRoomBehaviour"></a>

### permissions.waitingRoomBehaviour
The `waitingRoomType` returns string value.
type of waiting room behavior
possible values are `SKIP`, `ON_PRIVILEGED_USER_ENTRY`, `SKIP_ON_ACCEPT`

<a name="module_ProductDBPermissionsPreset+plugins"></a>

### permissions.plugins
The `plugins` tells if the participant can act on plugins
there are 2 permissions with boolean values, `canStart` and `canClose`.

<a name="module_ProductDBPermissionsPreset+polls"></a>

### permissions.polls
The `polls` tells if the participant can use polls.
There are 3 permissions with boolean values, `canCreate`, `canVote`, `canViewResults`


<a name="module_ProductDBPermissionsPreset+canProduceVideo"></a>

### permissions.canProduceVideo
The `canProduceVideo` shows permissions for enabling video.
There possible values are `ALLOWED`, `NOT_ALLOWED`, `CAN_REQUEST`

<a name="module_ProductDBPermissionsPreset+canProduceScreenshare"></a>

### permissions.canProduceScreenshare
The `canProduceScreenshare` shows permissions for sharing screen.
There possible values are `ALLOWED`, `NOT_ALLOWED`, `CAN_REQUEST`


<a name="module_ProductDBPermissionsPreset+canProduceAudio"></a>

### permissions.canProduceAudio
The `canProduceAudio` shows permissions for enabling audio.
There possible values are `ALLOWED`, `NOT_ALLOWED`, `CAN_REQUEST`

<a name="module_ProductDBPermissionsPreset+chatPublic"></a>

### permissions.chatPublic
The `chatPublic` shows permissions for public chat
there are 4 permissions
`canSend` - if true, the participant can send chat
`text` - if true, the participant can send text
`files` - if true, the participant can send files

<a name="module_ProductDBPermissionsPreset+chatPrivate"></a>

### permissions.chatPrivate
The `chatPrivate` shows permissions for public chat
there are 4 permissions
`canSend` - if true, the participant can send private chat
`text` - if true, the participant can send text as private chat
`files` - if true, the participant can send files as private chat
`canReceive` - (optional) if true, the participant can receive private chat

<a name="module_ProductDBPermissionsPreset+hiddenParticipant"></a>

### permissions.hiddenParticipant
The `hiddenParticipant` returns boolean value.
If `true`, participant is hidden.

<a name="module_ProductDBPermissionsPreset+showParticipantList"></a>

### permissions.showParticipantList
The `showParticipantList` returns boolean value.
If `true`, participant list can be shown to the participant.

<a name="module_ProductDBPermissionsPreset+canChangeParticipantPermissions"></a>

### permissions.canChangeParticipantPermissions
The `canChangeParticipantPermissions` returns boolean value.
If `true`, allow changing the participants' permissions.

<a name="module_ProductDBPermissionsPreset+canLivestream"></a>

### permissions.canLivestream
Livestream


<a name="module_ProductDBPermissionsPreset+canChangeTheme"></a>


### ~~permissions.canChangeTheme~~
***Deprecated***

<a name="module_ProductDBPermissionsPreset+canPresent"></a>

### ~~permissions.canPresent~~
***Deprecated***

<a name="module_ProductDBPermissionsPreset+acceptPresentRequests"></a>

### ~~permissions.acceptPresentRequests~~
***Deprecated***

<a name="module_ProductDBPermissionsPreset+maxScreenShareCount"></a>

### ~~permissions.maxScreenShareCount~~
***Deprecated***

<a name="module_ProductDBPermissionsPreset+produceAudio"></a>

### ~~permissions.produceAudio~~
***Deprecated***

<a name="module_ProductDBPermissionsPreset+produceScreenshare"></a>

### ~~permissions.produceScreenshare~~
***Deprecated***

<a name="module_ProductDBPermissionsPreset+waitingRoomType"></a>

### ~~permissions.waitingRoomType~~
***Deprecated***

<a name="module_ProductDBPermissionsPreset+produceVideo"></a>

### ~~permissions.produceVideo~~
***Deprecated***

<a name="module_ProductDBPermissionsPreset+requestProduce"></a>

### ~~permissions.requestProduce~~
***Deprecated***

<a name="module_ProductDBPermissionsPreset+canChangeParticipantRole"></a>

### ~~permissions.canChangeParticipantRole~~
***Deprecated***
