const obj = {
  A: 12,
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

console.log(flattenObj(obj, ""));

function flattenObj(obj, parent) {
  const res = {};

  function helper(obj, parent) {
    for (let key in obj) {
      const newParent = parent + key;
      if (typeof obj[key] === "object") {
        helper(obj[key], newParent + ".");
      } else {
        res[newParent] = obj[key];
      }
    }
  }
  helper(obj, parent);
  return res;
}
