// STEPS to Create Observer 
//1. Observwble classbanaao
//2. constructor mai ek observer space/array bnaao.
// 3. subscribe , unsubscribe, notify y 3 method do 
// 4. subscribe matlab jo bhi fumction mila usko observer mai push kr 
// 5. unsubscribe matlab observr mai ye vo fun pop
// 6. notify matlab observer k andar k sare fun ko line se execute kr

// Observable banega

class Observable {
  constructor(parameters) {
    this.observers = [];
  }
  // subscribe krne ki suvidha

  subscribe(fn) {
    this.observers.push(fn);
  }
  // unsubscribe krne ki suvidha
  unsubscribe(fn) {
    this.observers.filter((fun) => fun !== fn);
  }

  // sare subscribers ko change notify krne ki suvidha
  notify(param) {
    this.observers.forEach((observer) => {
      observer(param);
    });
  }
}

const newsAgency = new Observable();

// multiple observer/subscriber banenge

let subscriberOne = function (item) {
  console.log(`Hello World with  subscriber 1 ${item}`);
};

let subscriberTwo = function (item) {
  console.log(`Hello World with subscriber 2 ${item}`);
};

newsAgency.subscribe(subscriberOne);
newsAgency.subscribe(subscriberTwo);

newsAgency.notify("dynamic news");