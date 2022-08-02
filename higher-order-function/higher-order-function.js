/**
 * Understand Higher Order Function by passing function as arguments and return function from function.
 * https://www.freecodecamp.org/news/higher-order-functions-in-javascript/
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function filteredOdd(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
}

function filteredEven(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
}

console.log(filteredOdd(arr));
console.log(filteredEven(arr));

//Pass function as argument, in the above functions other than logic everything is repeating. We can seperate the logic into other function and pass that function as argument to higher order function

function filterFunction(arr, callback) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]) ? filteredArr.push(arr[i]) : null;
  }

  return filteredArr;
}

function isOdd(elem) {
  return elem % 2 !== 0;
}

function isEven(elem) {
  return elem % 2 === 0;
}

console.log(filterFunction(arr, isOdd));
console.log(filterFunction(arr, isEven));

//PolyFills
Array.prototype.filterFunction = function (callback) {
  const filteredArr = [];
  for (let i = 0; i < this.length; i++) {
    callback(this[i]) ? filteredArr.push(this[i]) : null;
  }

  return filteredArr;
};

console.log(arr.filterFunction(isEven));

console.log(arr.filterFunction((x) => x % 2 === 0));

//Funciton chaining
const temp = arr
  .filterFunction((x) => x > 5)
  .filterFunction((x) => x % 2 === 0);

console.log(temp);

//Return a function from another function

function calculate(operation) {
  switch (operation) {
    case "ADD":
      return function (a, b) {
        console.log(`${a} + ${b} = ${a + b}`);
      };
    case "SUBSTRACT":
      return function (a, b) {
        console.log(`${a} - ${b} = ${a - b}`);
      };
  }
}

// case 1
const add = calculate("ADD");
add(2, 3);

// case 2
calculate("SUBSTRACT")(10, 3);
