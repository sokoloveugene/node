const fs = require("fs").promises;

fs.mkdir("newFolder/innerFolder", { recursive: true })
  .then(function () {
    console.log("Directory created successfully");
  })
  .catch(function (e) {
    console.log(e);
    console.log("failed to create directory");
  });
