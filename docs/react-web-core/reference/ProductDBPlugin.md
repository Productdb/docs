---
sidebar_position: 14
web_core_version: 1.32.1
---

<!-- Auto Generated Below -->

<a name="module_ProductDBPlugin"></a>

The ProductDBPlugin module represents a single plugin in the meeting.
A plugin can be obtained from one of the plugin arrays in `meeting.plugins`.
For example,
```ts
const plugin1 = meeting.plugins.active.get(pluginId);
const plugin2 = meeting.plugins.all.get(pluginId);
```


* [ProductDBPlugin](#module_ProductDBPlugin)
    * [.roomJoined](#module_ProductDBPlugin+roomJoined)
    * [.sendIframeEvent(message)](#module_ProductDBPlugin+sendIframeEvent)
    * [.sendData(payload)](#module_ProductDBPlugin+sendData)
    * [.removePluginView(viewId)](#module_ProductDBPlugin+removePluginView)
    * [.addPluginView(iframe, viewId)](#module_ProductDBPlugin+addPluginView)
    * [.activateForSelf()](#module_ProductDBPlugin+activateForSelf)
    * [.deactivateForSelf()](#module_ProductDBPlugin+deactivateForSelf)
    * ~~[.enable()](#module_ProductDBPlugin+enable)~~
    * ~~[.disable()](#module_ProductDBPlugin+disable)~~
    * [.activate()](#module_ProductDBPlugin+activate)
    * [.deactivate()](#module_ProductDBPlugin+deactivate)

<a name="module_ProductDBPlugin+roomJoined"></a>

### plugin.roomJoined
Returns true if the local participant has joined the meeting.

<a name="module_ProductDBPlugin+sendIframeEvent"></a>

### plugin.sendIframeEvent(message)

| Param | Description |
| --- | --- |
| message | Socket message forwarded to this plugin. |

<a name="module_ProductDBPlugin+sendData"></a>

### plugin.sendData(payload)
This method is used to send arbitrary data to the plugin.


| Param | Description |
| --- | --- |
| payload | The payload that you want to send inside the plugin. |
| payload.eventName | Name of the event. This is used to listen for the event in plugin SDK. |
| payload.data | Data you wish to emit. It can assume any data type. |

<a name="module_ProductDBPlugin+removePluginView"></a>

### plugin.removePluginView(viewId)
This method is used for cleaning up event listeners attached to an iframe. It must
be used before the iframe is removed from the DOM.


| Param | Default | Description |
| --- | --- | --- |
| viewId | <code>default</code> | ID of the view corresponding to this iframe. Default is 'default'. |

<a name="module_ProductDBPlugin+addPluginView"></a>

### plugin.addPluginView(iframe, viewId)
This method adds the communcation layer between the plugin inside the iframe
and the core application (meeting object) in the main window.


| Param | Default | Description |
| --- | --- | --- |
| iframe |  | Iframe element to display this plugin. |
| viewId | <code>default</code> | ID of the view corresponding to this iframe. Default is 'default'. |

<a name="module_ProductDBPlugin+activateForSelf"></a>

### plugin.activateForSelf()
<a name="module_ProductDBPlugin+deactivateForSelf"></a>

### plugin.deactivateForSelf()
<a name="module_ProductDBPlugin+enable"></a>

### ~~plugin.enable()~~
***Deprecated***

<a name="module_ProductDBPlugin+disable"></a>

### ~~plugin.disable()~~
***Deprecated***

<a name="module_ProductDBPlugin+activate"></a>

### plugin.activate()
Activate this plugin for all participants.

<a name="module_ProductDBPlugin+deactivate"></a>

### plugin.deactivate()
Deactivate this plugin for all participants.

