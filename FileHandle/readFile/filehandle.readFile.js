const fs = require("fs");

const fsPromises = fs.promises;

const doReadFile = async () => {
  let filehandle = null;

  try {
    filehandle = await fsPromises.open("./manual.txt", "r");

    // can pass options (with encoding; also can pass signal to abort process of reading)
    const fileData = await filehandle.readFile("base64");
    console.log("fileData", fileData);
  } catch (err) {
    console.log("error", err);
  } finally {
    if (filehandle) {
      filehandle.close();
    }
  }
};

doReadFile();
