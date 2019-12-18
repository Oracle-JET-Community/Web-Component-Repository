/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
'use strict';
define(
    ['knockout', 
     'ojL10n!./resources/nls/my-dropdown-with-chart-strings', 
     'ojs/ojcontext', 
     'text!./resources/basicData.json',
     'ojs/ojarraydataprovider',
     'ojs/ojchart',
     'ojs/ojselectsingle',
     'ojs/ojknockout'], 
 
 function (ko, componentStrings, Context, data, ArrayDataProvider) {
    
    function ExampleComponentModel(context) {
        var self = this;
        
        //At the start of your viewModel constructor
        var busyContext = Context.getContext(context.element).getBusyContext();
        var options = {"description": "Web Component Startup - Waiting for data"};
        self.busyResolve = busyContext.addBusyState(options);

        self.composite = context.element;

        self.selectVal = ko.observable('pie');
  
        var browsers = [
          { value: 'pie', label: 'Pie' },
          { value: 'bar', label: 'Bar' },
          { value: 'line', label: 'Line' }
        ];
  
        self.browsersDP = new ArrayDataProvider(browsers, { keyAttributes: 'value' });

        self.stackValue = ko.observable('off');
        self.orientationValue = ko.observable('vertical');
        self.dataProvider = new ArrayDataProvider(JSON.parse(data), {keyAttributes: 'id'});
        self.properties = context.properties;
        self.res = componentStrings['my-dropdown-with-chart'];
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