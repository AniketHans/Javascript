// spread operator
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7];

const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1,2,3,4,5,6,7]

// flatning of an array
const arr4 = [1, 2, 3, [4, 5, 6], 7, 8, [10, 11, [12, 13]]];
const flattenArr4 = arr4.flat(Infinity);
console.log(flattenArr4); // [1,  2, 3,  4,  5, 6,  7, 8, 10, 11, 12, 13]

// converting to array
console.log(Array.isArray("Aniket Hans")); // false
console.log(Array.isArray("[1,2,3,4]")); // false
console.log(Array.isArray([10, 20, 30])); // true
console.log(Array.from("Aniket Hans")); // ['A', 'n', 'i', 'k', 'e', 't', ' ', 'H', 'a', 'n', 's']
console.log(Array.from({ name: "Aniket Hans" })); // [], it returns an empty array as it is not able to convert object to array

const s1 = 100;
const s2 = 200;
const s3 = 300;
console.log(Array.of(s1, s2, s3)); // [ 100, 200, 300 ]
