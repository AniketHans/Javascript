const obj1 = {
  prop1: "value1",
};

const obj2 = {
  prop2: "value2",
};
const obj3 = {
  prop3: "value3",
};

// inherting proerties of obj3 in obj4, we can use proto property.
const obj4 = {
  prop4: "value4",
  __proto__: obj3,
};
console.log(obj4.prop4); // value4
console.log(obj4.prop3); // value3
console.log(obj4.prop2); // undefined, obj2 is not inherted in obj4

// inherting properties of obj1 in obj2.
obj2.__proto__ = obj1;
console.log(obj2.prop2); // value2
console.log(obj2.prop1); // value1

// Modern Syntax
const obj5 = {
  prop5: "value5",
};

const obj6 = {
  prop6: "value6",
};

const obj7 = {
  prop7: "value7",
};

Object.setPrototypeOf(obj6, obj5);
console.log(obj6.prop6); // value6
console.log(obj6.prop5); // value5

Object.setPrototypeOf(obj6, obj7);
console.log(obj6.prop6); // value6
console.log(obj6.prop7); // value7
