const person = {
  alive: true,
};
const musician = {
  plays: true,
};

musician.__proto__ = person; //old way

console.log(musician.alive); //true

//JS now has getPrototypeOf and setPrototypeOf methods
// instead of using __proto__

Object.setPrototypeOf(musician, person);
console.log(Object.getPrototypeOf(musician));
console.log(musician.alive); //true

//Object.create

const human = {
  kind: "Human",
};

const newHuman = Object.create(human);

//extending the prototype chain => general to specific to more specific

const guitarist = {
  strings: 6,
  __proto__: musician,
};

console.log(guitarist.alive); //true

//no circular references allowed (person.__proto__ cant be guitarist)
//the __proto__ avlue must be an object or null
//object can only directly inherit from one object

const car = {
  door: 2,
  seats: "vinyl",
  get seatsMaterial() {
    return this.seats;
  },
  set seatsMaterial(material) {
    this.seats = material;
  },
};

const luxCar = {};
Object.setPrototypeOf(luxCar, car);
luxCar.seatsMaterial = "leather";

Object.keys(luxCar).forEach((key) => console.log(key)); // seats

//but for ..in loop includes inherited props  - seats, doors, seatMaterials
for (let key in luxCar) {
  console.log(key);
}

//object constructors
function Animal(species) {
  this.species = species;
  this.eats = true;
}

Animal.prototype.walks = function () {
  return `${this.species} is walking.`;
};

const Bear = new Animal("bear");

console.log(Bear.walks());
