# Javascript

### const, let and var

1. Variables declared as `const` cannot be reassigned a new value. It means you cannot assign a new value to the const variable.
2. `let` vs `var`
   1. Variables declared with `var` have a scope through out the file. It means if a variable is declared with `var` in a file, will be available throughout the file. It means even if the variable is declared inside any loop, any conditional statement or any scope `{}`, its value can be accessed throughout the file. Even after its scope should be over. Variables defined using `var` have **Global Scope**
   2. Variables declared with `let` are properly scoped. They can be used only with the scope [`{}`] they are declared. They have **Block scope**.
3. We can also define a variable without using any var, let or const. But this way of declaring variable should not be used.
4. All the variables have default `undefined` value if not initialized or defined but declared.

### Scopes in js

1. There are 3 types of scopes in JS after the ES6 implementation:
   1. **Block Scope**
      1. Variables declared inside a `{ }` block cannot be accessed from outside the block.
      2. This is not applicable for variables declared using `var` inside a block.
   2. **Function Scope**
      1. Variables declared within a JavaScript function, are LOCAL to the function
      2. Local variables have Function Scope. They can only be accessed from within the function.
   3. **Global Scope**
      1. Global variables can be accessed from anywhere in a JavaScript program
      2. Variables declared with `var`, `let` and `const` are quite similar when declared outside a block.
2. Before ES6 implementation, JS only has Function and Global scope.

### use strict

1. In your js file, at the very top, if you write `"use strict"` it directs the interpreter to consider all the code inside JS file as newer version.
2. JS has multiple versions which newly added features so thats why the "use strict" if used to direct the interpretor to consider the code in the file as newer version.
3. Currently, mostly all the newly written code is by default considered as newer version.

### ECMA script

1. When JS was in initial days, then all the browsers have their own standards of writing the JS code.
2. ECMA scripts organization is created to standardize the JS syntax standards.

### null vs undefined

1. `undefined` is when you have declared a variable but didnot defined it. **typeof undefined => undefined**
2. `null` is a standalone value. It represents an empty value. This can be assigned to variables. It signifies that ideally a values should be there in the variable but due to some error/issue the variable's actual values can't be fetched so the value is `null`. **typeof null => object**

### Conversions

1. See the following conversions from any data type to `number`

   ```javascript
   let value = "33";
   // "33" => 33
   // "33abc" => NaN
   //  true => 1; false => 0
   //  undefined => NaN
   //  null => 0
   console.log(Number(value)); //33
   ```

2. See the following conversions from any data type to `boolean`

   ```javascript
   // 1,2,3.... => true; 0 => false
   // "" => false
   // "hitesh" => true
   ```

3. See the following conversions from any data type to `string`
   ```javascript
   // 33 => "33"
   // true => "true", false => "false"
   // undefined => "undefined"
   // null => "null"
   ```

### Comparisons

1. Check the following comparisons

   ```javascript
   console.log(null > 0); //false
   console.log(null == 0); //false
   console.log(null >= 0); //true
   ```

   - The comparison operators (>,<,<=..) work differently than equality operators (==,===). The comparison operators convert null to a number thus treating it as 0. Hence, `null >= 0` is true

2. For comparisons to happen expectedly, try to keep the data types of the values on both side same. Otherwise, the actual results may vary from the expected ones.

### `===` vs `==`

1. `===` performs a strict check on the values means it check for the equality of the values as well as their data types. Basically, this does not perform any conversion in the expression.
   1. `5===5` => `true`
   2. `"5"==5` => `false`
2. `==` performs a check on the values after the conversions in the expression.
   1. `5==5` => `true`
   2. `"5"==5` => `true`

### Data Types

1. In JS we have 2 types of data types broadly. This categorization is done on the basis of how data is stored in memory.
   1. Primitive
   2. Non Primitive
2. Primitive Types:
   - These are like call by value.
   - Whenever you retrive their values, the copy of the value is returned and changes are made into the copied values and finally the new value is reassigned to the variable. It can result in reassigning the memory address to the variable for the new value.
   - Types:
     1. String
     2. Number
     3. Boolean
     4. null (Empty)
     5. undefined
     6. Symbol
     7. BigInt (For large numberic values)
3. Non Primitive (Reference Types)
   - These are also referred to as Reference Types
   - Whenever you try to assess the values, then the reference of the values is returned and the changes made in the values are made in the actual values.
   - Non primitive data types generally have type as object.
   - Types
     1. Arrays // object
     2. Objects // object
     3. Functions // function object

### Stack and Heap memories

1. Primitive types use **stack** memory and Non-primitive types use **heap** memory.
2. Stack memory returns the copy of the values assigned to a variable. Heap memory returns the reference of the original value.

### String Interpolation in JS

