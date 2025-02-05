function multipleBy5(num) {
  return num * 5;
}
multipleBy5.power = 5; // Functions are objects. We can assign key value pairs to it like we do in case of objects.
console.log(multipleBy5(10));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

// output
/**
 * 50
 * 5
 * {}
 */

//Injecting properties/methods in prototype
function createUser(username, score) {
  this.username = username;
  this.score = score;
}
createUser.prototype.incrementScore = function () {
  this.score++;
};

const user1 = createUser("Haha", 20);
const user2 = createUser("Hihi", 90);
// user1.incrementScore(); // TypeError: Cannot read properties of undefined (reading 'incrementScore')
// console.log(user1);

//We have added new properties in createUser's prototype, to use them in the created objects, we need to use new keyword.
const user3 = new createUser("Haha", 20);
user3.incrementScore();
console.log(user3); // createUser { username: 'Haha', score: 21 }
