var person = {
    sayName: function() {
        console.log(this.firstName); // ?
    },
    firstName: "John"
};

var func = person.sayName;
