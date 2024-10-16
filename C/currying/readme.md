# Currying

### Defination
 Currying refers to the process of transforming a function with multiple arguments into the same function with less arguments. The curried effect is achieved by binding some of the arguments to the first function invoke, so that those values are fixed for the next invocation.

### Defination
Currying bassicaly means to convert a function which takes multiple arguments into a seriese of functions which takes single arguments untill we reach the solution

`function add(x) {
   return function (y) {
    return x + y;
  };
}`