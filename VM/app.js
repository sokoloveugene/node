const vm = require("vm");

const context = { x: 1, y: 2 };

// Contextify the object.
vm.createContext(context);

const script = new vm.Script("x += 2; z = 10", { timeout: 3000 });

script.runInContext(context);

console.log("Context", context);
// Context { x: 3, y: 2, z: 10 }

// Example with console access

const contextWithConsole = { x: 10, console };
vm.createContext(contextWithConsole);

const script2 = new vm.Script(`
const a = 100; 
console.log("FROM compiled fn");
console.log(x + a)
`);

script2.runInContext(contextWithConsole);

// will log into console
// FROM compiled fn
// 110
