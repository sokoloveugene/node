setTimeout(() => {
  bar = 4;
  console.log("timeout", bar);
}, 0);

setImmediate(() => {
  bar = 4;
  console.log("setImmediate", bar);
});

process.nextTick(() => {
  bar = 2;
});

process.nextTick(() => {
  console.log("process", bar);
});

Promise.resolve()
  .then(() => {
    bar = 3;
  })
  .then(() => console.log("promise", bar));

queueMicrotask(() => {
  console.log("queueMicrotask", bar);
});

let bar = 1;
