# my-pasta-chat

## Background

Watch this (it takes two minutes):

https://www.youtube.com/watch?v=1tmzmhK6wNA

And read the full instructions here:

https://app.compendium.com/api/post_attachments/c5cd8c6b-e5d9-4450-98a2-24b341ae7414/view

## Environment Requirements

The Oracle Web SDK ('web-sdk.js') needs to be installed by the application -- and is referenced as 'odaweb' in the define block of the ViewModel of the Web Component.

As described in the background references above, create a node module, and in path_mapping.json add the following:

```javascript
"odaweb": {
  "cdn": "3rdparty",
  "cwd": "node_modules/websdknode",
  "debug": {
    "src":  ["web-sdk.js"],
    "path": "libs/websdknode/web-sdk.js",
    "cdnPath": ""
  },
  "release": {
    "src": ["web-sdk.js"],
    "path": "libs/websdknode/web-sdk.js",
    "cdnPath": ""
  }
}
```

Note: The 'web-sdk.js' is found in the utilities folder of this Web Component.

## Usage

1. Download the content of my-pasta-chat into a folder 'src/js/jet-composites/my-pasta-chat'.

2. In appController.js, add this to the end of the define block:

'my-pasta-chat/loader'

3. Run ojet serve and you will find the chat is available throughout the application.
