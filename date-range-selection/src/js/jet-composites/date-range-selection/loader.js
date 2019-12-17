/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./date-range-selection-view.html', './date-range-selection-viewModel', 'text!./component.json', 'css!./date-range-selection-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('date-range-selection', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);