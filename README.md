Factories and services can be used to encapsulate re-useable code so it can be shared across application components such as controllers and even other factories or services. In this module you'll learn about the role of factories and services, see how they can be created and added into a module, and learn the difference between the two. You'll also learn about built-in AngularJS services such as $http and see how it can be used to make Ajax calls to a back-end Node.js RESTful service.

+ Making Ajax calls from a Factory/Service
  + AngularJS Services can be used to make AJAX calls
    + <a href="https://docs.angularjs.org/api/ng/service/$http">$http</a>
    + <a href="https://docs.angularjs.org/api/ngResource/service/$resource">$resource</a>
+ The $http Service
  + The $http provides Ajax functionality
  + Uses the browsers XmlHttpRequest Object
  + Makes asynchronous requests
  + Supports multiple HTTP verbs:
    + $http.head
    + $http.get
    + $http.post
    + $http.put
    + $http.delete
    + $http.jsonp
+ Using the $http service
  + In a  factory you can inject $http as a parameter to get data from a remote RESTful service
  + We will return the function immediately; look to promises
  + The get will be performed asynchornously; so we will return a promise
    + We will use the controller for success/error on the call
+ Accessing $http Response Data
  + $http makes asynchronous calls
    + relies on $q service's deferred/promise API
    + Access data by calling then() or success()/error()
    + customersFactory.getCustomers()
      + .success(function(customers){
        + $scope.customers = customers;
      + })
      + .error(fucntion(data, status, headers, config){
        + //error!
      + })  
