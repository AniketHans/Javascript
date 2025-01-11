const obj = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
};

for (const key in obj) {
  console.log(key, obj[key]);
}
/**
 * js javascript
 * cpp c++
 * rb ruby
 */

// **************************
// in case of arrays, for in loop works on indexes
const arr = ["a", "b", "c", "d"];
for (const val in arr) {
  console.log(val);
}
/**
 * 0
 * 1
 * 2
 * 3
 */

const arr1 = ["a", "b", "c", "d"];
for (const val in arr1) {
  console.log(val, arr1[val]);
}
/**
 * 0 a
 * 1 b
 * 2 c
 * 3 d
 */
