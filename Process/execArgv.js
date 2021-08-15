console.log(process.execArgv);

console.log(process.argv);

// node --harmony execArgv.js --version

// [ '--harmony' ]
// [
//   '/Users/learnmore/.nvm/versions/node/v12.13.1/bin/node',
//   '/Users/learnmore/Desktop/node/Process/execArgv.js',
//   '--version'
// ]

// node execArgv.js --version --harmony
// []
// [
//   '/Users/learnmore/.nvm/versions/node/v12.13.1/bin/node',
//   '/Users/learnmore/Desktop/node/Process/execArgv.js',
//   '--version',
//   '--harmony'
// ]
