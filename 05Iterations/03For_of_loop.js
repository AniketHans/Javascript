// for of
const arr = [1, 2, 3, 4, 5];
for (const val of arr) {
  console.log(val);
}
/**
 * 1
 * 2
 * 3
 * 4
 * 5
 */

const s = "hello";
for (const val of s) {
  console.log(val);
}
/**
 * h
 * e
 * l
 * l
 * o
 */

// ********************************
//map
const m = new Map();
m.set("a", 1);
m.set("b", 2);

console.log(m);

for (const val of m) {
  console.log(val);
}
/**
 * [ 'a', 1 ]
 * [ 'b', 2 ]
 */

for (const [key, value] of m) {
  console.log(`${key}'s value is ${value}`);
}
/**
 * a's value is 1
 * b's value is 2
 */

// ****************************************

//destructuring
const arr1 = [
  [1, 2],
  [3, 4],
];

for (const [val1, val2] of arr1) {
  console.log(val1 + "   hihi   " + val2);
}
/**
 * 1   hihi   2
 * 3   hihi   4
 */

// ************* IMPORTANT ***************
const obj = {
  a: 10,
  b: 20,
};
for (const [key, value] of obj) {
  // ERROR: object is not iterable
  console.log(key, value);
}
// ***************************************
