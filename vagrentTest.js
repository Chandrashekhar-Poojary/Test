// as per the my subscription given data
const newsPaperData = {
  TOI: {
    Monday: 3,
    Tuesday: 3,
    Wednesday: 3,
    Thursday: 3,
    Friday: 3,
    Saturday: 5,
    Sunday: 6,
  },
  Hindu: {
    Monday: 2.5,
    Tuesday: 2.5,
    Wednesday: 2.5,
    Thursday: 2.5,
    Friday: 2.5,
    Saturday: 4,
    Sunday: 4,
  },
  ET: {
    Monday: 4,
    Tuesday: 4,
    Wednesday: 4,
    Thursday: 4,
    Friday: 4,
    Saturday: 4,
    Sunday: 10,
  },
  BM: {
    Monday: 1.5,
    Tuesday: 1.5,
    Wednesday: 1.5,
    Thursday: 1.5,
    Friday: 1.5,
    Saturday: 1.5,
    Sunday: 1.5,
  },
  HT: {
    Monday: 2,
    Tuesday: 2,
    Wednesday: 2,
    Thursday: 2,
    Friday: 2,
    Saturday: 4,
    Sunday: 4,
  },
};
// to read the weekly budget and store it to readline variable
console.log("to enter the weekly budget or amount:");
var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
}); // createInterface takes two params - i/p & o/p stream


rl.on("line", function (line) {
  // to call the function inside the console
  console.log(calculatePossibleCombination(line));
});


function calculatePossibleCombination(budget_amt) {
  const possibleCombinationsOfData = [];

  // to iterate keys the newsPaperData i.e., item1 and item2 in second iteration
  for (const item1 of Object.keys(newsPaperData)) {
    for (const item2 of Object.keys(newsPaperData)) {
      // to calculate the total values of iterated values with the help of reduce method


      const total =
        Object.values(newsPaperData[item1]).reduce((sum, price) => sum + price, 0)
        +
        Object.values(newsPaperData[item2]).reduce((sum, price) => sum + price, 0);

      // to check the if the total amt is less than or equal to given budget_amt and also should not be same of item1 and item2 
      if (total <= budget_amt && item1 !== item2) {
        possibleCombinationsOfData.push([item1, item2]);
      }
    }
  }

  return possibleCombinationsOfData;
}
