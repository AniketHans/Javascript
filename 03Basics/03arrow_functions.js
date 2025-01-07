// this
const userdata = {
  username: "AH",
  age: 29,
  greet: function () {
    console.log(`Hello!! ${this.username}`);
    console.log(this);
  },
};
userdata.greet();
// Hello!! AH
// { username: 'AH', age: 29, greet: [Function: greet] }
userdata.username = "DG";
userdata.greet();
// Hello!! DG
// { username: 'DG', age: 29, greet: [Function: greet] }

// *********************************************

// Global context
console.log(this); // {}

// **********************************************
function one() {
  console.log(this); // We can get some data while accessing this in functions except the arrow function.
}
one();
/** Above Output
 * <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
}
 */

// Here below if we try to access username value using this, it will result in undefined.
// Thus, we can see, the this.<variable> is working only in objects but not in functions.
function two() {
  const username = "AH";
  console.log(this.username); // undefined
}
two();

const three = function () {
  const username = "AH";
  console.log(this.username); // undefined
};
three();

// ****************************************************

//Arrow functions
const four = () => {
  const username = "AH";
  console.log(this); // {}, we get empty {} while accessing this in arrow function, thus arrow function dont have access to this.
  console.log(this.username); // undefined
};
four();

const obj = {
  key1: "value1",
  key2: "value2",

  func1: function () {
    console.log(this); // {key1: 'value1', key2: 'value2', func1: [Function: func1], func2: [Function: func2]}
    console.log(this.key1); // value1
    console.log(this.key2); // value2
  },
  func2: () => {
    //arrow function
    //Arrow functions dont have access to this, thus they cant access the current context.
    console.log(this); // {}
    console.log(this.key1); // undefined
    console.log(this.key2); // undefined
  },
};

obj.func1();
obj.func2();

// Syntax of arrow functions

// With explicit return, functionality wrapped in {}
const func1 = (value1, value2) => {
  return value1 + value2;
};
console.log(func1(5, 10)); // 15

// With implicit return, functionality wrapped in () or nothing
const func2 = (value1, value2) => value1 + value2;
console.log(func2(6, 12)); // 18

// We can also return an object using implicit return
const func3 = () => ({ username: "Ah" });
console.log(func3()); // { username: 'Ah' }
