# Promise

Promise is an object which represents the eventual completion (or failure)  of an Asynchronous operation.
```
const p = new Promise((res , rej)=> {

   if(some consition){
      res("response data")
   }
   else{
      rej("Rejection Data or Error")
   }
});

// Resolving  a Promise

p.then((data)=>{
   console.log(data)
}).catch((err)=>{
   console.log(err.message);
});
```

## How Promises and Timers Work
### Promise Creation: 
When you create a promise (like p1 and p2), the code inside the promise's executor function (the function passed to new Promise()) runs immediately. This means that when you define a setTimeout inside a promise, the timer starts right away.

### Timers Running Concurrently:
 Because JavaScript is single-threaded, all asynchronous operations, like timers, are handled by the event loop. When you create multiple promises with timers, these timers are all scheduled at the same time, meaning they start counting down concurrently.

### Awaiting Promises:
When you use await, the function pauses execution until the awaited promise resolves. If the promise has already been resolved (because its timer has completed), the function continues immediately. 

## Stages of Promise object
- Pending
- Settled ( Can be Settled in to 2 types )
   - Resolved (Fulfilled)
   - Rejected

## Promise APIs


### 1. Promise.all( ) [ Fail Fast ]

- Promise.all takes an Array of promises and returns an array once all Promises are fulfilled.
- Even if single promise fails then everything fails at the very moment.

### 2. Promise.allSettled( ) [Wait for all]
- Waits for all to finish then returns the res, rej both in a Array

### 3. Promise.race( ) [First settled] 
- Its just lika a race between all promises.
- The promise which crosses finishline first is the answer.
- The winner promise can be both SUCCESS of FAILURE.

### 4. Promise.any( ) [First resolve]
- Any promise out of all which becomes successfull first is the winner.




#### Questions 
1. What are Promise Handlers in JavaScript?
   .then()   .catch()

2. What is the difference between `Promise` and `Async-Await`?
   