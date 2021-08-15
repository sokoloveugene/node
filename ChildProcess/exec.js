const cp = require("child_process");

console.log("Sync log 1");

cp.exec("ls -a", (error, stdout, stderr) => {
  if (error) {
    console.log("error", error);
    return;
  }

  if (stderr) {
    console.log("stderr", stderr);
    return;
  }

  console.log("stdout", stdout);
});

console.log("Sync log 2")


// Sync log 1
// Sync log 2
// stdout .
// ..
// exec.js
