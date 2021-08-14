const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "~>",
});

const action = {
  hello() {
    console.log("hello user!");
  },
  help() {
    console.log(Object.keys(action));
  },
  exit() {
    rl.close();
    process.exit();
  },
};

rl.prompt();


rl.on("line", (line) => {
  const lineTrim = line.trim().toLowerCase();
  const command = action[lineTrim];

  if (command) {
    command();
  } else {
    console.log("Unknown command");
  }
  rl.prompt();
}).on("close", () => {
  console.log("Bye");
});
