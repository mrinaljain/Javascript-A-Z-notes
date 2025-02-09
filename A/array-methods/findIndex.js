const arr = [2, 5, 4, 5, 8, 7, 88, 5, 4, 6, 5, 1];

const ans = arr.findIndex(callback);

function callback(value, index, obj) {
  //   console.log(obj);
  //   return index === 0;
  return value === 88;
}
console.log(ans);
