const fs = require("fs").promises;

const PATH = "./dir";

const openDir = async (path) => {
  try {
    const dir = await fs.opendir(path);

    console.log(`Directory is opened witch is in ${dir.path}`);

    const subdir = await dir.read();

    console.log(`Sub-directory ${subdir.name}`);

    const subdir2 = await dir.read();
    console.log(`Sub-directory ${subdir2.name}`);

    const subdir3 = await dir.read();
    console.log(`Sub-directory ${subdir3.name}`);

    dir.close();
  } catch (err) {
    console.log("error", err);
  }
};

openDir(PATH);

// STD OUT
// Directory is opened witch is in ./dir
// Sub-directory file2.txt
// Sub-directory file1.txt
// error TypeError: Cannot read property 'name' of null
//     at openDir (/Users/learnmore/Desktop/node/FileHandle/opendir/app.js:19:42)
