// Since all the elemnts in JS are objects so if we define a property or method at the object level so all the elemnts
// will get access to it

Object.prototype.newProperty = function () {
  console.log("newProperty is present in all objects");
};

Array.prototype.newArrayProperty = function () {
  console.log("newArrayProperty is present here");
};

const arr = [1, 2, 3];
arr.newProperty(); // newProperty is present in all objects
arr.newArrayProperty(); // newArrayProperty is present here

const str = "haha";
str.newProperty(); // newProperty is present in all objects
// str.newArrayProperty(); // TypeError: str.newArrayProperty is not a function, since str is an object so array properties will not got to str.

const obj = { username: "HIHI" };
obj.newProperty(); // newProperty is present in all objects
// obj.newArrayProperty(); // TypeError: obj.newArrayProperty is not a function, child (array) can't be inherited by parent (object)

// ******************
let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();
