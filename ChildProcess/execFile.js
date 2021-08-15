const { execFile } = require("child_process");

execFile(__dirname + "/processNodejsImage.sh", (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`stdout:\n${stdout}`);
});

// 1) create bash sript (processNodejsImage.sh example);
// 2) make it runnable using (chmod u+x processNodejsImage.sh)
// 3) node execFile.js

// stdout:
// PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hs...