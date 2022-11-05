// Fibonacci
const fibonacci = (itr, arr = [0, 1]) => {
  if (itr <= 2) return arr;
  const [lastToLast, last] = arr.slice(-2);
  return fibonacci(itr - 1, [...arr, lastToLast + last]);
};
// console.log(fibonacci(12));

const fibbonaciPos = (pos) => {
  if (pos < 2) return pos;
  return fibbonaciPos(pos - 1) + fibbonaciPos(pos - 2);
};
// console.log(fibbonaciPos(8));

//Real life example
//1) Continuation tokens
const getAWSProductIdImages = async () => {
  // get the data with await fetch request

  if (data.IsTruncated) {
    //recursive
    return await getAWSProductIdImages(
      productId,
      s3, //connection to s3
      resultArray, // accumulator
      data.NextContinuationToken
    );
  }

  return resultArray;
};

//2) A Parser:

const articleByGenre = {
  jazz: ["Miles Davis", "John Coltrane"],
  rock: {
    classic: ["Bob Seger", "The Eagles"],
    hair: ["Def Leppard", "Whitesnake", "Poison"],
    alt: {
      classic: ["Pearl Jam", "The Killers"],
      current: ["Joywave", "Sir Sly"],
    },
  },
  unclassified: {
    new: ["Caamp", "Neil Young"],
    classic: ["Seal", "Morcheeba", "Chris Stapleton"],
  },
};

const name = [];
const getArtistNames = (dataObj, arr) => {
  Object.keys(dataObj).forEach((key) => {
    if (Array.isArray(dataObj[key])) {
      return dataObj[key].forEach((artist) => {
        arr.push(artist);
      });
    } else {
      getArtistNames(dataObj[key], arr);
    }
  });
  //   return arr;
};
getArtistNames(articleByGenre, name);
console.log(name);
