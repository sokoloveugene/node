// The process.kill( pid[,signal] ) is an inbuilt method of node.js which sends a signal to the process,
// pid (which is the process id) and signal is in the string format that is the signal to send.

// Syntax :

// process.kill(pid[, signal])
// Paramters: This method accepts two parameters as mentioned above and described below:

// pid: This parameter holds the process ID.
// signal: This parameter holds the string format.
// signal names : These are in string format .

// SIGTERM
// SIGINT
// SIGHUP
// Note : If no signal specified, then by default ‘SIGTERM’ will be the signal.

const displayInfo = () => {
  console.log("Receiving SIGINT signal in nodeJS.");
};

// Initiating a process
process.on("SIGINT", displayInfo);

setTimeout(() => {
  console.log("Exiting.");
  process.exit(0);
}, 100);

// kill the process with pid and signal = 'SIGINT'
process.kill(process.pid, "SIGINT");

// The process.kill() method will throw an error if the target pid is not found or doesn’t exist.
// As a special case, a signal of 0 can be used to test for the existence of a process
