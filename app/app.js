(function() {
  "use strict";
  var app = angular.module("customersApp", [])
  // even if we assign a variable name here, within the IIFE it is no longer in the global scope; we no longer have access to the variable app through the global name space so we will call it through the module for injecting dependencies with associated controllers.
}());
