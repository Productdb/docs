---
sidebar_position: 5
web_core_version: 1.32.1
---

<!-- Auto Generated Below -->

<a name="module_ProductDBParticipant"></a>

This module represents a single participant in the meeting.
The participant object can be accessed from one of the participant lists
present in the `meeting.participants` object. For example,

```ts
const participant1 = meeting.participants.active.get(participantId);
const participant2 = meeting.participants.joined.get(participantId);
const participant3 = meeting.participants.active.toArray()[0];
const participant4 = meeting.participants.active.toArray().filter((p) => p.name === 'John');
```


* [ProductDBParticipant](#module_ProductDBParticipant)
    * [.id](#module_ProductDBParticipant--this.+id)
    * [.userId](#module_ProductDBParticipant--this.+userId)
    * [.name](#module_ProductDBParticipant--this.+name)
    * [.picture](#module_ProductDBParticipant--this.+picture)
    * [.customParticipantId](#module_ProductDBParticipant--this.+customParticipantId)
    * [.device](#module_ProductDBParticipant--this.+device)
    * [.videoTrack](#module_ProductDBParticipant--this.+videoTrack)
    * [.audioTrack](#module_ProductDBParticipant--this.+audioTrack)
    * [.screenShareTracks](#module_ProductDBParticipant--this.+screenShareTracks)
    * [.videoEnabled](#module_ProductDBParticipant--this.+videoEnabled)
    * [.audioEnabled](#module_ProductDBParticipant--this.+audioEnabled)
    * [.screenShareEnabled](#module_ProductDBParticipant--this.+screenShareEnabled)
    * [.producers](#module_ProductDBParticipant--this.+producers)
    * [.supportsRemoteControl](#module_ProductDBParticipant--this.+supportsRemoteControl)
    * [.presetName](#module_ProductDBParticipant--this.+presetName)
    * [.stageStatus](#module_ProductDBParticipant--this.+stageStatus)
    * [.roomJoined](#module_ProductDBParticipant--this.+roomJoined)
    * [.isPinned](#module_ProductDBParticipant--this.+isPinned)
    * [.pin()](#module_ProductDBParticipant--this.+pin)
    * [.unpin()](#module_ProductDBParticipant--this.+unpin)
    * [.setIsPinned()](#module_ProductDBParticipant--this.+setIsPinned)
    * [.disableAudio()](#module_ProductDBParticipant--this.+disableAudio)
    * [.kick()](#module_ProductDBParticipant--this.+kick)
    * [.disableVideo()](#module_ProductDBParticipant--this.+disableVideo)


<a name="module_ProductDBParticipant--this.+id"></a>

#### participant.id
The peer ID of the participant.
The participants are indexed by this ID in the participant map.

<a name="module_ProductDBParticipant--this.+userId"></a>

#### participant.userId
The user ID of the participant.

<a name="module_ProductDBParticipant--this.+name"></a>

#### participant.name
The name of the participant.

<a name="module_ProductDBParticipant--this.+picture"></a>

#### participant.picture
The picture of the participant.

<a name="module_ProductDBParticipant--this.+customParticipantId"></a>

#### participant.customParticipantId
The custom id of the participant set during Add Participant REST API

<a name="module_ProductDBParticipant--this.+device"></a>

#### participant.device
The device configuration of the participant.

<a name="module_ProductDBParticipant--this.+videoTrack"></a>

#### participant.videoTrack
The participant's video track.

<a name="module_ProductDBParticipant--this.+audioTrack"></a>

#### participant.audioTrack
The participant's audio track.

<a name="module_ProductDBParticipant--this.+screenShareTracks"></a>

#### participant.screenShareTracks
The participant's screenshare video and audio track.

<a name="module_ProductDBParticipant--this.+videoEnabled"></a>

#### participant.videoEnabled
This is true if the participant's video is enabled.

<a name="module_ProductDBParticipant--this.+audioEnabled"></a>

#### participant.audioEnabled
This is true if the participant's audio is enabled.

<a name="module_ProductDBParticipant--this.+screenShareEnabled"></a>

#### participant.screenShareEnabled
This is true if the participant is screensharing.

<a name="module_ProductDBParticipant--this.+producers"></a>

#### participant.producers
producers created by participant

<a name="module_ProductDBParticipant--this.+supportsRemoteControl"></a>

#### participant.supportsRemoteControl
This is true if the productdb participant supports remote control.

<a name="module_ProductDBParticipant--this.+presetName"></a>

#### participant.presetName
The preset of the participant.

<a name="module_ProductDBParticipant--this.+stageStatus"></a>

#### participant.stageStatus
Denotes the participants's current stage status.

<a name="module_ProductDBParticipant--this.+roomJoined"></a>

#### participant.roomJoined
Returns true if the local participant has joined the meeting.

<a name="module_ProductDBParticipant--this.+isPinned"></a>

#### participant.isPinned
Returns true if the participant is pinned.

<a name="module_ProductDBParticipant--this.+pin"></a>

#### participant.pin()
Returns `participant.id` if user has permission
to pin participants.

<a name="module_ProductDBParticipant--this.+unpin"></a>

#### participant.unpin()
Returns `participant.id` if user has permission
to unpin participants.

<a name="module_ProductDBParticipant--this.+setIsPinned"></a>

#### participant.setIsPinned()
<a name="module_ProductDBParticipant--this.+disableAudio"></a>

#### participant.disableAudio()
Disables audio for this participant.
Requires the permission to disable participant audio.

<a name="module_ProductDBParticipant--this.+kick"></a>

#### participant.kick()
Kicks this participant from the meeting.
Requires the permission to kick a participant.

<a name="module_ProductDBParticipant--this.+disableVideo"></a>

#### participant.disableVideo()
Disables video for this participant.
Requires the permission to disable video for a participant.

<a name="module_ProductDBParticipant--this.+acceptJoinStageRequest"></a>

#### ~~participant.acceptJoinStageRequest()~~
***Deprecated***

<a name="module_ProductDBParticipant--this.+rejectRequestToJoinStage"></a>

#### ~~participant.rejectRequestToJoinStage()~~
***Deprecated***

<a name="module_ProductDBParticipant--this.+removeFromStage"></a>

#### ~~participant.removeFromStage()~~
***Deprecated***

<a name="module_ProductDBParticipant--this.+setWebinarStageStatus"></a>

#### ~~participant.setWebinarStageStatus()~~
***Deprecated***


<a name="module_ProductDBParticipant--this.+clientSpecificId"></a>

#### ~~participant.clientSpecificId~~
***Deprecated***

<a name="module_ProductDBParticipant--this.+webinarStageStatus"></a>

#### ~~participant.webinarStageStatus~~
***Deprecated***
