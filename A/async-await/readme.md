# Async Await

Async/ Await is the machenism in Javascript that is used to  create and handel the Promise in Javascript in more efficient way.
---
- Async function always returns a Promise.
- Await keyword is used to wait for the result and perform further activites.
- whatever is returned from Async function is returned in fom of Promise.

```
// Creating Promise
async function createPromise (){

return Any;
}

// Resolving Promise
async function resolvePromise(){
   try{
     const result = await createPromise();
     console.log(result);
   }catch(erroor){
      console.log(error.message)
   }
}

```
- If we don't return anything then empty promise will be returned which will fulfill as undefined.
- Await 

## Questions

- How is Async/Await differnt from .then method.
 helps in better promise chaining

