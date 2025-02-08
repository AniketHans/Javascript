class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return this._password.toUpperCase();
  }

  set password(value) {
    this._password = `prefix${value}suffix`;
  }
}

const user1 = new User("a@b.com", "abc");
console.log(user1.password);

// ************

class Arr {
  constructor(array) {
    this.array = array;
    this.len = array;
  }
  get len() {
    return this._len;
  }

  set len(value) {
    let c = 0;
    for (let i of value) {
      c++;
    }
    this._len = c;
  }
}

const arr = new Arr([1, 2, 3]);
console.log(arr.len); // 3

// Scoping fun
function a() {
  const aa = "aa";
  function b() {
    const aa = "bb";
    console.log(aa);
  }
  b(); // bb
  console.log(aa);
}
a(); // aa
