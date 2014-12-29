Controllers play a critical role in the AngularJS framework. In this module you'll learn the role that controllers play, how they can be created, and how scope fits into the picture for binding data to views using a data-oriented approach. You'll also learn how to create an AngularJS module and how to add controllers into it.

+ The role of Modules
  + Modules are containers for:
    + Controllers
    + Config
      + Routes
    + Factories
      + Services
    + Directives
    + Filters
  + create a module using angular.module('moduleName', [Dependencies])
    + Modules may rely on functionality from other modules
    + Helper modules can be "injected" into a module:
      + var demoApp = angular.module('demoApp', ['helperModule']);
      + 'helperModule' is an external module
  + Adding a controller to a Module
    + Option 1
      + var demoApp = angular.module('demoApp', []);
        + the var demoApp is in the global scope; this may be good or bad depending on stage of development
      + demoApp.controller('SimpleContorller', function($scope){
        $scope.customers = [
        { name: "John", city:"Nashville", joined: "2012/01/15", orderTotal: 9.998 },
        { name:"Gerald", city:"Heaven", joined: "1989/08/07", orderTotal: 7.00 },
        { name: "Joe", city:"Dirte", joined: "2012/01/23", orderTotal: 14.23 } ];
        });
    +  Option 2
      + var demoApp = angular.module('demoApp', []);
        + this variable can be placed in a wrapper to avoid polluting the global name space
        + after the module is defined we will reference the module
        + by defining it below it will refrence the module and associated dependencies through memory
      + angular.module('demoApp').controller('SimpleContorller', function($scope){
        $scope.customers = [
        { name: "John", city:"Nashville", joined: "2012/01/15", orderTotal: 9.998 },
        { name:"Gerald", city:"Heaven", joined: "1989/08/07", orderTotal: 7.00 },
        { name: "Joe", city:"Dirte", joined: "2012/01/23", orderTotal: 14.23 } ];
        });
    + Option 3 (preferred)
      + var demoApp = angular.module('demoApp', []);
        + angular.module will reference the module
        + we will feed the variable SimpleController into the controller function description; the variable will not be in the global scope; it will be immediately invoked
        + when using uglifier for script minification we must include it in square brackets; see below
      + (function() {
          var SimpleController = function($scope){
            $scope.customers = [
              { name: "John", city:"Nashville", joined: "2012/01/15", orderTotal: 9.998 },
              { name:"Gerald", city:"Heaven", joined: "1989/08/07", orderTotal: 7.00 },
              { name: "Joe", city:"Dirte", joined: "2012/01/23", orderTotal: 14.23 }
            ];
          };
          angular.module('demoApp')
            .controller('SimpleController', SimpleController)
        }());
      + Dealing with Minification
        + Option 1
          + within the square brackets you list all of the parameter names for the function in order
          + angular.module('demoApp')
              .controller('SimpleController', ['$scope', function($scope){
                $scope.customers = [
                { name: "John", city:"Nashville", joined: "2012/01/15", orderTotal: 9.998 },
                { name:"Gerald", city:"Heaven", joined: "1989/08/07", orderTotal: 7.00 },
                { name: "Joe", city:"Dirte", joined: "2012/01/23", orderTotal: 14.23 }
                ];
                }])
        + Option 2 (in conjuction with Option 3 for Adding a Controller to the Module above)
          + define the controller and then <a href="https://docs.angularjs.org/api/auto/service/$injector">inject the variable</a>
          + (function() {
            var SimpleController = function($scope){
              $scope.customers = [
              { name: "John", city:"Nashville", joined: "2012/01/15", orderTotal: 9.998 },
              { name:"Gerald", city:"Heaven", joined: "1989/08/07", orderTotal: 7.00 },
              { name: "Joe", city:"Dirte", joined: "2012/01/23", orderTotal: 14.23 }
              ];
            };
            SimpleController.$inject = ['scope'];
            angular.module('demoApp')
            .controller('SimpleController', SimpleController)
            }());
