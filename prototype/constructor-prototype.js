/**
 * To create a prototype with a constructor function, the properties have to be defined on the function's object and then the function has to be called with the new keyword.
 */
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  console.log(this.name + " eats");
  // console.log('sfsd');
};

function Dog(name) {
  Animal.call(this, name);
}

//Before ES5
function inherit(proto) {
  function ChainLink() {}
  ChainLink.prototype = proto;
  return new ChainLink();
}
// Dog.prototype = inherit(Animal.prototype);

Dog.prototype = Object.create(Animal.prototype); // ES5 syntax

Dog.prototype.bark = function () {
  console.log(this.name + " barks");
};

const henry = new Dog("Henry");

henry.bark();
henry.eat();

console.log(Object.getPrototypeOf(henry) === Dog.prototype);

console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype);
