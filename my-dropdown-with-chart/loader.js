/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./my-dropdown-with-chart-view.html', './my-dropdown-with-chart-viewModel', 'text!./component.json', 'css!./my-dropdown-with-chart-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('my-dropdown-with-chart', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);