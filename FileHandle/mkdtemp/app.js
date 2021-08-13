const fs = require("fs").promises;

const prefix = "test~";

fs.mkdtemp(prefix, { encoding: "utf-8" })
  .then((folder) => {
    console.log(`Folder created with name ${folder}`);
  })
  .catch((err) => {
    console.log("Error", err);
  });

//   A unique directory name is generated
//   by appending six random characters
//   to the end of the provided prefix
