const flyingMixin = {
  fly() {
    console.log(`${this.name} is flying!`);
  },
};

const walkingMixin = {
  walk() {
    console.log(`${this.name} is walking!`);
  },
};

class Bird {
  constructor(name) {
    this.name = name;
  }
}

// Applying mixins
Object.assign(Bird.prototype, flyingMixin, walkingMixin);

const eagle = new Bird("Eagle");
eagle.fly(); // Output: Eagle is flying!
eagle.walk(); // Output: Eagle is walking!
