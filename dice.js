const crypto = require("crypto");

function rollDice() {
  const randomByte = crypto.randomBytes(1)[0];
  return (randomByte % 6) + 1;
}

console.log("--- Single Dice Roll ---");
console.log(`Dice Rolled: ${rollDice()}`);

console.log("\n--- Simulating 5 Dice Rolls ---");
for (let i = 1; i <= 5; i++) {
  console.log(`Roll ${i}: ${rollDice()}`);
}