# [Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)


### copyWithin
copy elements within the array
```
copyWithin(target, start)
copyWithin(target, start, end)
copy to targetIndex from startIndex to endIndex
```

### every
Checks if every element folows the given function and returns 1 boolean value
```
```

### forEach
forEach runs a function on each value of the array and returns nothing
```
arr.forEach(item => console.log(item));
```


### filter
Filter returnes some part of the array based on certain condition

### fill
fill value in array from startIndex to End index
```
fill(value)
fill(value, start)
fill(value, start, end)

```

### Find
Find will iterate through all items of array and return the first  item that matches the condition given inside callback function.
1 *if none of the items match the condition then retrun **undefined***
2 *if multiple items match the condition then return the first item*
```
let searchResult = array.find((item)=>{
   return condition
})
```

### findIndex
findIndex will take a parameter(which is a callback function) and find its index in the array , if not found it will return -1;

```
arr.findIndex(callback(value, index, obj));

returns first matching index or -1
```


### flat
returns the flat version of the multi level array.
```
```


### lastIndexOf
returns the last occurance of the given item




### length
length will return the length of the given array.

```
```


### map
Map takes an array and performes certain operations on it and then returns a new array.


### reduce
reduce will work on the entire array and return the resultant
```
Array.reduce(callback, initialValue)

function callback(previousValue , currentValue , currentIndex, arr){
   .
   .
   .
   return currentValue;
}
```
### reduceRight
reduceRight works from right to left



### isArray()
```
Array.isArray(arr);
```

### reverse
reverse method will return the array with reversed index of th esame array.




### join
join method Adds all the elements of an array into a string, separated by the specified separator string.
```
arr.join(seperator);
```

### toString
toString method Adds all the elements of an array into a string
Note: takes no parameter
```

```

### includes
includes takes a key and returnd TRUE or FALSE based upon presence of that key in array.
also takes starting index to search from
```
arr.includes(searchElement, fromIndex): boolean

```

### shift
Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
```
```
### unshift
adds element at the begening of array
```
```

### push
adds element to the end of array 
```
```
### pop
pop will remove one element from the end of the array and return the value.
```
arr.pop();

returns the last elemenr of array and also updates th orignal array
```

### concat
adds two array and returns a new array
```
```

### keys
returns a new array which contains keys of the object
```
```

### values()
values return an iterable which can be used to iterate over the array
```
const iterable = arr.values();
```

### entries
returns iterator which contains array in which key value is present
```
```



### of
creates a new array with whatever comma seperated values are provided.
```
let arr = Array.of("2", 5);
```

### some
Checks if EVEN ONE element folows the given function and returns 1 boolean value
```
```
---

### from
The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
```
Array.from(arrayLike)
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)

```

### at
returns item at that particular index
```
```

### flatMap
It is identical to a map() followed by a flat() of depth **1**(arr.map(...args).flat())
```
flatMap(callbackFn)
flatMap(callbackFn, thisArg)

```



### splice
- same array ko update krdega.
used to add / remove / replace few elements from the array.
**It modifies the original array**
*returnType* : **returns an array containing the removed elements (if any)**

**start** : An integer from were the process neeeds to be started
**deleteCount** : An integer indicating the number of elements in the array to remove from start.
**items** : items to be inserted
```
splice(start) // Removes everything from index start onwards
splice(start, deleteCount)
splice(start, deleteCount, item1, item2, /* …, */ itemN)
```
1. orignal array ko modify karega
2. return kata hua ya jo remove kr reh ho vo part karega.
3. sirf start doge to startIndex se array end tak sab gayab kr dega.
4. jo items add hoti hai vo startIndex se hi add hona chalu hoti hai.
5. Remove all elements of array
```
arr.splice(0, arr.length);
``` 


### slice 

 .slice() method is used to extract a portion of an array (or string) without modifying the original array
```
slice()  // No Slicing, just creates a copy of Array.
slice(start) // default value of end is last index
slice(start, end) // start to end-1 index

```
1. Array kaat ke ney array deta hai.
2. Existing Array ko kuch nahi hoga.
3. returns subpart of array 
   - Start to End (*end not included*)
4. Negative index counts back from the end of the array
   - **-1 refers to the last element**
   ```
   slice (-1) 
   // -1 is startIndex 
   // endIndex not given so last index is equal to end Index by default and is baar end index ki value bhi include hogi.
   ```
5. Remember important thing agar end index doge to end index pr jo value hai vo include nahi hogi, aur agar end index nahi doge to startIndex se last index tak ka array return milega.
6. if start === end then returns empty array 
7. OR in simple words if endIndex <= startIndex then return empty array.


### sort 
sort will sort the array lexically and return the updated array.
- sort method can take another param that is a comparator
```
Array.sort(comparator);
```


