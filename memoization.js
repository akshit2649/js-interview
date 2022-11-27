const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const argsToString = JSON.stringify(args);
    if (argsToString in cache) {
      console.log(`fetching from cache for key ${argsToString}`);
      return cache[argsToString];
    } else {
      console.log(`Computing values for args ${argsToString}`);
      const result = fn(...args);
      cache[argsToString] = result;
      return result;
    }
  };
};

const addNum = (a, b, c) => a + b + c;
const add = memoize(addNum);
// console.log(add(1, 2, 5));
// console.log(add(1, 2, 5));

const factorial = memoize((x) => {
  if (x === 0) return 1;
  else return x * factorial(x - 1);
});

console.log(factorial(5));
console.log(factorial(6));
