# Javascript

### const, let and var

1. Variables declared as `const` cannot be reassigned a new value. It means you cannot assign a new value to the const variable.
2. `let` vs `var`
   1. Variables declared with `var` have a scope through out the project. It means if a variable is declared with `var` in a file, say file1, of the project then it can be accessed in any file of the project, say files 2,3... Thus, scope of the variable is through out the project. `var` varaibles are **block scoped**
   2. Variables declared with `let` are properly scoped. They can be used only with the scope [`{}`] they are declared. The `let` variables are **functional scoped**.
3. We can also define a variable without using any var, let or const. But this way of declaring variable should not be used.
4. All the variables have default `undefined` value if not initialized or defined.

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
7.
