// Creating Promises
// Promise is an object in JS.
// Syntax:
/**
 * Promise(<callback>)
 *
 */
const promise1 = new Promise(function (resolve, reject) {
  // Do an async task like DB calls, cryptography related tasks.
  setTimeout(function () {
    console.log("Async task is completed.");
    resolve(); // If you remove this resolve() then then() will never know that the promise is resolved.
  }, 1000);
});

promise1.then(function () {
  console.log("Promise Completed");
});

// Accessing values from resolve to then
const promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 completed");
    resolve({ username: "AH", age: 25 }); // we can use any type of value in resolve. Here we are passing object.
  }, 1000);
});

promise2.then(function (user) {
  console.log("Promise2 resolved");
  console.log(user);
});
//output
/*
    Async task 2 completed
    Promise2 resolved
    { username: 'AH', age: 25 }
*/

// reject
const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let err = true;
    if (!err) {
      resolve("The err is false");
    } else {
      reject("The err is true");
    }
  }, 1000);
});

promise3
  .then(function (text) {
    console.log("Inside then");
    console.log(text);
  })
  .catch(function (text) {
    console.log("Inside catch");
    console.log(text);
  });

//output
/*
 * Inside catch
 * The err is true
 */

// chaining (callback hell)
const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let err = false;
    if (!err) {
      resolve({ name: "AH", age: 25 });
    } else {
      reject("ERROR: Code error");
    }
  }, 1000);
});

promise4
  .then(function (obj) {
    console.log("Inside then1");
    console.log(obj);
    return obj.name;
  })
  .then(function (name) {
    console.log("Inside then2");
    console.log("The name is " + name);
  })
  .catch(function (err) {
    console.log("Inside catch");
    console.log(err);
  })
  .finally(function () {
    console.log("Ran finally");
  });

// output
/**
 * Inside then1
 * { name: 'AH', age: 25 }
 * Inside then2
 * The name is AH
 * Ran finally
 */

// We can also use async await to handle the requests
const promise5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let err = false;
    if (!err) {
      resolve({ name: "Aniket", age: 25 });
    } else {
      reject("ERROR: Code error");
    }
  }, 1000);
});

async function handlePromise5() {
  try {
    const obj = await promise5;
    console.log(obj);
  } catch (err) {
    console.log(err);
  }
}

handlePromise5(); //{ name: 'Aniket', age: 25 }

// api call

//with async await
async function callGithubApi() {
  try {
    const response = await fetch("https://api.github.com/users/AniketHans");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
callGithubApi();

//with then() catch()
fetch("https://api.github.com/users/AniketHans")
  .then(function (response) {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.err(err);
  });
