//! Example 1
console.log("%cExample 1", "font-size: 20px; color: blue; font-style: italic;");

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}
x();

//! Example 2
console.log("%cExample 2", "font-size: 20px; color: blue; font-style: italic;");

function a() {
  let m = 10;
  function b() {
    console.log(m);
  }
  m = m + 20; // extra spice to closure
  return b;
}

let closure = a();

closure();

//! Example 3
console.log("%cExample 3", "font-size: 20px; color: blue; font-style: italic;");
function z() {
  var y = 10;
  return function () {
    return y;
  };
}
let clsr = z();

let closr = clsr();

console.log(closr);

//! Example 4
console.log(
  "%cExample 4 Closure Scope ",
  "font-size: 20px; color: blue; font-style: italic;"
);
/// By example 4 we get to understand that the closure scope that is found while returning a function . that closure sscope is alwase present and we can  make changes to the value of variables present in the closure scope
function myCounter() {
  var count = 0;
  return function () {
    return count++;
  };
}

let counter = myCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

//! Example 5
// Closures using function as parameter

function fetchData(url, callback) {
  setTimeout(() => {
    let data = `Data fetched from ${url}`;
    callback(data);
  }, 2000);
}

fetchData("www.google.com", function (result) {
  console.log(result);
});

//! Example 6
// achive below both functionality by single function
//add(2,4); ==> 6
// add(2)(4); ==> 6

// Way 1
function add(l) {
  if (arguments.length == 2) {
    console.log(`Two Param ${arguments[1] + arguments[0]}`);
  }
  return function (m) {
    console.log(`Single Param ${m + l}`);
  };
}

add(100, 200);
add(100)(200);

//! Example 7
// storing functions in closure scope
var a = (function () {
  var private = function () {
    console.log("Privatly logged");
  };

  return {
    public: function () {
      private();
    },
  };
})();
console.log(a);
a.public();
