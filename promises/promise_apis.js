var p1 = new Promise((resolve, reject) => {
  resolve("P1 Resolved...");
});
var p2 = new Promise((resolve, reject) => {
  resolve("P2 Resolved...");

  // var err = new Error("Error occoured..!");
  // reject(err);
});
var p3 = new Promise((resolve, reject) => {
  resolve("P3 Resolved...");
});
var p4 = new Promise((resolve, reject) => {
  resolve("P4 Resolved...");
});
var p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P5 Resolved...");
    reject("P5 Rejected...");
  }, 10000);
});
console.log(p5);

//! Promise .All
function promiseAll() {
  try {
    Promise.all([p1, p2, p3, p4, p5]).then((result) => {
      console.log(result);
    });
  } catch (error) {
    console.log(error.message);
  }
}
promiseAll();

//! Promise.allSettled
function allSettled() {
  try {
    Promise.allSettled([p1, p2, p3, p4, p5]).then((result) => {
      console.log(result);
    });
  } catch (error) {
    console.log(error.message);
  }
}

// allSettled();

//! Promise.any
function any() {
  try {
    Promise.any([p1, p2, p3, p4, p5]).then((result) => {
      console.log(result);
    });
  } catch (error) {
    console.log(error.message);
  }
}

// any();
