// debounce

//will take function and timer as input

// return a better function
// check the timer every time and reset it at every function call

// agar timer pura chal gya aur koi click event nhi aaya to vo function execute ho jayeg

// agar timer pura nhi chala usle pehle click event aa gya to timer reset ho jayega

function searchApi() {}

function debouncer(normalFunction, timer) {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      normalFunction.apply(args);
    }, timer);
  };
}

debouncer(searchApi, 5000);

// throtling
// will limit the event to be called once per interval

function throttler(normalFunction, interval) {
  let lastcallingtime = 0;
  return function () {
    let date = new Date();
    let current = date.getTime();
    if (current - lastcallingtime > interval) {
      normalFunction();
      lastcallingtime = current;
    }
  };

  // call a function
}
