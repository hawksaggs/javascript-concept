/**
 * First create object with properties and methods
 * The functional approach to creating prototype chains is to use Object.create
 */
const animal = {
  eat: function () {
    console.log(this.name + " eats");
  },
};

const dog = Object.create(animal, {
  bark: {
    value: function () {
      console.log(this.name + " woofs");
    },
  },
});

const henry = Object.create(dog, {
  name: { value: "Henry" },
});

henry.bark();
henry.eat();
