Factories and services can be used to encapsulate re-useable code so it can be shared across application components such as controllers and even other factories or services. In this module you'll learn about the role of factories and services, see how they can be created and added into a module, and learn the difference between the two. You'll also learn about built-in AngularJS services such as $http and see how it can be used to make Ajax calls to a back-end Node.js RESTful service.

+ Value and Constant
  + A value can be created by using module.value(key, value)
    + angular.module("customersApp").value("version", "1.0");
    + can't be injected into config() to configure routes
    + can be injected into controllers, services and factories
  + A constant can be created using the module.constant(key, value)
    + angular.module("customersApp").constant("version", "1.0")
    + can be injected into the config()
    + 
