Factories and services can be used to encapsulate re-useable code so it can be shared across application components such as controllers and even other factories or services. In this module you'll learn about the role of factories and services, see how they can be created and added into a module, and learn the difference between the two. You'll also learn about built-in AngularJS services such as $http and see how it can be used to make Ajax calls to a back-end Node.js RESTful service.

+ Creating a Factory
  + What is a Factory?
    + Really just a singleton
    + Define re-usable tasks
    + Share code or state between controllers
  + Factories
    + Create and return a custom object
    + Created using the module.factory() function
    + Can be injected into other components
    + Can have dependencies
+ Process of Creating a Factory
  + (function(){
    + var customersFactory = function(){
      + var customers = {. . .};
      + var factory = {};
      + factory.getCustomers = function(){
        + return customers,
      + };
      + return factory;
    + };
    + angular.module("customersApp")
      + .factory("customersFactory", customersFactory)
  +}());
  + Notes on above factory
    + Be sure to wrap in an iife so as not to pollute the global name space
    + var factory is our custom factory object to assign additional properties and then return the custom factory object
+ Process of Injecting a Factory
  + var CustomersController = function($scope, customersFactory) {
    + function init(){
      + $scope.customers = customersFactory.getCustomers();
    + };
    + CustomersController.$inject = [ "$scope", "customersFactory" ];
    + angular.module("customersApp")
      + .controller("CustomersController", CustomersController)
  + };
  + Notes on above factory injection
    + the second parameter above is the custom factory being injected into the controller in this case to retrieve customer data
    + this will help to modularize and make easier to maintain
