const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ******************************************************

//filter
/**
 * filter is used to filter out values based on some condition
 */
const values1 = nums.filter((val) => {
  return val > 4;
});
console.log(values1); // [ 5, 6, 7, 8, 9, 10 ]

const values2 = nums.filter((val) => val % 2);
console.log(values2); // [ 1, 3, 5, 7, 9 ]

const values3 = nums.filter((val) => !(val % 2));
console.log(values3); // [ 2, 4, 6, 8, 10 ]

const values4 = nums.filter((val) => {
  return val >= 3 && val < 8;
});
console.log(values4); // [ 3, 4, 5, 6, 7 ]

// *****************************************************
