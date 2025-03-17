/*
sort the array such that it becomes a wave
*/

function convertToWave(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    const element = arr[i];
    const nextElement = arr[i + 1];
    // even index
    if (i % 2 === 0 && element < nextElement) {
     
        //swap
        let temp1 = arr[i];
        arr[i] = arr[i+1];
        arr[i+1]= temp1;
      
    }
    // odd index
    else if (i % 2 !== 0 && element > nextElement) {
      //swap
      let temp2 = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp2;
    }
  }

  console.log(arr);
  
}


convertToWave([1, 2 ,3 ,4 ,5]);