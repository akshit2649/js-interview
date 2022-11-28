const array = [
  [[1, [1, 1]], 2, 3],
  [4, 5],
];

console.log(...array);
const res = flattenArray(array);
console.log(res);

function flatArray(array) {
  let res = [];
  array.forEach((ele) => {
    if (Array.isArray(ele)) {
      const nested = flatArray(ele);
      nested.forEach((item) => {
        res.push(item);
      });
    } else {
      res.push(ele);
    }
  });
  return res;
}

function flattenArray(arr) {
  return arr.reduce((prevVal, currentVal) => {
    if (Array.isArray(currentVal)) {
      prevVal = prevVal.concat(flattenArray(currentVal));
    } else {
      prevVal.push(currentVal);
    }

    return prevVal;
  }, []);
}
