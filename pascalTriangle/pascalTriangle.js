const initApp = () => {
  const pascalTriangleArray = pascalTriangle(7);
  domTriangle(pascalTriangleArray);
};

document.addEventListener("DOMContentLoaded", initApp);

const pascalTriangle = (rows = 3) => {
  if (rows < 3) rows = 3;

  const stackArray = [];
  let i = 1;
  while (i <= rows) {
    const rowArray = [];
    let x = 0;
    let rowValue;
    while (x < i) {
      if (!x || x === i - 1) {
        rowValue = 1;
      } else {
        rowValue =
          parseInt(stackArray[i - 2][x]) + parseInt(stackArray[i - 2][x - 1]);
      }
      rowArray.push(rowValue);
      x++;
    }
    stackArray.push(rowArray);
    i++;
  }

  return stackArray;
};

const domTriangle = (array) => {
  const main = document.querySelector("main");

  array.forEach((subArr) => {
    const row = buildRow(subArr);
    main.appendChild(row);
  });
};

const buildRow = (array) => {
  const row = document.createElement("div");
  row.classList.add("row");
  array.forEach((el) => {
    const square = document.createElement("div");
    square.classList.add("square");
    square.textContent = el;
    row.appendChild(square);
  });
  return row;
};
