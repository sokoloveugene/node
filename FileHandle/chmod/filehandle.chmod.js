const fs = require("fs");
const fsPromises = fs.promises;

async function changeAccessToFile() {
  // Initializing filehandle
  let filehandle = null;

  try {
    // Creating and initiating filehandle
    // "a+" flag. Open file for reading and appending. The file is created if it does not exist.
    filehandle = await fsPromises.open("notExistingFile.txt", "a+");

    // Modifying the file permission
    // by using chmod() method
    await filehandle.chmod(1);
  } finally {
    if (filehandle) {
      // Close the file if it is opened.
      console.log("permission is changed" + " to read only");

      console.log(
        "content of file before" +
          " operation :- " +
          fs.readFileSync("notExistingFile.txt")
      );

      await filehandle.close();
    }
  }
}

changeAccessToFile().catch(console.error);
