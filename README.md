Controllers play a critical role in the AngularJS framework. In this module you'll learn the role that controllers play, how they can be created, and how scope fits into the picture for binding data to views using a data-oriented approach. You'll also learn how to create an AngularJS module and how to add controllers into it.

+ AngularJS Architecture Patterns
  + Angular JS relies on two key architecture patterns:
    + Model-View-Controller (MVC)
    + Model-View-View-Model (MVVM)
  + Patterns provide prescriptive guidance that can be used to build applications
+ MVC + MVVM = MV*
  + When a request comes in, a controller is instantiated
    + The controller is responsible for processing data which it will retrieve from the model
  + In the AngularJS world data is stored in the $scope
    + The $scope, which will be injected into the controller, will have the properties for the data we want to expose to the view
  + The view does not interact with the controller, it goes through the $scope
  + The view is then rendered back to the browser
  + The View-Model is the view's data; the $scope is the view-model
  
