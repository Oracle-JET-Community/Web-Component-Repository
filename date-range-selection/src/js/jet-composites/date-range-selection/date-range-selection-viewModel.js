/**
 * @author Hamed Roknizadeh
 * @email hamedoracle@gmail.com
 * @create date 2019-12-17 18:18:19
 * @modify date 2019-12-17 18:18:19
 */
/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/

'use strict';
define(
  ['knockout', 'ojL10n!./resources/nls/date-range-selection-strings', 'ojs/ojcontext', 'ojs/ojknockout','ojs/ojdatetimepicker'],
  function (ko, componentStrings, Context) {

    function ExampleComponentModel(context) {
      var self = this;

      //At the start of your viewModel constructor
      var busyContext = Context.getContext(context.element).getBusyContext();
      var options = { "description": "Web Component Startup - Waiting for data" };
      self.busyResolve = busyContext.addBusyState(options);

      self.composite = context.element;

      //Example observable
      self.from = ko.observable();
      self.to = ko.observable();
      self.properties = context.properties;
      self.res = componentStrings['date-range-selection'];
      // Example for parsing context properties
      // if (context.properties.name) {
      //     parse the context properties here
      // }

      //Once all startup and async activities have finished, relocate if there are any async activities
      self.busyResolve();
    };

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

    return ExampleComponentModel;
  });