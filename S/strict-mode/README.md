# Strict Mode and Sloppy Mode 

Strict Mode
   : JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript,


Strict mode makes several changes to normal JavaScript semantics:

- Eliminates some JavaScript silent errors by changing them to throw errors.


- strict mode and slopy mode can co exist

```
function myFunc() {
  "use strict";
  // Strict mode yahan sirf is function ke andar hoga
}
```

- modules are by default in strict mode

- all classes are by default in strict mode