1. We can use `` to inject variables in strings. This is mostly used in modern days to concatinate different variables as string.
2. Example
   ```javascript
   const name = "AH";
   console.log(`Hello!! ${name}`); // Hello!! AH
   ```

### String

1. You can define string in the following ways:
   1. `const s1 = "Hello"`
   2. `const s2 = new String("Hello")`

### Math.random

1. For getting the random values between min and max, follow the following formula
   `Math.floor(Math.random() * (max - min + 1)) + min`

### Arrays

1. Arrays can contain multiple types of elements in it at the same time.
   1. For example: `const arr = [1,2,true,"AH"]`
2. Javascript arrays are resizable.
3. JS array copy operations creates **shallow copies**.

   1. It means in the following code, both arr1 and arr2 are pointing to the same array reference.

   ```javascript
   const arr1 = [1, 2, 3, 4];
   const arr2 = arr1; //Shallow copy. Both arr1 and arr2 are pointing to the same array reference
   arr2[2] = 5;
   console.log(arr1[2]); // 5
   ```

4. Spread operator (...) is used to spread all the elements of an array.
   ```javascript
   const arr1 = [1, 2, 3];
   console.log(...arr1); // 1 2 3
   ```

### Objects

1. We can declare objects in 2 ways:
   1. Literals ( `const obj = {}` )
   2. Constructors ( `const obj = Object.create()` or `const obj = new Object()` )
2. Singleton object is created in case when created using constructors while literals donot create any singleton object.
3. Objects are made up of key value pairs. All the keys are by default considered as string type.
4. We can access values in objects in 2 ways:
   1. `obj.<keyname>`
   2. `obj["<keyname>"]`
5. We can freeze any object so nobody can change it. If anybody tries to change it, the changes will not be propogated to the object.
   1. `Object.freeze(<object>)`
6. We can add any function as value to a key in objects. If you want to access any key inside the function inside an object, you need to use `this`.
   1. Note: If you want to use `this` in a function inside an object, make sure the function is not an arrow function because **arrow functions dont have the access to `this`**
7. We can destruture keys and values from an object

   ```javascript
   const obj = {
     name: "AH",
     age: 25,
     isLoggedIn: true,
     sessions: ["session1", "session2"],
   };

   const { name, age, sessions: sessionIds } = obj;
   console.log(name); // AH
   console.log(age); // 25
   console.log(sessionIds); // [ 'session1', 'session2' ]
   ```

### Functions

1. Function Parameters are defined at the time of function definition.
2. Function Arguments are values that are passed to the function at the time of calling.
3. ```javascript
   function greet(name, age = 25) {
     console.log(`Hello! Mr.${name} of age ${age}`);
   }
   greet("AH", 26); // Hello! Mr.AH of age 26
   greet(); // Hello! Mr.undefined of age 25
   //Default values is taken in the above case when no argument is passed
   ```
4. We have multiple methods of declaring and defining functions

   1. Normal function declaration

      ```javascript
      function func1() {
        // functionality
      }
      ```

   2. Expression function declaration

      ```javascript
      const func1 = function () {
        // functionality
      };
      ```

   3. Arrow function declaration

      ```javascript
      const func1 = () => {
        // functionality
      };
      ```

### this

1. `this` refers to the context (variables and their values) of the scope where it is being currently used.
   ```javascript
   const userdata = {
     username: "AH",
     age: 29,
     greet: function () {
       console.log(`Hello!! ${this.username}`); // Here we can access any key inside the object using this keyword.
     },
   };
   // In the above case, the current context for this is the keys inside the scope of the object userdata.
   ```
2. In node env, the `this` will refer to empty object/context.
   ```javascript
   console.log(this); // {}
   ```
3. In browser, the `this` will refer to window object. In browser, we have window object as the Global object. This window object helps in capturing the all the events occuring on window.
   ```javascript
   // In browser console
   console.log(this); // Window {window: Window,...}
   ```
4. Arrow functions dont have access to this, thus they dont have access to current context.

   ```javascript
   const obj = {
     key1: "value1",
     key2: "value2",

     func1: function () {
       console.log(this); // {key1: 'value1', key2: 'value2', func1: [Function: func1], func2: [Function: func2]}
       console.log(this.key1); // value1
       console.log(this.key2); // value2
     },
     func2: () => {
       //arrow function
       //Arrow functions dont have access to this, thus they cant access the current context.
       console.log(this); // {}
       console.log(this.key1); // undefined
       console.log(this.key2); // undefined
     },
   };

   obj.func1();
   obj.func2();
   ```

### Arrow functions Syntax

1. Normal with return

   ```javascript
   const func = (value1, value2) => {
     return value1 + value2;
   };
   ```

2. Implicit return, this is written in one line and the expression is returned by default

   ```javascript
   const func = (value1, value2) => value1 + value2;
   ```

### IIFE (Immediately Invoked Function Expression)

