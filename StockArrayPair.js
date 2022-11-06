const portfolio = [
  { name: "Mark", stock: "FB" },
  { name: "Steve", stock: "AAPL" },
  { name: "Tim", stock: "AAPL" },
  { name: "Steve", stock: "MSFT" },
  { name: "Bill", stock: "MSFT" },
  { name: "Bill", stock: "AAPL" },
];

const shareholder = [];

/* Output =[
                {stock:"APPL", name:["Steve", "Tim", "Bill"]},
                {stock:"MSFT", name:["Steve", "Bill"]},
                {stock:"FB", name:["Mark"]},
] */

function prettyPortfolio(portfolio) {
  const keyVal = {};
  for (const data of portfolio) {
    if (keyVal.hasOwnProperty(data.stock)) {
      keyVal[data.stock].push(data.name);
    } else {
      keyVal[data.stock] = [data.name];
    }
  }

  for (const key of Object.keys(keyVal)) {
    const arr = keyVal[key];
    shareholder.push({ stock: key, name: arr });
  }

  let i = 0;
  for (const key of Object.keys(keyVal)) {
    shareholder[i].count = keyVal[key].length;
    i++;
  }

  console.log(shareholder);
}

prettyPortfolio(portfolio);
