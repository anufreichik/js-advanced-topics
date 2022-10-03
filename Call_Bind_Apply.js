const obj = {
  name: "Marina",
};

function sayHellow(age, gender) {
  return `Hello ${this.name}, you age is: ${age}, your gender is:${gender}`;
}

sayHellow.call(obj, 40, "female");

sayHellow.apply(obj, [40, "female"]);

const bindFunc = sayHellow.bind(obj);

bindFunc(24, "male");

const animals = [
  { species: "lion", name: "king" },
  { species: "whale", name: "queen" },
];
function printAnimal(i) {
  this.print = function () {
    console.log("#" + i + " " + this.species);
  };
  this.print();
}

for (let i = 0; i < animals.length; i++) {
  printAnimal.call(animals[i], i);
}

//append array to other array

const array = ["a", "b"];
const elements = [1, 2, 3];

array.push.apply(array, elements);
