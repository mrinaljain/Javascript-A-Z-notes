# Polyfil

## 1. Polyfil for MAP

**Problem Statement**: MAP works on Array that takes in a Callback as input  and returns a new Array after iterating on each index of the provided Array(changing it as per the provided Callback).

```
let arr = [1,2,3,4,5,6,7,8]
let newArray = arr.map(callback(item , index){
   return item++;
});
```


**Solution**: The proposed solution will be a prototype which will also take 2 inputes  i.e Callback and current element.
and return the updated array in end.


```
Array.prototype.map = function(callback){
   var inputArray = this;
   var outputArray = [];
   for(var i =0; i< this.length; i++){
      outputArray[i] = callback(this[i], i, this);
   }
   return outputArray;
}
```
---

## 2. Polyfil for Filter

**Problem Statement**: Filter works on an Array.Takes a Callback( ***returns true or falseto decide keep current element or not*** ) as an input parameter, then iterates over all the Array elements to give a new Array as output.

```
let arr = [1,2,3,4,5,6,7,8]
let newArray = arr.filter(callback(item , index){
   return item% 2 == 0;  //to check if element is even
});
```


**Solution**: The prototype function will also take one callback as an input parameter and return the filtered Array after iterating on every element as per Callback.


```
Array.prototype.filter = function(callback){
   var inputArray = this;
   var outputArray = [];
   for(var i =0; i< this.length; i++){
      if(callback(this[i], i, this)){
         outputArray.push(this[i]);
      }
   }
   return outputArray;
}
```
---

## 3. Polyfil for Reduce

**Problem Statement**: Reduce is used to transform the givrn array to a diffrent item  by iterating over all the elements.
Takes 2 input  Callback and Accumulator

```
let arr = [1,2,3,4,5,6,7,8]
arr.reduce(callback(item , acc){
   acc += this[i];
   return acc;
}, 0);
```


**Solution**: The proposed prototype function will also take 2 inputes i.e one callback and initialValue.
The initial value is available inside callback.


```
Array.prototype.reduce = function(callback, accumulator){
   var inputArray = this;

   for(var i =0; i< this.length; i++){
      accumulator = callback(accumulator , this[i]);
   }
   return accumulator;
}
```
---