// RUN node app.js > hello.log 2> error.log

// > creates and redirects console.log to hello.log file
// 2> creates and redirects console.error to error.log file

console.log("hello");
console.error("Bye bye");
