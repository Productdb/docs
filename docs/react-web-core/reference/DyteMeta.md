---
sidebar_position: 7
web_core_version: 1.32.1
---

<!-- Auto Generated Below -->

<a name="module_ProductDBMeta"></a>

This consists of the metadata of the meeting, such as the room name and the title.


* [ProductDBMeta](#module_ProductDBMeta)
    * [.selfActiveTab](#module_ProductDBMeta+selfActiveTab)
    * [.broadcastTabChanges](#module_ProductDBMeta+broadcastTabChanges)
    * [.viewType](#module_ProductDBMeta+viewType)
    * [.meetingStartedTimestamp](#module_ProductDBMeta+meetingStartedTimestamp)
    * [.meetingTitle](#module_ProductDBMeta+meetingTitle)
    * [.sessionId](#module_ProductDBMeta+sessionId)
    * [.meetingId](#module_ProductDBMeta+meetingId)
    * [.mediaConnected](#module_ProductDBMeta+mediaConnected)
    * [.socketConnected](#module_ProductDBMeta+socketConnected)
    * [.setBroadcastTabChanges(broadcastTabChanges)](#module_ProductDBMeta+setBroadcastTabChanges)
    * [.setSelfActiveTab(spotlightTab)](#module_ProductDBMeta+setSelfActiveTab)

<a name="module_ProductDBMeta+selfActiveTab"></a>

### meta.selfActiveTab
Represents the current active tab

<a name="module_ProductDBMeta+broadcastTabChanges"></a>

### meta.broadcastTabChanges
Represents whether current user is spotlighted

<a name="module_ProductDBMeta+viewType"></a>

### meta.viewType
The `viewType` tells the type of the meeting
possible values are: GROUP_CALL| LIVESTREAM | CHAT | AUDIO_ROOM

<a name="module_ProductDBMeta+meetingStartedTimestamp"></a>

### meta.meetingStartedTimestamp
The timestamp of the time when the meeting started.

<a name="module_ProductDBMeta+meetingTitle"></a>

### meta.meetingTitle
The title of the meeting.

<a name="module_ProductDBMeta+sessionId"></a>

### meta.sessionId
(Experimental) The sessionId this meeting object is part of.

<a name="module_ProductDBMeta+meetingId"></a>

### meta.meetingId
The room name of the meeting.

<a name="module_ProductDBMeta+mediaConnected"></a>

### meta.mediaConnected
Has room-node connection been made.

<a name="module_ProductDBMeta+socketConnected"></a>

### meta.socketConnected
This is set to true if user has succesfully connected to the socket.

<a name="module_ProductDBMeta+setBroadcastTabChanges"></a>

### meta.setBroadcastTabChanges(broadcastTabChanges)
Sets current user as broadcasting tab changes


| Param |
| --- |
| broadcastTabChanges | 

<a name="module_ProductDBMeta+setSelfActiveTab"></a>

### meta.setSelfActiveTab(spotlightTab)
Sets current active tab for user


| Param |
| --- |
| spotlightTab | 

<a name="module_ProductDBMeta+joined"></a>

### ~~meta.joined~~
***Deprecated***

<a name="module_ProductDBMeta+roomName"></a>

### ~~meta.roomName~~
***Deprecated***