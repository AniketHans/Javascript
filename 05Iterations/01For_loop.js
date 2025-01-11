// In JS, we dont have index out of range errors
const arr = [1, 2, 3];

/**
 * The output of the below code is:
 * 1
 * 2
 * 3
 * undefined
 *
 * Even though array has the length 3 and highest index is 2 but if we try of access arr[3] it gives undefined.
 */

for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i]);
}
