const deepClone = (obj) => {
  if (typeof obj !== "object" || obj === null) return obj;

  const newObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    const value = obj[key];
    //recurcive call for nested
    newObj[key] = deepClone(value);
  }

  return newObj;
};

const a = [1, 2, 3, [4, 5, 6]];
const b = deepClone(a);
console.log(b === a);
