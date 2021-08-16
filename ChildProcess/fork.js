const http = require("http");
const cp = require("child_process");
const path = require("path");
const PORT = 8000;

http
  .createServer((req, res) => {
    if (req.url === "/") {
      const workerPath = path.join(process.cwd(), "slowFunctionWorker.js");
      const child = cp.fork(workerPath);

      child.on("message", (message) => {
        res.end(message);
      });

      child.send("START");
    }
  })
  .listen(PORT, () => {
    console.log("server started");
  });
