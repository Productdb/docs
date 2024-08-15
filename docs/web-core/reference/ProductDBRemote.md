---
sidebar_position: 16
web_core_version: 1.32.1
---

<!-- Auto Generated Below -->

<a name="module_ProductDBRemote"></a>

This module provides the ability to control a remotely shared screen using mouse and keyboard.
Methods are available to request, accept and end control of shared screen.


* [ProductDBRemote](#module_ProductDBRemote)
    * [.requestControl(peerId)](#module_ProductDBRemote+requestControl) ⇒
    * [.acceptControl(requestId)](#module_ProductDBRemote+acceptControl)
    * [.endControl()](#module_ProductDBRemote+endControl)

<a name="module_ProductDBRemote+requestControl"></a>

### meeting.remote.requestControl(peerId) ⇒
Sends a request to a peer for remote control.

**Returns**: request identifier for the control request.  

| Param | Description |
| --- | --- |
| peerId | The peer that needs to receive the remote control request |

<a name="module_ProductDBRemote+acceptControl"></a>

### meeting.remote.acceptControl(requestId)
Accepts a remote control request from a peer.


| Param | Description |
| --- | --- |
| requestId | The request identifier that needs to be accepted |

<a name="module_ProductDBRemote+endControl"></a>

### meeting.remote.endControl()
End an active remote control.

