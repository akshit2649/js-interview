const sum = function (a) {
  return function (b) {
    if (typeof b === "number") return sum(a + b);
    else return a;
  };
};

console.log(sum(1)(2)(3)(4)());
