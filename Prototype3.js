function Dude(name) {
  this.name = name;
}

const me = new Dude("Sam");

console.log(Dude.prototype); //object
console.log(me.prototype); //undefined
console.log(me.__proto__); //object

Dude.prototype.talk = function () {
  return "Talking";
};

me.talk; //function
me.__proto__; //{talk:f, constructor:f}

function Person(age, name, gender) {
  this.age = age;
  this.name = name;
  this.gender = gender;
}

Person.prototype.run = function () {
  return "can run";
};
Person.prototype.talk = function () {
  return "can talk";
};
Person.prototype.walk = function () {
  return "can walk";
};

const little_person = {
  talk() {
    return "talk";
  },
};
const me = Object.create(little_person);
const me1 = Object.setPrototypeOf(me, little_person);
