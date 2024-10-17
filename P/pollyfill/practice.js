// for map

// map  takes an array and returns new array  after donin some changes on each value

Array.prototype.myMap = function myMap(mapfun) {
  let ans = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    ans[i] = mapfun(element);
  }
  return ans;
};

let double = function (a) {
  return 2 * a;
};
var arr = [1, 2, 3, 4];

let solution = arr.myMap(double);

// console.log(solution);

// Filter pollyfill
// filter takes in an array and  retrens a new filtered array based on true false returned by a function or not

Array.prototype.myFilter = function myFilter(filterfun) {
  let ans = [];

  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    if (filterfun(element)) {
      ans.push(element);
    }
  }

  return ans;
};

let odd = function (a) {
  return a % 2 === 0;
};

let sol = arr.myFilter(odd);
// console.log(sol);

// pollyfill reduce

// reduce will take an array and a n aggregator(initial value)
// take each value from array and keep updating the aggregator and  return the final value of aggregator

Array.prototype.myReduce = function myReduce(reduceFun, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    const value = this[i];
    accumulator = reduceFun(accumulator, value);
  }

  return accumulator;
};

let reducedanswer = arr.myReduce((accumulator, currentValue) => {
  accumulator += currentValue;
  return accumulator;
}, 0);

// console.log(reducedanswer);

//  pollyfill for call

// we need to change the current calling context of a funct

Function.prototype.myCall = function (...args) {
  let oldContext = this;
  let newContext = args[0];
  let arguments = args.splice(1);

  // application
  oldContext.apply(newContext, arguments);
};

// polyfill for apply

// this  will take 2 params
Function.prototype.myApply = function (...args) {
  let oldContext = this;
  let newContext = args[0];
  let arguments = args.splice(1);

  // application
  oldContext.call(newContext, [arguments]);
};

// pollyfill for bind

// this will return the new function with changed context

Function.prototype.myBind = function (...args) {
  let oldContext = this;
  let newContext = args[0];
  let arguments = args.slice(1);
  let binded = function (...args2) {
    oldContext.apply(newContext, [...arguments, ...args2]);
  };

  return binded;
};
