class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}abc`;
  }
}

const user1 = new User("user1", "a@b.com", "123");
console.log(user1); // User { username: 'user1', email: 'a@b.com', password: '123' }
console.log(user1.encryptPassword()); // 123abc

// behind the scenes

function User2(username, email, password) {
  this.username = username;
  this.password = password;
  this.email = email;
  this.encryptPassword = function () {
    return `${this.password}abc`;
  };
  return this;
}

User2.prototype.greet = function () {
  return "Greetings!!";
};

const user2 = new User2("user2", "c@d.com", "123");
console.log(user2); // User2 {username: 'user2',password:'123',email:'c@d.com',encryptPassword: [Function (anonymous)]}
console.log(user2.encryptPassword()); // 123abc
console.log(user2.greet()); // Greetings!!
