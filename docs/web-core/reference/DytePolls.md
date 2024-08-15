---
sidebar_position: 9
web_core_version: 1.32.1
---

<!-- Auto Generated Below -->

<a name="module_ProductDBPolls"></a>

The ProductDBPolls module consists of the polls that have been created in the meeting.


* [ProductDBPolls](#module_ProductDBPolls)
    * [.items](#module_ProductDBPolls+items)
    * [.roomJoined](#module_ProductDBPolls+roomJoined)
    * [.create(question, options, anonymous, hideVotes)](#module_ProductDBPolls+create)
    * [.vote(pollId, index)](#module_ProductDBPolls+vote)

<a name="module_ProductDBPolls+items"></a>

### polls.items
An array of poll items.

<a name="module_ProductDBPolls+roomJoined"></a>

### polls.roomJoined
Returns true if the local participant has joined the meeting.

<a name="module_ProductDBPolls+create"></a>

### polls.create(question, options, anonymous, hideVotes)
Creates a poll in the meeting.


| Param | Default | Description |
| --- | --- | --- |
| question |  | The question that is to be voted for. |
| options |  | The options of the poll. |
| anonymous | <code>false</code> | If true, the poll votes are anonymous. |
| hideVotes | <code>false</code> | If true, the votes on the poll are hidden. |

<a name="module_ProductDBPolls+vote"></a>

### polls.vote(pollId, index)
Casts a vote on an existing poll.


| Param | Description |
| --- | --- |
| pollId | The ID of the poll that is to be voted on. |
| index | The index of the option. |

