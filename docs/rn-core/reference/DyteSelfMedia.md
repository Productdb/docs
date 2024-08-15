---
sidebar_position: 13
web_core_version: 1.20.0
---

<!-- Auto Generated Below -->

<a name="module_ProductDBSelfMedia"></a>

This module allows users to initialize media before initializing the root ProductDBClient.init object

- [ProductDBSelfMedia](#module_ProductDBSelfMedia)
  - [.audioTrack](#module_ProductDBSelfMedia+audioTrack)
  - [.rawAudioTrack](#module_ProductDBSelfMedia+rawAudioTrack)
  - [.mediaPermissions](#module_ProductDBSelfMedia+mediaPermissions)
  - [.videoTrack](#module_ProductDBSelfMedia+videoTrack)
  - [.rawVideoTrack](#module_ProductDBSelfMedia+rawVideoTrack)
  - [.screenShareTracks](#module_ProductDBSelfMedia+screenShareTracks)
  - [.audioEnabled](#module_ProductDBSelfMedia+audioEnabled)
  - [.videoEnabled](#module_ProductDBSelfMedia+videoEnabled)
  - [.screenShareEnabled](#module_ProductDBSelfMedia+screenShareEnabled)
  - [.addAudioMiddleware()](#module_ProductDBSelfMedia+addAudioMiddleware)
  - [.removeAudioMiddleware()](#module_ProductDBSelfMedia+removeAudioMiddleware)
  - [.addVideoMiddleware()](#module_ProductDBSelfMedia+addVideoMiddleware)
  - [.removeVideoMiddleware()](#module_ProductDBSelfMedia+removeVideoMiddleware)
  - [.getCurrentDevices()](#module_ProductDBSelfMedia+getCurrentDevices)
  - [.getAudioDevices()](#module_ProductDBSelfMedia+getAudioDevices)
  - [.getVideoDevices()](#module_ProductDBSelfMedia+getVideoDevices)
  - [.getSpeakerDevices()](#module_ProductDBSelfMedia+getSpeakerDevices)
  - [.getDeviceById(deviceId, kind)](#module_ProductDBSelfMedia+getDeviceById)
  - [.setDevice(device)](#module_ProductDBSelfMedia+setDevice)

<a name="module_ProductDBSelfMedia+audioTrack"></a>

### .audioTrack

Returns the `audioTrack`.

<a name="module_ProductDBSelfMedia+rawAudioTrack"></a>

### .rawAudioTrack

Returns the `rawAudioTrack` having no middleware executed on it.

<a name="module_ProductDBSelfMedia+mediaPermissions"></a>

### .mediaPermissions

Returns the current audio and video permissions given by the user.
'ACCEPTED' if the user has given permission to use the media.
'CANCELED' if the user has canceled the screenshare.
'DENIED' if the user has denied permission to use the media.
'SYS_DENIED' if the user's system has denied permission to use the media.
'UNAVAILABLE' if the media is not available (or being used by a different application).

<a name="module_ProductDBSelfMedia+videoTrack"></a>

### .videoTrack

Returns the `videoTrack`.

<a name="module_ProductDBSelfMedia+rawVideoTrack"></a>

### .rawVideoTrack

Returns the `videoTrack` having no middleware executed on it.

<a name="module_ProductDBSelfMedia+screenShareTracks"></a>

### .screenShareTracks

Returns the screen share tracks.

<a name="module_ProductDBSelfMedia+audioEnabled"></a>

### .audioEnabled

Returns true if audio is enabled.

<a name="module_ProductDBSelfMedia+videoEnabled"></a>

### .videoEnabled

Returns true if video is enabled.

<a name="module_ProductDBSelfMedia+screenShareEnabled"></a>

### .screenShareEnabled

Returns true if screen share is enabled.

<a name="module_ProductDBSelfMedia+addAudioMiddleware"></a>

### .addAudioMiddleware()

Adds the audio middleware to be executed on the raw audio stream.
If there are more than 1 audio middlewares,
they will be executed in the sequence they were added in.
If you want the sequence to be altered, please remove all previous middlewares and re-add.

**Kind**: instance method of [<code>ProductDBSelfMedia</code>](#module_ProductDBSelfMedia)  
<a name="module_ProductDBSelfMedia+removeAudioMiddleware"></a>

### .removeAudioMiddleware()

Removes the audio middleware, if it is there.

**Kind**: instance method of [<code>ProductDBSelfMedia</code>](#module_ProductDBSelfMedia)  
<a name="module_ProductDBSelfMedia+addVideoMiddleware"></a>

### .addVideoMiddleware()

Adds the video middleware to be executed on the raw video stream.
If there are more than 1 video middlewares,
they will be executed in the sequence they were added in.
If you want the sequence to be altered, please remove all previous middlewares and re-add.

**Kind**: instance method of [<code>ProductDBSelfMedia</code>](#module_ProductDBSelfMedia)  
<a name="module_ProductDBSelfMedia+removeVideoMiddleware"></a>

### .removeVideoMiddleware()

Removes the video middleware, if it is there.

**Kind**: instance method of [<code>ProductDBSelfMedia</code>](#module_ProductDBSelfMedia)  
<a name="module_ProductDBSelfMedia+getCurrentDevices"></a>

### .getCurrentDevices()

Returns the media devices currently being used.

**Kind**: instance method of [<code>ProductDBSelfMedia</code>](#module_ProductDBSelfMedia)  
<a name="module_ProductDBSelfMedia+getAudioDevices"></a>

### .getAudioDevices()

Returns the local participant's audio devices.

**Kind**: instance method of [<code>ProductDBSelfMedia</code>](#module_ProductDBSelfMedia)  
<a name="module_ProductDBSelfMedia+getVideoDevices"></a>

### .getVideoDevices()

Returns the local participant's video devices.

**Kind**: instance method of [<code>ProductDBSelfMedia</code>](#module_ProductDBSelfMedia)  
<a name="module_ProductDBSelfMedia+getSpeakerDevices"></a>

### .getSpeakerDevices()

Returns the local participant's speaker devices.

**Kind**: instance method of [<code>ProductDBSelfMedia</code>](#module_ProductDBSelfMedia)  
<a name="module_ProductDBSelfMedia+getDeviceById"></a>

### .getDeviceById(deviceId, kind)

Returns the local participant's device, indexed by ID and kind.

**Kind**: instance method of [<code>ProductDBSelfMedia</code>](#module_ProductDBSelfMedia)

| Param    | Description                                       |
| -------- | ------------------------------------------------- |
| deviceId | The ID of the device.                             |
| kind     | The kind of the device: audio, video, or speaker. |

<a name="module_ProductDBSelfMedia+setDevice"></a>

### .setDevice(device)

Change the current media device that is being used by the local participant.

**Kind**: instance method of [<code>ProductDBSelfMedia</code>](#module_ProductDBSelfMedia)

| Param  | Description                                                                                      |
| ------ | ------------------------------------------------------------------------------------------------ |
| device | The device that is to be used. A device of the same `kind` will be replaced. the primary stream. |
