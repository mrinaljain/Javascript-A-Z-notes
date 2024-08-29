# Promise

Promise is an object which represents the eventual completion (or failure)  of an Asynchronous operation.

## How Promises and Timers Work
1.Promise Creation: When you create a promise (like p1 and p2), the code inside the promise's executor function (the function passed to new Promise()) runs immediately. This means that when you define a setTimeout inside a promise, the timer starts right away.

2.Timers Running Concurrently: Because JavaScript is single-threaded, all asynchronous operations, like timers, are handled by the event loop. When you create multiple promises with timers, these timers are all scheduled at the same time, meaning they start counting down concurrently.

3.Awaiting Promises: When you use await, the function pauses execution until the awaited promise resolves. If the promise has already been resolved (because its timer has completed), the function continues immediately. 



### Promise.all() [Fail Fast]

takes an array --> returns single array once all promises are resolved

### Promise.allSettled() [Wait for all]
waits for all to finish then returns the res, reh both in array

### Promise.race() [First settled] 

### Promise.any() [First resolve]