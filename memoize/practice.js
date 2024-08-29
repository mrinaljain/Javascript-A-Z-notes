function normal(a) {
  for (let i = 0; i < 9999999999; i++) {}
  return a * 100;
}

// console.log(normal(100, 100));

let memoize = function (slowFun) {
  let cache = {};
  let fast = function (...args) {
    //check if the args is present in
    console.log(cache);

    if (args[0] in cache) {
      console.log("From Cache");

      return cache[args[0]];
    } else {
      console.log("From Calculation");

      let ans = slowFun(...args);
      // update cache
      cache[args[0]] = ans;
      console.log(cache);
      return ans;
    }
  };
  return fast;
};
let memoisedfn = memoize(normal);

console.log(memoisedfn(100));
console.log(memoisedfn(100));
console.log(memoisedfn(100));
