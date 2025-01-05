//Primitive
const number = 100; // number
const float = 100.5; //number
const str = "Hello"; //string
const bool = true; // boolean
const id = Symbol("123"); // symbol
const anotherId = Symbol("123");
console.log(id === anotherId); // false
const bigNumber = 3278432543347382473274n; // bigint
const nullObject = null; //object
const undefinedVar = undefined; // undefined

//Non Primitive
const array = [1, 2, 3]; //object
const obj = {
  // object
  name: "Spider Man",
  age: 21,
};

const funci = function () {
  console.log("Hi");
}; // function;

console.table([
  typeof number,
  typeof float,
  typeof bool,
  typeof str,
  typeof id,
  typeof bigNumber,
  typeof nullObject,
  typeof undefinedVar,
  typeof array,
  typeof obj,
  typeof funci,
]);
