In this module you'll learn the difference between control-oriented and data-oriented programming and see how AngularJS data-binding functionality will save you time and allow you to focus on your application's data. You'll also learn about the role of views and directives and see several directives in action. Finally, you'll learn about filters and how they can be used to filter, format, and sort data in AngularJS SPA applications.

+ Data Binding Overview
  + 1. JavaScript doesn't provide native support for data binding
  + 2. Two-way data binding can lead to significant reductions in code
  + 3. Control Oriented Vs Data Oriented
    + a. Control Oriented is vanilla javascript to write code to get into a text box assign a value, then hit a button to submit data and store the value and then use it for other purposes. (requires html tags i.e. #id)
      + 1. Code assigns a value to the textbox
        + "document.getElementbyId("name").value = 'John Doe';"
      + 2. User Modifies Data
      + 3.  User Clicks a button
      + 4.  Code pulls value out of the textbox
        + "var name = document.getElementById("name").value;"
    + b. Data Oriented programming we leverage a framework
      + 1.  Property is bound to a textbox
        + "<input type = "text" bindProperty="name" />"
      + 2.  User modifies data
      + 3. Property value is automatically updated
