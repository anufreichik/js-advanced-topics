let car = {
  color: "red",
  make: "tesla",
};

function purchaseCar(currency, price) {
  console.log(`I got this car for ${price}${currency}`);
}

purchaseCar.call(car, "$", 40000);

//call
Function.prototype.myCall = function (contex = {}, ...args) {
  if (typeof this !== "function") throw new TypeError("wrong type");

  context.fn = this;

  context.fn(...args);
};
//apply
Function.prototype.myApply = function (context = {}, arrArgs = []) {
  if (typeof this !== "function") throw new TypeError("wrong type");
  if (!Array.isArray(args)) {
    throw new TypeError("wrong type");
  }
  context.fn = this;
  context.fn(...arrArgs);
};
//bind
Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") throw new Error("wrong type");
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

purchaseCar.myCall(car, "$", 50000);
purchaseCar.myApply(car, ["$", 50000]);
