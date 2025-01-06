// Getting multiple values as arguments usinf Rest operator(...)
// Note: same operator (...) can be called Rest operator or Spread Operator based on the usecase.

function calculateCartPrice(...itemPrice) {
  return itemPrice;
}

console.log(calculateCartPrice(100, 800, 900)); // [ 100, 800, 900 ]

function calculateCartPrice2(val1, val2, ...itemPrice) {
  console.log(val1); // 100
  console.log(val2); // 800
  return itemPrice;
}

console.log(calculateCartPrice2(100, 800, 900, 500)); // [ 900, 500 ]
// *****************************************************************************************

// Handling objects
const user = {
  username: "ah",
  age: 25,
};
function handleObject(obj) {
  console.log(`Username is ${obj.username} and age is ${obj.age}`); // Username is ah and age is 25
}
handleObject(user);

function handleObject2({ username, age }) {
  console.log(`Username is ${username} and age is ${age}`); // Username is ah and age is 25
}
handleObject2(user);
