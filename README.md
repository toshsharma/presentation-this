# Demystifying _this_

The presentation can be viewed at [http://toshsharma.github.io/presentation-this/](http://toshsharma.github.io/presentation-this/).

The _this_ keyword in JavaScript can get quite tricky, especially in event callbacks and setTimeout() or setInterval() handlers.

This presentation discusses common usage patterns that lead to an incorrect context (i.e. an unexpected value of _this_), as well as provides recipes to code these patterns the right way.

Outline:

* _this_ in Object methods, getters & setters
* _this_ in Function calls
* _this_ in Extracted object methods
* _this_ in setTimeout, setInterval callbacks
* _this_ in event handlers
    * &lt;span onclick="hander()"&gt;
    * &lt;span onclick="handler"&gt; 
    * element.onclick = handler; 
    * element.addEventListener("click", handler);
* _this_ in jQuery event callbacks
* _this_ in constructors
* _this_ in eval'ed code
* _this_ in Nested functions
* _this_ and Array.prototype.{forEach,map, filter, every, some}, jQuery.each
* Inheritance and _this_
* Inspecting _this_ in the current scope
* Creating a closure - self, thiz, that
* Explicitly setting the value of _this_
    * call, apply
    * bind
