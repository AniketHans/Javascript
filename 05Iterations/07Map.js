const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map
/**
 * map() is used to perform some operation on the values and then return them (modified)
 */

const values1 = nums.map((val) => val * 2);
console.log(values1); // [ 2,  4,  6,  8, 10, 12, 14, 16, 18, 20 ]

const values2 = nums.map((val) => {
  return val ** 2;
});
console.log(values2); // [ 1,  4,  9, 16,  25, 36, 49, 64, 81, 100 ]

//chaining
const newNums = nums.map((val) => val * 3).filter((val) => val > 20);
console.log(newNums); // [ 21, 24, 27, 30 ]

const newNums2 = nums.map((val) => val * 3).map((val) => val + 10);
console.log(newNums2); // [ 13, 16, 19, 22, 25, 28, 31, 34, 37, 40 ]
