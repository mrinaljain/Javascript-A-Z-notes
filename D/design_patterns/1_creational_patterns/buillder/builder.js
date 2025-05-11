class PizzaBuilder {
  constructor() {
    this.pizza = {};
  }

  setBase(base) {
    this.pizza.base = base;
    return this;
  }
  setToppings(toppings) {
    this.pizza.toppings = toppings;
    return this;
  }
  addCheese(cheese) {
    this.pizza.cheese = cheese;
    return this;
  }

  build() {
    return this.pizza;
  }
}

const farmvillePizza = new PizzaBuilder()
  .addCheese("Cheese Burst")
  .setBase("this crust")
  .setToppings(["corn", "onnion", "capsicum"]).build();


  console.table(farmvillePizza);
  