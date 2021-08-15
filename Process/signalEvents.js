// Begin reading from stdin so the process does not exit.
process.stdin.resume();

// In "old" streams mode the stdin stream is paused by default,
// so one must call process.stdin.resume() to read from it.
// Note also that calling process.stdin.resume() itself would switch stream to "old" mode.

process.on("SIGINT", () => {
  console.log("Received SIGINT. Press Control-D to exit.");
  process.exit(0);
});

// Using a single function to handle multiple signals
// function handle(signal) {
//   console.log(`Received ${signal}`);
// }

// process.on("SIGINT", handle);
// process.on("SIGTERM", handle);
