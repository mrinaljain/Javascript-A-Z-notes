# Array Methods

## MAP
Map takes an array and performes certain operations on it and then returns a new array.

## Filter
Filter returnes some part of the array based on certain condition

## Reduce
reduce will work on the entire array and return the resultant

## Find
Find will iterate through all items of array and return the first  item that matches the condition given inside callback function.
1 *if none of the items match the condition then retrun **undefined***
2 *if multiple items match the condition then return the first item*
```
let searchResult = array.find((item)=>{
   return condition
})
```