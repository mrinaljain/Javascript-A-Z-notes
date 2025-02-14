# Functions
A function in JavaScript is a block of code designed to perform a specific task.

Functions take arguments  while calling
Function are defined with parameters

Defination 
: Types of functions in Javascript
- function decleration
- function expression
- ananomous function
- function statement
- first class functions
- named function expression
- Higher order functions
- pure functions
- Impure functions
- Arrow functions
- callback functions




- Default parameter in function 
```
function dummy(name = "Default Name") {
  console.log(`Hello ${name}`);
}
```


### **Difference Between Normal Functions and Arrow Functions**:  

1. **Syntax**: Arrow functions have a shorter syntax compared to normal functions.  
2. **`this` Binding**: Normal functions have their own `this` context, while arrow functions do not. Arrow functions inherit `this` from the enclosing scope.  
3. **`arguments` Object**: Normal functions have access to the `arguments` object, while arrow functions do not.  
4. **Usage**: Arrow functions are commonly used for callbacks or concise one-liners, while normal functions are used when `this` context or a named function is needed.

## Questions
1. Diffrence between functions and methods?
2. What are Default Parameters and the Difference Between Normal Functions and Arrow Functions?