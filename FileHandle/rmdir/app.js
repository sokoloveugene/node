const fs = require("fs").promises;
const path = require("path");

// 1) if dir is not empty => error ENOTEMPTY
// 2) using { recursive: true } option will delete NOT empty dir

const removeDirFn = async () => {
  try {
    const files = await fs.readdir(process.cwd());
    console.log("files", files);

    const dirPath = path.join(process.cwd(), "temp");

    await fs.rmdir(dirPath, { recursive: true });
  } catch (err) {
    console.log("Error", err);
  }
};

removeDirFn();
