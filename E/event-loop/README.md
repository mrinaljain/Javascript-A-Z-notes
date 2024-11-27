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
