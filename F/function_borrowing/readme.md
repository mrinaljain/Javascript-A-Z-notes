# Function Borrowing

Used to change the context of the current calling object.
Method borrowing refers to using `call()` or `apply()` to invoke a method from one object on another object.



## Uses of Function borrowing



## Call
`call()` is a method that allows a function to be called with a specified `this` value and arguments passed individually.

```
oldobject.methodName.call(newObject, params);
```

## Apply
`apply()` is similar to `call()`, but it takes arguments as an array or array-like object.
```
oldobject.methodName.calapplyl(newObject, [params]);
```

## Bind
`bind()` creates a new function that, when called, has its `this` set to the provided value, and allows preset arguments.
 ```
let bindedFunction = oldobject.methodName.bind(newObject, params);
```


### Questions

1. Can `call()` and `apply()` be used with arrow functions?
   NO

2. What happens if we use `call()`, `apply()`, or `bind()` with a non-object value for `this`?
   If `this` is set to a non-object value (e.g., `null` or `undefined`), it is converted to an object in non-strict mode, or remains `undefined` in strict mode.
   ```
      function show() {
      console.log(this);
   }
   show.call(null); // In non-strict mode, this refers to the global object
               
   ```

3. What happens if we pass extra arguments to `call()` or `apply()`?
   Ignored