const isEven = require("./modules/isEven");

const testNumbers = [4, 7, 10, 15, 22];

console.log("--- Testing Custom Module: isEven ---");
testNumbers.forEach((num) => {
  console.log(`Is ${num} even? -> ${isEven(num)}`);
});