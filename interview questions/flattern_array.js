const nestedArray = [1, 2, [3, 4], [5, 6] , [7 ,[8, 9], 10] , 11];

// run a loop on each element 
// if element is not array array push to answer array
// else  start from step one (recursion)
let flattenArr1 = [];


function flatten (arr , ans ){
   for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if(Array.isArray(element)){
         flatten(element, ans);
      } else{
         ans.push(element);
      }
}
return ans;
}


function flatternArray(arr ){
   let flattenArr2 = [];
   for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (Array.isArray(element)) {
         flattenArr2.push(...flatternArray(element));
      } else {
         flattenArr2.push(element);
      }
   }
   return flattenArr2;
}


console.log(flatten(nestedArray, flattenArr1));
console.log(flatternArray(nestedArray));

