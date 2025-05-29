## Rules of Coersion

Note
: If any operand of two is a string OR can be converted to string (after toPrimitive()) then the result needs to be String Concatenation.

1. String + Number --> String
2. Number + String --> String
3. Object + String --> String
4. Array + Number --> String
5. Null + Undefined --> NaN


## Special Cases

1. [] + {} --> "[object Object]"
2. {} + [] --> 0




## Common coersions 
- Null is coersed to 0.
- undefined is coersed to NaN