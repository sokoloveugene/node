const fs = require("fs").promises;

// this code will rename file and replace to up folder

const renameFn = async () => {
  try {
    await fs.rename("./1.txt", "../2.txt");
    console.log("file renamed");
  } catch (err) {
    console.log("error", err);
  }
};

renameFn();
