//Option 3
(function() {
  var CustomersController = function($scope) {
    $scope.sortBy = "name";
    $scope.reverse = false;
    $scope.doSort = function(propName) {
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };
  };
  CustomersController.$inject = [ "$scope" ];
  angular.module("customersApp")
  .controller("CustomersController", CustomersController);
}());
//Option 2
// (function() {
//   "use strict";
//   angular.module("customersApp")
//   .controller("CustomersController", function CustomersController() {
//     this.sortBy = "name";
//     this.reverse = false;
//     this.customers = [ { name: "John", city:"Nashville", joined: "2012/01/15", orderTotal: 9.998 }, { name:"Gerald", city:"Heaven", joined: "1989/08/07", orderTotal: 7.00 }, { name: "Joe", city:"Dirte", joined: "2012/01/23", orderTotal: 14.23 } ];
//     this.doSort = function(propName) {
//       this.sortBy = propName;
//       this.reverse = !this.reverse
//     }
//   });
// }());

//Option 1
// app.controller("CustomersController", function CustomersController() {
//   this.sortBy = "name";
//   this.reverse = false;
//   this.customers = [ { name: "John", city:"Nashville", joined: "2012/01/15", orderTotal: 9.998 }, { name:"Gerald", city:"Heaven", joined: "1989/08/07", orderTotal: 7.00 }, { name: "Joe", city:"Dirte", joined: "2012/01/23", orderTotal: 14.23 } ];
//   this.doSort = function(propName) {
//     this.sortBy = propName;
//     this.reverse = !this.reverse
//   }
// });
