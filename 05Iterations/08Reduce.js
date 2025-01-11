const nums = [1, 2, 3, 4, 5];

//reduce
/**
 * It uses accumulator which can be used to give sum of all the elements etc
 */

const initVal = 0;
const sum1 = nums.reduce(function (acc, curr) {
  console.log(`--->, ${acc}, ${curr}`);
  return acc + curr;
}, initVal);
console.log(sum1);
/**
 * --->, 0, 1
 * --->, 1, 2
 * --->, 3, 3
 * --->, 6, 4
 * --->, 10, 5
 * 15
 */

const sum2 = nums.reduce((acc, curr) => acc + curr + 10, initVal);
console.log(sum2); // 65

// ********************************

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay); //22996
