function setUsername(username) {
  console.log("called");
  this.username = username;
}

function createUser(username, email, password) {
  //   setUsername(username); // Here the setUsername method is not getting called, we need to use call() to call the method
  setUsername.call(this, username); // this is the createUser's this
  this.email = email;
  this.password = password;
}

const user1 = new createUser("user1", "a@b.com", "123");
console.log(user1); // createUser { username: 'user1', email: 'a@b.com', password: '123' }
