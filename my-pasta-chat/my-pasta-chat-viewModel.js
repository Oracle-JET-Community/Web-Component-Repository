/**
 Copyright (c) 2015, 2020, Oracle and/or its affiliates.
 The Universal Permissive License (UPL), Version 1.0
 */
'use strict';
define(
        ['odaweb', 'knockout', 'ojL10n!./resources/nls/my-pasta-chat-strings', 'ojs/ojcontext', 'ojs/ojknockout'],
        function (odaweb, ko, componentStrings, Context) {

            function ExampleComponentModel(context) {
                var self = this;

                //At the start of your viewModel constructor
                var busyContext = Context.getContext(context.element).getBusyContext();
                var options = {"description": "Web Component Startup - Waiting for data"};
                self.busyResolve = busyContext.addBusyState(options);

                self.composite = context.element;

                //Example observable
                self.messageText = ko.observable('Hello from my-pasta-chat');
                self.properties = context.properties;
                self.res = componentStrings['my-pasta-chat'];
                // Example for parsing context properties
                // if (context.properties.name) {
                //     parse the context properties here
                // }

                //Once all startup and async activities have finished, relocate if there are any async activities
                self.busyResolve();
            }
            ;

            //Lifecycle methods - uncomment and implement if necessary 
            //ExampleComponentModel.prototype.activated = function(context){
            //};

            //ExampleComponentModel.prototype.connected = function(context){
            //};

            //ExampleComponentModel.prototype.bindingsApplied = function(context){
            //};

            //ExampleComponentModel.prototype.disconnect = function(context){
            //};

            //ExampleComponentModel.prototype.propertyChanged = function(context){
            //};


            if (typeof clientAuthEnabled === 'undefined') {
                var clientAuthEnabled = false;
            }

            /**
             * Chat Widget configuration settings
             * Depending on the type of channel connecting to, the mandatory requirements
             * in the settings object are different.
             *
             * If the channel has client authentication enabled, the settings must pass
             * clientAuthEnabled: true
             *
             * If the channel has client authentication disabled, the settings should pass
             * channelId, and optionally, userId.
             */
//                var chatWidgetSettings;
//                if (clientAuthEnabled) {
//                    chatWidgetSettings = {
//                        URI: '<url>',
//                        clientAuthEnabled: true
//                    };
//                } else {
//                    chatWidgetSettings = {
//                        URI: '<url>',
//                        channelId: '<channeld-id>'
//                    };
//                }

            var chatWidgetSettings;
            if (clientAuthEnabled) {
                chatWidgetSettings = {
                    URI: 'oda-db591e3f7b5f4a9290f3244ef44c516f-s0.data.digitalassistant.oci.oc-test.com',
                    clientAuthEnabled: true
                };
            } else {
                chatWidgetSettings = {
                    URI: 'oda-db591e3f7b5f4a9290f3244ef44c516f-s0.data.digitalassistant.oci.oc-test.com',
                    channelId: '77c954fc-ac8c-4f0b-bc09-2bf7f2881c4e'
                };
            }
            ;

            /**
             * Function to generate JWT tokens. It returns a Promise to provide tokens.
             * The function is passed to SDK which uses it to fetch token whenever it needs
             * to establish connections to chat server
             * @returns {Promise} Promise to provide a signed JWT token
             */
            var generateToken = function () {
                return new Promise((resolve) => {
                    mockApiCall('https://mockurl').then((token) => {
                        resolve(token);
                    });
                });
            }

            /**
             * A function mocking an endpoint call to backend to provide authentication token
             * The recommended behaviour is fetching the token from backend server
             * @returns {Promise} Promise to provide a signed JWT token
             */
            var mockApiCall = function () {
                return new Promise((resolve) => {
                    var now = Math.floor(Date.now() / 1000)
                    var payload = {
                        iat: now,
                        exp: now + 3600,
                        channelId: '<channel-id>',
                        userId: 'abc'
                    };
                    var SECRET = '<channel-secret>';

                    // An unimplemented function generating signed JWT token with given header, payload, and signature
                    var token = generateToken({alg: 'HS256', typ: 'JWT'}, payload, SECRET);
                    resolve(token);
                });
            };

            function initSdk(name) {
                // Default name is Bots
                if (!name) {
                    name = 'Bots';
                }
                setTimeout(() => {
                    if (clientAuthEnabled) {
                        window[name] = new odaweb(chatWidgetSettings, generateToken);
                    } else {
                        window[name] = new odaweb(chatWidgetSettings);
                    }
                    window[name].connect()
                            .then(() => {
                                console.log("Connection Successful");
                            })
                            .catch((reason) => {
                                console.log("Connection failed");
                                console.log(reason);
                            });
                });
            };

            initSdk('Bots');

            return ExampleComponentModel;
            
        });