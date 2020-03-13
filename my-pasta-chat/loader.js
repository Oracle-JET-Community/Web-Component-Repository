/**
  Copyright (c) 2015, 2020, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./my-pasta-chat-view.html', './my-pasta-chat-viewModel', 'text!./component.json', 'css!./my-pasta-chat-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('my-pasta-chat', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);