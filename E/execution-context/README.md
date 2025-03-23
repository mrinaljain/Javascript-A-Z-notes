# [Execution Context](https://www.youtube.com/watch?v=zdGfo6I1yrA&t=94s)

Execution Context is the environment inside which a javascript code is executed.
- EC contains many internal components that the JS engine uses to keep track of the code execution and also to track other ECs.
- First EC created is known as Global EC.

## Diffrent components inside Execution Context

1. **Environment Records** : Used to keep track of identifier bindingsthat have been created for variable declerations, function declerations and all the values within that context.

2. **Realm** : Realm is an isolated environment where our code is executed.Realm consists of several components
   - Intrinsics
   - Global Object
      1. Specs Properties
      2. Host Properties
      3. User Properties

   - Global Environment Reocrd
.
.
.
.
.
TBD

3. Lexical Environment
4. Variable Environment

## Diffrent Phases of Execution Context
1. Creation Phase (Memory Setup)
2. Execution Phase

In other words
Everything in Javascript happens inside Execution context.
- Memory Component ( used for memory allocation)
- Code Component ( used for code execution )

[Image]

So basically execution context decides kab kya execute hoga aur iske andar hi execute hota hai synchronously in asingle thread.

Synchronous  = Ek cretain order mai / Ek k baad ek
Songle threaded = One at a time / Ek time pr ekk hi execute hoga



### Vidoe Tutorial
1 [Behind the Scene](https://www.youtube.com/watch?v=zdGfo6I1yrA&t=94s)