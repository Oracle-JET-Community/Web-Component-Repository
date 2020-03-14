# my-pasta-chat

## Background

Watch this (it takes two minutes):

https://www.youtube.com/watch?v=1tmzmhK6wNA

And read the full instructions here:

https://app.compendium.com/api/post_attachments/c5cd8c6b-e5d9-4450-98a2-24b341ae7414/view

## Environment Requirements

'./utilities/web-sdk',

The above is all that's needed, in the define block of the ViewModel, to load the web-sdk.js.

Note: The 'web-sdk.js' is found in the utilities folder of this Web Component.

## Usage

1. Download the content of my-pasta-chat into a folder 'src/js/jet-composites/my-pasta-chat'.

2. In appController.js, add this to the end of the define block:

'my-pasta-chat/loader'

3. Run ojet serve and you will find the chat is available throughout the application.
