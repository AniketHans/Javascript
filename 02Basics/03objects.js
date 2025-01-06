const obj = {
  user: "Aniket Hans",
  "full name": "Aniket Hans is best",
  age: 25,
  isLoggedIn: true,
};
console.log(obj.user); // Aniket Hans
console.log(obj["user"]); // Aniket Hans

//use symbol as object key
const sym1 = Symbol("key1");
const obj1 = {
  name: "A",
  [sym1]: "key is 1",
};

console.log(obj1[sym1]); // key is 1

//overwritting the values
obj.age = 24;

// Freezing the object so nobody can change it.
// Object.freeze(obj);

//adding function to the object
obj.greetings = function () {
  console.log(`Hello!!! ${this["full name"]}`);
};
obj.greetings(); // Hello!!! Aniket Hans is best

obj.greetings2 = () => {
  //arrow functions dont have the access to this
  console.log(`Hello!!! ${this["full name"]}`);
};
obj.greetings2();
