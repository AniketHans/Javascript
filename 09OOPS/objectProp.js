// We have an object Math which has an property PI
console.log(Math.PI); // 3.141592653589793

// Can we change the values of PI?
// Ans: No, as the PI value is set to be non configurable in JS.
console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

/*
    {
        value: 3.141592653589793,
        writable: false,
        enumerable: false,
        configurable: false
    }
*/

// Our own object

const obj = {
  username: "AH",
  age: 25,
  gender: "Male",
};

console.log(Object.getOwnPropertyDescriptor(obj, "username")); // { value: 'AH', writable: true, enumerable: true, configurable: true }

// Defining the properties

Object.defineProperty(obj, "username", { writable: false, enumerable: false });
console.log(Object.getOwnPropertyDescriptor(obj, "username")); // { value: 'AH', writable: false, enumerable: false, configurable: true }

// After username' enumerate property is set to false, lets try to iterate over obj

for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
/*
    age 25
    gender Male
*/
// We get all the properties of obj except username as it's enumerate is set to false.
