# Deep Copy - Shallow Copy



A shallow copy creates a new object that references the original object's memory locations, while a deep copy creates a new object with its own memory locations. 

## DeepCopy ARRAY & Object
   1. structuredClone(arr)
   2. JSON.parse(JSON.stringify(arr))
      Not good for undefined, NAN etc

### Conclusion

- For arrays containing only primitive values, any of the three methods (spread operator, Array.from(), slice()) are safe to use.
- For arrays containing nested objects or arrays, using structuredClone() is the safest method to prevent unintended modifications to the original array.
- If structuredClone() is not available, JSON.parse(JSON.stringify()) is an alternative, though it has limitations.Therefore, structuredClone() is the safest method among these for preventing unintended modifications to the original array in all cases.


## Shallow Copy Array
- slice
- spread operator 


## Shallow Copy Object
- Object.assign()
```
const obj = { a: 1, b: { c: 2 } };
const shallowCopy = Object.assign({}, obj);
```
- Using spread Operator


## Questions
1. What is differnce between deep copy and shallow copy?

2. Why is there a need of creating Deep Copy?
   Shallocopy uses reffrence to objects and nested elements , so if anything changes in nested elements the copied element also changes,Deep copy solves the above problem

3. What is the difference between shallow copy and deep copy for arrays and objects?

