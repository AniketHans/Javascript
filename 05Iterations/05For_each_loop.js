const coding = ["js", "py", "java", "rb"];
// Arrow function callback
coding.forEach((lang, index) => {
  console.log(`The coding language at index ${index} is ${lang}`);
});
/**
 * The coding language at index 0 is js
 * The coding language at index 1 is py
 * The coding language at index 2 is java
 * The coding language at index 3 is rb
 */

// Function callback
coding.forEach(function (lang, index, arr1) {
  console.log(arr1);
  console.log(`The coding language at index ${index} is ${lang}`);
});
/**
 * [ 'js', 'py', 'java', 'rb' ]
 * The coding language at index 0 is js
 * [ 'js', 'py', 'java', 'rb' ]
 * The coding language at index 1 is py
 * [ 'js', 'py', 'java', 'rb' ]
 * The coding language at index 2 is java
 * [ 'js', 'py', 'java', 'rb' ]
 * The coding language at index 3 is rb
 */

// Function reference as callback
function Printme(val) {
  console.log(val);
}
coding.forEach(Printme);
/**
 * js
 * py
 * java
 * rb
 */

// ********************

const arr2 = [
  {
    language: "Javascript",
    fileExt: ".js",
  },
  {
    language: "Python",
    fileExt: ".py",
  },
  {
    language: "Java",
    fileExt: ".java",
  },
];

arr2.forEach((obj) => {
  console.log(obj.language);
});

/**
 * Javascript
 * Python
 * Java
 */
