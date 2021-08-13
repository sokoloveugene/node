const fs = require("fs").promises;

// DOES NOT DELETE FILE FROM OLD PATH

fs.link("./changeFilePath.txt", "../changeFilePath.txt")
  .then(() => console.log("Success"))
  .catch((err) => console.log("Error", err));
