function User(username, age, email) {
  this.username = username;
  this.age = age;
  this.email = email;
  this.greetings = function () {
    console.log(`Hello!! ${this.username}`);
  };
  return this;
}

const userOne = new User("AH", 25, "a@b.com");
console.log(userOne); // User { username: 'AH', age: 25, email: 'a@b.com', greetings: [Function (anonymous)] }
console.log(userOne.constructor); // [Function: User]
console.log(this); // {}

// issue with above code if dont use new keyword
const userTwo = User("AH2", 26, "a2@b.com");
// console.log(userTwo); // {..., username: 'AH2', age: 26, email: 'a2@b.com' }
const userThree = User("AH3", 27, "a3@b.com");
// console.log(userTwo); // userTwo value got altered, {..., username: 'AH3', age: 27, email: 'a3@b.com' }
//Thus if we skipped using new, then the original object will get altered and thus it will mess up the values.
