const fs = require("fs");
const { Console } = require("console");

const output = fs.createWriteStream("./output.log");
const errorOutput = fs.createWriteStream("./errorOutput.log");

const logger = new Console({
  stdout: output,
  stderr: errorOutput,
});

logger.log("Hello");
logger.error(new Error("Some error"));
