# this
"this" is a keyword in JavaScript that refers to the object that is currently executing the function.

- this in global context points to window object
- this in class will reffer to the class
- this in function 
   - will reffer to the global in non Strict mode
   - will reffer to undefined ifstrict mode is on
- Arrow function doesnot have there own this so they reffer to lexical parents this

- Event handeler mai this will reffer to the event node
## this substitution