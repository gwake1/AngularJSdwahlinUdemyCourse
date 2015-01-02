Factories and services can be used to encapsulate re-useable code so it can be shared across application components such as controllers and even other factories or services. In this module you'll learn about the role of factories and services, see how they can be created and added into a module, and learn the difference between the two. You'll also learn about built-in AngularJS services such as $http and see how it can be used to make Ajax calls to a back-end Node.js RESTful service.

+ Factory and Service Overview
  + AngularJS supports the concept of factories and services
  + Includes several built-in factories/services
  + Singletons that perform re-usable tasks
      + Singletons hang around in memory and can be accessed by other controllers
    + Ajax Calls
      + store in one location so multiple controllers can access and won't be duplicated!!!
    + Business Rules
    + Calculations
    + Share data between controllers
+ Built-In Factories & Services
  + <a href="https://docs.angularjs.org/api/ng/service/$http">$http</a> for ajax calls
  + <a href="https://docs.angularjs.org/api/ng/service/$timeout">$timeout</a> similar to window.settimeout
  + <a href="https://docs.angularjs.org/api/ng/service/$window">$window</a> angular way to get to the window object
  + <a href="https://docs.angularjs.org/api/ng/service/$location">$location</a> will take to url including hash and host
  + <a href="https://docs.angularjs.org/api/ng/service/$q">$q</a> for async ajax calls
  + <a href="https://docs.angularjs.org/api/ng/service/$rootScope">$rootscope</a> behind the scene to create new scopes with controllers
  + <a href="https://docs.angularjs.org/api/ng/service/$interval">$interval</a> repeating timer
  + <a href="https://docs.angularjs.org/api/ng/service/$filter">$filter</a> for using custom filters in a contorller
  + <a href="https://docs.angularjs.org/api/ng/service/$log">$log</a> for general logging purposes
