# Hoisting

Hoisting is a phenomena in javascript where variable decleraed in are available to be used even before initlising with a value.

```
console.log(a); // undefined
var a = 10;

```

## Temporal Dead Zone
```
console.log(a); // Referrence error as a is hoisted but in TDZ
let a = 10;
```

## Hoisting for Functions
Functions are hoisted , but there is difrence in function defination and function expression hoisting.


## Hoisting for Class Deceleration
Class declarations are hoisted in JavaScript, but they are not initialized until the code execution reaches the class declaration. This means trying to access a class before its declaration results in a ReferenceError, similar to `let` and `const` variables due to the Temporal Dead Zone.


### Questions

1. Diffrence between undefined and not-defined.
2. What is the difference between Hoisting of Variables and Functions?
3. **What is Temporal Dead Zone (TDZ)?**
   The Temporal Dead Zone (TDZ) is the period of time between the entering of the scope and the actual declaration of a variable when trying to access the variable. It occurs with variables declared using `let` and `const` and prevents access to the variable until it is initialized.

4. How does Hoisting work with `var`?
   When using `var`, the declaration of the variable is hoisted to the top of its scope, but its initialization remains at the place where it is written. As a result, accessing the variable before initialization gives `undefined`.

5. How does Hoisting work with `let` and `const`?
   With `let` and `const`, the variable is hoisted, but they are in a Temporal Dead Zone (TDZ) from the start of the block until the line where they are defined. Accessing them before their declaration results in a ReferenceError.

6. Can I hoist a function expression?
   NO

7.