1. This is used to immediately invoke function call after the definition
2. Syntax:

   ```javascript
   (function one() {
     console.log("DB Connected");
   })(); //Here we are immediately invoking the function after the definition.
   ```

3. Note: The semicolon(;) at the end of IIFE is must as the IIFE itself don't know where to end the context. Thus if you omit the `;` and if you try to invoke another IIFE then it will start throwing error.
4. Usecase:
   1. Sometimes the global scope has a lot of pollution in it, so to avoid the global scope pollution, we ran the IIFE

### Javascript code execution and call stack

1. Javascript Execution Context
   1. The way in which Javascript executes your code.  
      ![Javascript Execution Context](./resources/images/JS%20execution%20context.png)
2. Whenever our code is submitted to JS, a Global Execution Context is formed. This global execution context is refered by `this` variable. The Global Execution context is based on the environment in which the code is executed. It will different for Browser env, Nodejs env etc. In browser, the Global EC or `this` points to the `window` object.
3. Note: Javascript is a single threaded language.
4. There are 2 types of execution contexts
   1. Global Execution Context
   2. Function Execution Context
   3. Eval Execution Context
5. Javascript code execution

   1. The code execution takes place in 2 phases:
      1. Memory Creation phase (The memory for all the variables, functions etc is allocated in this phase)
      2. Execution Phase
   2. Consider the following code:

      ```javascript
      let val1 = 10
      let val2 = 5
      function addNum( value1, value2 ){
      let total = value1 + value 2
      return total
      }

      let result1 = addNum( val1, val2 )
      let result2 = addNum( 10, 2)
      ```

      1. For the above code execution, first Global EC (aka Global Environment) is allocated to `this`.
      2. Then we have the Memory Creation Phase. Here the variables are allocated memory without putting the actual values in them. For example, the memory space for val1 and val2 will be allocated with undefined as the value in them. The functions are also assigned memory address with their definition in them.  
         ![Memory Creation Phase](./resources/images/Memory%20creation%20phase.png)
      3. Then, we have the Execution phase:  
         ![Execution Phase](./resources/images/Execution%20Phase.png)
         1. Here, first the variables will be assigned the actual values to them.
         2. Then, it dont have to do anything with the function definition of addNum()
         3. Then, we have the variable result1, whose value is derived from addNum(val1,val2) call. Thus, this function call will have its own execution context. This new execution context will have its own variable env and execution thread. It means the new execution context will have its own memory creation phase and execution phase. After the computation happened in the execution context for total ( val1 + val2 ), the total value is returned to the Global EC.
         4. Same thing will happen for result2.

6. Call Stacks
   1. It is the stack maintained for function calls.
   2. Once the code comes for execution at first, the Global Execution context is pushed to the call stack.  
      ![](./resources/images/Call%20stack%201.png)
   3. Then, if we have function call in the code, then the function reference is pushed to the stack. Say func1() comes for the execution.  
      ![](./resources/images/Call%20stack%202.png)
   4. Once the execution of the function at the stack top is completed, it is popped from the stack  
      ![](./resources/images/Call%20stack%203.png)
   5. Same thing happens when we have nested function. The functions are pushed to the call stack based on the order they are called and are popped out of call stack in LIFO (Last In First Out Manner).

### Falsy values

1. Falsy values are values that are considered `false` if put in a condition
2. We have the following falsy values in JS:
   1. false
   2. 0
   3. -0
   4. 0n (BigInt)
   5. ""
   6. null
   7. undefined
   8. NaN
3. All the other values except the above values are considered truthy values.
4. Even `[]` and `{}` and Empty function (`function(){}`) are considered truthy values

   ```javascript
   const arr = [];
   if (arr) {
     console.log("Inside if");
   }
   // Output --> Inside if, as [] is a truthy value even though the array is empty.
   ```

5. For an array, we need to check by its length if its empty or not, `arr.length === 0`.
6. For objects, we can check by its keys length, `Object.keys(<object name>).length === 0`

### Nullish Coalescing Operator (??)

1. This only works with `undefined` and `null`.
2. This operator does a safety check for `undefined` and `null` before assigning value to the variable.
3. Code example 1:
   ```javascript
   let val1;
   val1 = 5 ?? 10; // val1 <-- 5, as value to the left of ?? operator is not amoung undefined and null.
   ```
4. Code example 2:
   ```javascript
   let val1;
   val1 = null ?? 10; // val1 <-- 10
   ```
5. Code example 3:
   ```javascript
   let val1;
   val1 = undefined ?? 20; // val1 <-- 20
   ```
6. Code example 3:
   ```javascript
   let val1;
   val1 = undefined ?? 20 ?? 40; // val1 <-- 20
   ```

### Ternary Operator

1. Syntax: `condition ? <code if condition is true> : <code if condition is false>`
