class Car {
  constructor(wheels, isEv, topSpeed) {
    this.wheels = wheels;
    this.isEv = isEv;
    this.topSpeed = topSpeed;
  }
}

class Bike {
  constructor(wheels, isEv, topSpeed) {
    this.wheels = wheels;
    this.isEv = isEv;
    this.topSpeed = topSpeed;
  }
}

class VehicleFactory {
  static createVehicle(type, config = {}) {
    switch (type) {
      case "car":
        return new Car(config.wheels ?? 4, true, 250);
      case "bike":
        return new Bike(2, false, 180);
      default:
        new Error("type not found");
    }
  }
}

let car1 = VehicleFactory.createVehicle("car", {"wheels":8});

console.log(car1);
