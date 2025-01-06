/**
 * Variables declared using var are accessible in the whole file even if they are declared in control or conditional statements
 */
let a = 10;
const b = 20;
var c = 30;

function test1() {
  // Below both variables are not accesible outside the function due to the Function scope.
  var d = 40;
  var j = 100;
}

if (true) {
  var e = 50;
  let f = 60;
  const g = 70;
}

for (let val = 0; val < 5; val++) {
  var h = 80 + val * 10;
  let i = 90 + val * 10;
}

console.log(a);
console.log(b);
console.log(c);
// console.log(d); // Not accessible, var declared variable not accessible outside function which is good.
console.log(e); // Accessible outside the conditional statement (if) scope which is bad.
// console.log(f); // Not accessible
// console.log(g); // Not accessible
console.log(h); // 120, Accessible outside the control statement (for) scope which is bad.
// console.log(i); // Not accessible

// *************************************
// Scope with example.
let val1 = 10;
let val2 = 20;
if (true) {
  let val1 = 100; // redefined val1, this will be present in the if scope only
  console.log("Inner:", val1); // Inner: 100
  console.log("Inner2:", val2); // Inner2: 20, the val2 is not redeclared so it will be taken from the global scope
}
console.log("Outer:", val1); // Outer: 10
console.log("Outer2:", val2); // Outer2: 20
