const vm = require("vm");

vm.runInNewContext("this.constructor.constructor('return process')().exit()");

// Process is stopped using hack from new context
console.log("Will not be in console");
