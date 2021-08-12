const fs = require("fs").promises;

const isFileOrFolder = async (path) => {
  let fileHandle = null;
  let stat = {};

  try {
    fileHandle = await fs.open(path, "r");
    stat = await fileHandle.stat();
  } catch (err) {
    console.log("error", err);
  } finally {
    if (fileHandle) {
      fileHandle.close();
    }
  }

  if (stat.isFile()) {
    console.log(`${path} ~ IS A FILE`);
  } else if (stat.isDirectory()) {
    console.log(`${path} ~ IS A DIRECTORY`);
  }
};

const path1 = "./manual.txt";

const path2 = "./../chmod";

isFileOrFolder(path1)
isFileOrFolder(path2)


