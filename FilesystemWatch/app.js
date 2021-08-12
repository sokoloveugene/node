const http = require("http");
const fs = require("fs");

const cache = new Map();

const cacheFile = (path) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      cache.delete(path);
    } else {
      cache.set(path, data);
    }
  });
};

const cacheFolder = () => {
  fs.readdir(path, (err, files) => {
    if (err) {
      console.log("Error", err);
      return;
    }

    files.forEach(cacheFile);
  });
};

const watch = (path) => {
  fs.watch(path, (event, filename) => {
    cacheFile(filename);
  });
};

const path = "./";
cacheFolder(path);
watch(path);

http
  .createServer((req, res) => {
    const fileName = req.url.substring(1);

    const data = cache.get(fileName);

    if (data) {
      res.end(data);
    } else {
      res.end("Requested file is not cached");
    }
  })
  .listen(8000);
