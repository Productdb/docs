---
sidebar_position: 8
web_core_version: 1.32.1
---

<!-- Auto Generated Below -->

<a name="module_ProductDBChat"></a>

This is the chat module, which can be used to send and receive messages from the meeting.


* [ProductDBChat](#module_ProductDBChat)
    * [.messages](#module_ProductDBChat+messages)
    * [.channels](#module_ProductDBChat+channels)
    * [.roomJoined](#module_ProductDBChat+roomJoined)
    * [.pinned](#module_ProductDBChat+pinned)
    * [.sendTextMessage(message)](#module_ProductDBChat+sendTextMessage)
    * [.sendImageMessage(image)](#module_ProductDBChat+sendImageMessage)
    * [.sendFileMessage(file)](#module_ProductDBChat+sendFileMessage)
    * [.sendMessage(message, participantIds)](#module_ProductDBChat+sendMessage)
    * [.getMessagesByUser(userId)](#module_ProductDBChat+getMessagesByUser)
    * [.getMessagesByType(type)](#module_ProductDBChat+getMessagesByType)
    * [.pin(id)](#module_ProductDBChat+pin)
    * [.unpin(id)](#module_ProductDBChat+unpin)
    * [.getMessages()](#module_ProductDBChat+getMessages)
    * [.createChannel()](#module_ProductDBChat+createChannel)
    * [.updateChannel()](#module_ProductDBChat+updateChannel)
    * [.sendMessageToChannel(message, channelId)](#module_ProductDBChat+sendMessageToChannel)
    * [.getChannelMembers()](#module_ProductDBChat+getChannelMembers)
    * [.searchMessages()](#module_ProductDBChat+searchMessages)
    * [.markLastReadMessage()](#module_ProductDBChat+markLastReadMessage)

<a name="module_ProductDBChat+messages"></a>

### chat.messages
An array of chat messages.

<a name="module_ProductDBChat+channels"></a>

### chat.channels
An Array of all available channels.

<a name="module_ProductDBChat+roomJoined"></a>

### chat.roomJoined
Returns true if the local participant has joined the meeting.

<a name="module_ProductDBChat+pinned"></a>

### chat.pinned
Returns an array of pinned messages.

<a name="module_ProductDBChat+sendTextMessage"></a>

### chat.sendTextMessage(message)
Sends a chat text message to the room.


| Param | Description |
| --- | --- |
| message | The message that must be sent to the room. |

<a name="module_ProductDBChat+sendImageMessage"></a>

### chat.sendImageMessage(image)
Sends an image message to the meeting.


| Param | Description |
| --- | --- |
| image | The image that is to be sent. |

<a name="module_ProductDBChat+sendFileMessage"></a>

### chat.sendFileMessage(file)
Sends a file to the meeting.


| Param | Description |
| --- | --- |
| file | A File object. |

<a name="module_ProductDBChat+sendMessage"></a>

### chat.sendMessage(message, participantIds)
Sends a message to the meeting. This method can be used to send text, image,
or file messages. The message type is determined by the key 'type' in `message`
object.


| Param | Description |
| --- | --- |
| message | An object including the type and content of the message. |
| participantIds | An array including the userIds of the participants. |

<a name="module_ProductDBChat+getMessagesByUser"></a>

### chat.getMessagesByUser(userId)
Returns an array of messages sent by a specific userId.


| Param | Description |
| --- | --- |
| userId | The user id of the user that sent the message. |

<a name="module_ProductDBChat+getMessagesByType"></a>

### chat.getMessagesByType(type)
Returns an array of 'text', 'image' or 'file' messages.


| Param | Description |
| --- | --- |
| type | 'text', 'image', or 'file'. |

<a name="module_ProductDBChat+pin"></a>

### chat.pin(id)
Pins a chat message


| Param | Description |
| --- | --- |
| id | ID of the message to be pinned |

<a name="module_ProductDBChat+unpin"></a>

### chat.unpin(id)
Unpins a chat message


| Param | Description |
| --- | --- |
| id | ID of the message to be unpinned |

<a name="module_ProductDBChat+getMessages"></a>

### chat.getMessages()
Gets chat messages in a paginated manner

<a name="module_ProductDBChat+createChannel"></a>

### chat.createChannel()
Creates a channel with specified name and userIds as members

<a name="module_ProductDBChat+updateChannel"></a>

### chat.updateChannel()
Updates the channel

<a name="module_ProductDBChat+sendMessageToChannel"></a>

### chat.sendMessageToChannel(message, channelId)
Sends a message to a channel. This method can be used to send text, image,
or file messages. The message type is determined by the key 'type' in `message`
object.


| Param | Description |
| --- | --- |
| message | An object including the type and content of the message. |
| channelId | Id of the channel where you want to send the message. |

<a name="module_ProductDBChat+getChannelMembers"></a>

### chat.getChannelMembers()
returns a list of members added to the channel

<a name="module_ProductDBChat+searchMessages"></a>

### chat.searchMessages()
search messages

<a name="module_ProductDBChat+markLastReadMessage"></a>

### chat.markLastReadMessage()
marks last read message in a channel

