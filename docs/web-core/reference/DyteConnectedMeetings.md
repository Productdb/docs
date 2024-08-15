---
sidebar_position: 17
web_core_version: 1.32.1
---

<!-- Auto Generated Below -->

<a name="module_ProductDBConnectedMeetings"></a>

This consists of the methods to faciliate connected meetings


* [ProductDBConnectedMeetings](#module_ProductDBConnectedMeetings)
    * [.getConnectedMeetings()](#module_ProductDBConnectedMeetings+getConnectedMeetings)
    * [.createMeetings()](#module_ProductDBConnectedMeetings+createMeetings)
    * [.updateMeetings()](#module_ProductDBConnectedMeetings+updateMeetings)
    * [.deleteMeetings()](#module_ProductDBConnectedMeetings+deleteMeetings)
    * [.moveParticipants(sourceMeetingId, destinationMeetingId, participantIds)](#module_ProductDBConnectedMeetings+moveParticipants)
    * [.moveParticipantsWithCustomPreset()](#module_ProductDBConnectedMeetings+moveParticipantsWithCustomPreset)

<a name="module_ProductDBConnectedMeetings+getConnectedMeetings"></a>

### connectedMeetings.getConnectedMeetings()
get connected meeting state

<a name="module_ProductDBConnectedMeetings+createMeetings"></a>

### connectedMeetings.createMeetings()
create connected meetings

<a name="module_ProductDBConnectedMeetings+updateMeetings"></a>

### connectedMeetings.updateMeetings()
update meeting title

<a name="module_ProductDBConnectedMeetings+deleteMeetings"></a>

### connectedMeetings.deleteMeetings()
delete connected meetings

<a name="module_ProductDBConnectedMeetings+moveParticipants"></a>

### connectedMeetings.moveParticipants(sourceMeetingId, destinationMeetingId, participantIds)
Trigger event to move participants


| Param | Type | Description |
| --- | --- | --- |
| sourceMeetingId | <code>string</code> | id of source meeting |
| destinationMeetingId | <code>string</code> | id of destination meeting |
| participantIds | <code>Array.&lt;string&gt;</code> | list of id of the participants |

<a name="module_ProductDBConnectedMeetings+moveParticipantsWithCustomPreset"></a>

### connectedMeetings.moveParticipantsWithCustomPreset()
Trigger event to move participants with custom preset

