//ES6 classes and inheritance syntethic sugar

class Vehicle {
  constructor() {
    this.weels = 4;
    this.motorized = true;
  }
  ready() {
    return "Ready to go!";
  }
}

class Motocycle extends Vehicle {
  constructor() {
    super();
    this.weels = 2;
  }
  wheelie() {
    return "On one weel now!";
  }
}

const myBike = new Motocycle();
