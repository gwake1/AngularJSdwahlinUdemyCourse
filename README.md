Once you understand how to create controllers and views you need to know how to integrate routing into your Single Page Application. In this module you'll learn how to do that using the $routeProvider and see how to define routes, create route parameters, and access route parameter values. You'll also learn about the role that the ng-view directive plays in AngularJS.

+ Referencing the ngRoute Module
  + AngularJS routing functionality is located in the ngRoute module
  + Add a script that loads angular-route.js
    + bower install angular-route
  + Reference ngRoute in the module
    + var demoApp = angular.module("demoApp", ["ngRoute"])

+   Defining Routes using angular.config()
  + var demoApp = angular.module("customersApp", ["ngRoute"])
  + app.config(function($routeProvider){
    + $routeProvider
    + .when("/",
      + {
        + controller: "CustomersController",
        + templateUrl: "/app/views/customers.html"
      + })
    + .when("/orders",
      + {
        + controller: "OrdersController",
        + templateUrl:  "/app/views/orders.html"
      + })
    + .otherwise({redirectTo: "/"})
  + });
+   Route Parameters
  + Route parameters can be defined using the ":" character
    + var demoApp = angular.module("customersApp", ["ngRoute"])
    + app.config(function($routeProvider){
      + $routeProvider
      + .when("/editCustomer/:customerId",
      + {
        + controller: "CustomerEditController",
        + templateUrl: "/app/views/customerEdit.html"
      + });
    + });
+   Accessing Route Parameters in a Controller
  +  Route parameters can be accessed through the $routeParams provider:
    + var app = angular.module("customersApp");
    + app.controller("CustomerEditController",
      + function($scope, $routeParams) {
        + $scope.customerId = $routeParams.customerId;
      + })
