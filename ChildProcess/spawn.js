// child_process.spawn(command[, args][, options])
// command <string> The command to run.

// args <string[]> List of string arguments.

// options <Object>

const { spawn } = require("child_process");
const { join } = require("path");

// cwd <string> Current working directory of the child process.
const ls = spawn("ls", ["-a"], { cwd: join(process.cwd(), "..") });

ls.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});

ls.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});

// === //
// const subprocess = spawn('bad_command');

// subprocess.on('error', (err) => {
//   console.error('Failed to start subprocess.');
// });
