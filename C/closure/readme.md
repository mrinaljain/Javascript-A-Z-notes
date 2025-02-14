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
-

## Usage og closures
- currying
- memoizing
- iterators 

### Questions

1. Corner case in closures?