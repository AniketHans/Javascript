const arr1 = [1, 2, 3, true, "AH"];
const arr2 = new Array(4, 5, 6);

//Array methods
arr1.push("7"); // [ 1, 2, 3, true, 'AH', '7' ]

arr1.pop(); // It removes and returns the last value from the array

const arrString = arr1.join(); // 1,2,3,true,AH  This is a string

// slice methods returns a copy of array with elements in index range [start,end). The end index is not included here.
// Note: slice does not make any change in the original array
const newSlicedArray = arr1.slice(0, 3); // [ 1, 2, 3 ]

// splice: returns the array with elements in index range [start,end]. The end index is included here.
// Note: splice will remove the returned elements from the original array
const arr3 = [10, 20, 30, 40, 50, 60, 70];
const newSplicedArray = arr3.splice(2, 4);
console.log(newSplicedArray); // [ 30, 40, 50, 60 ]
console.log(arr3); // [ 10, 20, 70 ]
