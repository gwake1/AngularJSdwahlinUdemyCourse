Factories and services can be used to encapsulate re-useable code so it can be shared across application components such as controllers and even other factories or services. In this module you'll learn about the role of factories and services, see how they can be created and added into a module, and learn the difference between the two. You'll also learn about built-in AngularJS services such as $http and see how it can be used to make Ajax calls to a back-end Node.js RESTful service.

+ What is a Service?
  + Similar to a factory as far as functionality
    + The function that you assign to the service is the object
    + Will utilize the javascript this keyword, alot
  + Services:
    + Service function represents the returned object as opposed to a custom object like in a factory
    + Created using the module.service() function
    + Can be injected into other components
    + Can have dependencies
+   Creating a Service
  + (function(){
    + var customersService = function(){
      + var customers = {. . . };
      + this.getCustomers = function (){
        + return customers;
      + }
    + }
    + angular.module("customersApp")
      + .service("customersService", customersService)
  + }());
  + Notes on creating a service
    + looks like the factory
    + We don't return anything here, the function will be assigned as the service and will be the object
      + notice we use this.getCustomers to return the customers variable
      + AngularJS will create an instance of this function, store in memory as a singleton, and then everytime it is called will be that object's (this) .getCustomers
      + Wahlin's preference is to use the aforementioned factory approach where you are creating custom objects
+ Injecting a Service
  + var customersController = function($scope, customersService){
    + function init(){
      + $scope.customers = customersService.getCustomers();
    + };
  + CustomersController.$inject = ["$scope", "customersService"];
  + angular.module("customersApp")
    + .controller("CustomersControlller", CustomersController)
