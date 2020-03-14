# ojet component template

## Background

Watch this:

https://www.youtube.com/watch?v=1tmzmhK6wNA

And read the full instructions here:

https://app.compendium.com/api/post_attachments/c5cd8c6b-e5d9-4450-98a2-24b341ae7414/view

## Installation of web-sdk.js

As described above, create a node module, and in path_mapping.json:

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

The 'web-sdk.js' is found in the utilities folder of this Web Component.

## Usage

In appController.js, add this to the end of the define block:

'my-pasta-chat/loader'

