[Event loop Flow](http://latentflip.com/loupe/)

JRE (Browser)  ===> JS Engine ===> call stack 

JS Engine ( code execution) 

Call Stack
Data structure where event execution in maintained  sunchronously


Global execution context
First GCE is created in Call Stack


Web APIs
External functionalites provided by browser via winndow object.

Callback Que Starvation
when task in callback que has to wait forever 

Event loop
Keeps synch in between  callstack and {macro, micro Queue}


Microtask
VVIP tasks like promise , await , fetch, mutation

Macrotask
settimeout , click etc

Mutation Observer


## Priorty

# JavaScript Execution Priority Order

## 1️⃣ Call Stack (Synchronous Code) - **Highest Priority**
- Executes **immediately** in order.
- Examples:
  - `console.log("Hi")`
  - Variable declarations
  - Function executions

## 2️⃣ Micro-task Queue (Higher Priority than Macro-task)
- **Promises (`.then()`, `.catch()`, `.finally()`)**
- **Async/Await (`await` resumes here)**
- **MutationObserver (rarely used)**
- These tasks execute **immediately after synchronous code finishes**.
- Examples:
  ```js
  Promise.resolve().then(() => console.log("Microtask"));

## 3️⃣ Macro-tasks (setTimeout, setInterval, setImmediate, I/O)
- setTimeout, setInterval, setImmediate (Node.js)
- I/O tasks (like reading files in Node.js)
- UI rendering tasks (in browsers)
- Runs after all micro-tasks are completed.

## 4️⃣ Render tasks (UI updates, reflows, repaints)
UI updates, painting, and rendering.
Executed after Micro-tasks and Macro-tasks.
Examples:
DOM updates after JavaScript execution
CSS animations, reflows, repaints