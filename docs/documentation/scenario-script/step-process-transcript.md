---
sidebar_position: 1
---

# Process Transcript

This step converts Conversation Transcripts from TEXT format to JSON format, which is a required format for subsequent analysis steps.

Following is the supported JSON format:

```json
{
	"metadata": {
		"id": "329cd711eb884f2b",
		"conversationID": "329cd711eb884f2b",
		"start": "2023-03-15T22:22:42.210Z",
		"end": "2023-03-15T22:24:40.431Z",
		"duration": 118,
		"caller": "James Jones",
		"agent": "Mary"
	},
	"messages": [
		{
			"name": "Mary",
			"date": "2023-03-15T22:22:48.224Z",
			"message": "Hello my name is Mary how can i help you today?",
			"actor": "agent",
		},
		{
			"name": "James",
			"date": "2023-03-15T22:22:54.994Z",
			"message": "Hi my name is James",
			"actor": "caller",
		}
	]
}
```
