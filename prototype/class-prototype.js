/**
 *
 */
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(this.name + " eats");
  }
}

class Dog extends Animal {
  //Dog.prototype = Object.create(Animal.prototype)
  constructor(name) {
    super(name + " the dog"); // Animal.call(this, name);
  }

  bark() {
    console.log(this.name + " barks");
  }
}

const henry = new Dog("Henry");

henry.bark();
henry.eat();

console.log(Object.getPrototypeOf(henry) === Dog.prototype);

console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype);
