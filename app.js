var person = {
    firstname: '',
    lastname: '',
    greet: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = Object.create(person); // this object.create method is part of the Node engine.

john.firstname = 'John';
john.lastname = 'Dough';

jane.firstname = 'Jane';
jane.lastname = 'Dough';
// Use object prototypes to create multiple similar objects on the fly.

console.log(john.greet);
console.log(jane.greet);