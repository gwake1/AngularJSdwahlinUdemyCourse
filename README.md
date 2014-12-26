In this module you'll learn the difference between control-oriented and data-oriented programming and see how AngularJS data-binding functionality will save you time and allow you to focus on your application's data. You'll also learn about the role of views and directives and see several directives in action. Finally, you'll learn about filters and how they can be used to filter, format, and sort data in AngularJS SPA applications.

+ Directives and Expressions
+ Directives:
  + 1.  What are Directives?
    + Directives teach HTML new tricks
  + 2.  What can Directives do?
    + DOM Manipulation -> Data Binding -> Controllers/ Modules -> View Loading -> CSS -> Events
    + Dom Manipulation
      + <a href="https://docs.angularjs.org/api/ng/directive/ngHide">ng-hide</a> : hides content
      + <a href="https://docs.angularjs.org/api/ng/directive/ngRepeat">ng-repeat</a> : iterate through content and write out a bulleted list
      + <a href="https://docs.angularjs.org/api/ng/directive/ngShow">ng-show</a> : shows content
      + <a href="https://docs.angularjs.org/api/ngRoute/directive/ngView">ng-view</a> : show were a given loads in the HTML shell page
    + Data Binding
      + <a href="https://docs.angularjs.org/api/ng/directive/ngBind">ng-bind</a> : used in place of data binding expressions
      + <a href="https://docs.angularjs.org/api/ng/directive/ngInit">ng-init</a> : initialize properties with initial values
      + <a href="https://docs.angularjs.org/api/ng/directive/ngModel">ng-model</a> : binds values from html page
    + Modules/ Controllers
      + <a href="https://docs.angularjs.org/api/ng/directive/ngApp">ng-app</a> : marks an app as an AngularJS Ap
      + <a href="https://docs.angularjs.org/api/ng/directive/ngController">ng-controller</a> : associates the controller with a view so at runtime the view knows which controller to use to get the data
    + Events
      + <a href="https://docs.angularjs.org/api/ngTouch/directive/ngClick">ng-click</a>
      + <a href="https://docs.angularjs.org/api/ng/directive/ngKeypress">ng-keypress</a>
      + <a href="https://docs.angularjs.org/api/ng/directive/ngMouseenter">ng-mouseenter</a>
  + 3.  Defining Directives
    + Most directives are used as attributes
      + data dash attribute used against an html validator is valid for linting purposes
    + Some directives can be used as custom tags in the HTML to add custom functionality
    + Ng-view is used as a marker to say where the content is loaded into the page
    + Directives can be defined using comments; rare
    + Directives can also be defined through classes
+ Expressions
  + Expressions are code snippets placed in binding markup: {{ }}
    + business logic should not go into expressions
    + Mostly used for writing out values into the page
    
