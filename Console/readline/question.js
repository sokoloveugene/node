const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter secret ~ ", (answer) => {
  console.log("Entered", answer);
});
