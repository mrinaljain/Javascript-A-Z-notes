const person1 = {
   name: 'Alice',
   age: 30, city: 'New York', country: 'USA', isAdmin: true,
   printAge: function (phone) {
      console.log(`${this.name} is ${this.age} years old and lives in ${this.city} of ${this.country} and uses ${phone}`);
   }
};
const person2 = {
   brand: 'Apple', model: 'iPhone 12', color: 'Black', storage: '256GB', price: 999,
};

const { brand, model } = person2;


person1.printAge(model);