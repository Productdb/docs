---
sidebar_position: 11
web_core_version: 1.32.1
---

<!-- Auto Generated Below -->

<a name="module_ProductDBStage"></a>

The ProductDBStage module represents a class to mange the Stage of the meeting
Stage refers to a virtual area, where participants stream are visible to other participants.
When a participant is off stage, they are not producing media
but only consuming media from participants who are on Stage


* [ProductDBStage](#module_ProductDBStage)
    * [.getAccessRequests()](#module_ProductDBStage+getAccessRequests)
    * [.requestAccess()](#module_ProductDBStage+requestAccess)
    * [.cancelRequestAccess()](#module_ProductDBStage+cancelRequestAccess)
    * [.grantAccess()](#module_ProductDBStage+grantAccess)
    * [.denyAccess()](#module_ProductDBStage+denyAccess)
    * [.join()](#module_ProductDBStage+join)
    * [.leave()](#module_ProductDBStage+leave)
    * [.kick()](#module_ProductDBStage+kick)

<a name="module_ProductDBStage+getAccessRequests"></a>

### stage.getAccessRequests()
Method to fetch all Stage access requests from viewers

<a name="module_ProductDBStage+requestAccess"></a>

### stage.requestAccess()
Method to send a request to privileged users to join the stage

<a name="module_ProductDBStage+cancelRequestAccess"></a>

### stage.cancelRequestAccess()
Method to cancel a previous Stage join request

<a name="module_ProductDBStage+grantAccess"></a>

### stage.grantAccess()
Method to grant access to Stage.
	This can be in response to a Stage Join request but it can be called on other users as well

`permissions.acceptStageRequests` privilege required

<a name="module_ProductDBStage+denyAccess"></a>

### stage.denyAccess()
Method to deny access to Stage.
This should be called in response to a Stage Join request

<a name="module_ProductDBStage+join"></a>

### stage.join()
Method to join the stage
Users either need to have the permission in the preset or must be accepted by a priveleged
user to call this method

<a name="module_ProductDBStage+leave"></a>

### stage.leave()
Method to leave the stage
Users must either be on the stage already or be accepted to join the stage
to call this method

<a name="module_ProductDBStage+kick"></a>

### stage.kick()
Method to kick a user off the stage

`permissions.acceptStageRequests` privilege required

