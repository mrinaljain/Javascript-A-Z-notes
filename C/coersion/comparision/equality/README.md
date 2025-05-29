JS applies type coersion untill both sides are of same type and then compares them.

## Rules of Coersion


1. Same type --> compare directly
2. Boolean --> Number
3. String --> Number
4. Object --> Primitive
5. null == undefined --> true
6. undefined == 0 --> false




 
### ToPrimitive

1. when does toprimitive run ?



## Falsy values in JavaScript include:
- "" (empty string)
- 0
- null
- undefined
- NaN
- false


## Exceptions

- null == 0
   null converts to 0 in general numeric operations , but (==) operation doesnot convert null to 0 therefor the above comparision returns false.

- undefined == false 


- 