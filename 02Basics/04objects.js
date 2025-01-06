// object created using construtor. This will be a singleton object
const obj = new Object();

const userdata = {
  email: "ah@ah.com",
  name: {
    fullName: { firstName: "Aniket", lastName: "Hans" },
    initials: "AH",
  },
};

console.log(userdata.name.fullName.firstName); // Aniket

//combining objects
/**
 * Note if 2 or more combining objects have the same keys then the object which is combined last, and have the common key,
 * that objects key value pair will be retained.
 * As shown in below example, the obj2 is combined at the last, so the key value pair (3:"c") will be retained even if the same
 * key is present in obj1.
 */
const obj1 = { 1: "a", 2: "b", 3: "f" };
const obj2 = { 3: "c", 4: "d" };
// ********** using spread operator **********
const obj3 = { ...obj1, ...obj2 }; // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj4 = { ...obj2, ...obj1 }; // { '1': 'a', '2': 'b', '3': 'f', '4': 'd' }
// **********************

// ********** using object.assign **********
// Object.assign(target,source1,source2,...)
const obj5 = Object.assign({}, obj1, obj2);
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// getting the keys and values of the objects
console.log(Object.keys(obj5)); // [ '1', '2', '3', '4' ]
console.log(Object.values(obj5)); // [ 'a', 'b', 'c', 'd' ]
console.log(Object.entries(obj5)); // [ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ], [ '4', 'd' ] ]
