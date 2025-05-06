// STEPS to Create Observer 
//1. Observwble classbanaao
//2. constructor mai ek observer space/array bnaao.
// 3. subscribe , unsubscribe, notify y 3 method do 
// 4. subscribe matlab jo bhi fumction mila usko observer mai push kr 
// 5. unsubscribe matlab observr mai ye vo fun pop
// 6. notify matlab observer k andar k sare fun ko line se execute kr

class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((observer) => observer !== fn);
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

// USAGE
const newsAgency = new Observable();

function subscriber1(news) {
  console.log("Subscriber 1 received:", news);
}

function subscriber2(news) {
  console.log("Subscriber 2 received:", news);
}

newsAgency.subscribe(subscriber1);
newsAgency.subscribe(subscriber2);

newsAgency.notify("🔥 New Article on Design Patterns!");
