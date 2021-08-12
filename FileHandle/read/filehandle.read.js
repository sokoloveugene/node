// Node.js program to demonstrate the
// Node.js filehandle.read() Method

// Import the filesystem module
const fs = require("fs");
const fsPromises = fs.promises;

var buffer = new Buffer.alloc(1024);

console.log(fs.readFileSync("example.txt", "utf8"));
console.log("BUFFER", buffer)

// Using the async function to
// ReadFile using filehandle
async function doRead() {
  let filehandle = null;

  try {
    // Using the filehandle method
    filehandle = await fsPromises.open("example.txt", "r+");

    // Calling the filehandle.read() method
    await filehandle.read(buffer, 0, buffer.length, 2);

    console.log("BUFFER 2", buffer.toString())

  } finally {
    if (filehandle) {
      // Close the file if it is opened.
      await filehandle.close();
    }
  }
}

doRead().catch(console.error);
