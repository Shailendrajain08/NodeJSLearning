const fs = require("fs");

console.log("program has started");

// Stored In 2nd phase
fs.readFile(".File/input.txt", () => {
  console.log("File read Complete");
  // Stored In 1st phase
  setTimeout(() => {
    console.log("Timer callback executed");
  }, 0);

  // Stored In 3rd phase
  setImmediate(() => {
    console.log("setImmediate callback executed");
  });

  process.nextTick(() => {
    console.log('process.nextTick executed')
  })
});


console.log("Program has competed");
