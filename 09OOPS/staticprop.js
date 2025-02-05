// static keyword can be used to prevent some properties or methods of a class to be accessed by the objects of the class
// only class can be used to access the static properties/methods
class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const hitesh = new User("hitesh");
// console.log(hitesh.createId()) // Error

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");
// console.log(iphone.createId()); // Error

console.log(User.createId()); // 123, only class can be used to access the static properties/methods
console.log(Teacher.createId()); // 123
