# Closure

## Defination
A function alongside its lexical - environment is known as the closure

Closure is formed when we return a function inside of another function so while the function is being returned it creates a closure (i.e it keeps all the variable of the lexical environment with itself) an its returned completly with closure.

A closure is a function that remembers its lexical scope even when the function is executed outside that scope. This allows inner functions to access variables from outer functions even after they have finished executing.

```
function x (b1){
   var c1 = 20;
   function y (d1){
     let a1 = 10;
     console.log(a1 + b1 + d1);
   }
   return y;
}

var closureFun  =  x(30);
closureFun(20);

```

- Closure Scope 

## Properties of closure
- in closure the variables are stored in closure stored via address

## Corner case in closures
- circular dependency
  A circular reference occurs when two or more objects reference each other, preventing them from being garbage collected.
- memory leak due to storages

## Usage og closures
- currying
- memoizing
- iterators 
- private variables
```
  function person(name, age) {
      let _name = name;
      let _age = age;
      return {
      getName: function() { return _name; },
      getAge: function() { return _age; }
      };
  }
  const individual = person('John', 30);
  console.log(individual.getName()); // John
  console.log(individual.getAge());  // 30
                
```
- maintaining state
- encapsulation

### Questions

1. Corner case in closures?
2. What is the practical use of closures?

   Closures are useful for data encapsulation, maintaining state, and creating private variables that are not accessible outside the closure.

3. What is a closure’s impact on memory?
   Closures can cause memory to be retained longer than expected because the inner function keeps a reference to its outer function's variables, preventing them from being garbage collected.

4. How does closure handle asynchronous code?
   Closures are often used with asynchronous code, where they preserve variables across async operations such as `setTimeout` or Promises.

5. What is the relationship between closures and higher-order functions?
   
   HOFs return functions at times which have closures
  
6. Can closures be used with event handlers?
   
   Yes, closures are often used in event handlers to remember and manage state related to the event, even after the event has been triggered.