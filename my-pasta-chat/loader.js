/**
  Copyright (c) 2015, 2020, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', './my-pasta-chat-viewModel'],
  function(Composite, viewModel) {
    Composite.register('my-pasta-chat', {
      view: '',
      viewModel: viewModel
    });
  }
);