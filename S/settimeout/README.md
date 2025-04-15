
The setTimeout() method of the Window interface sets a timer which executes a function or specified piece of code once the timer expires.

```
setTimeout(functionRef)
setTimeout(functionRef, delay)
setTimeout(functionRef, delay, param1)
```

## this problem

When you pass a method to setTimeout(), it will be invoked with a this value that may differ from your expectation.
- settimeout k paas callback passhota hai
- settimeout ka this jo hai vo global ko point kr rah hota hai 
- isliye current calling object ka lafda hota hai

solution can be using .bind to fix