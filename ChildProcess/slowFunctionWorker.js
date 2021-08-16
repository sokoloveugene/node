const slowFunction = () => {
  let counter = 0;
  while (counter < 5000000000) {
    counter++;
  }

  return counter;
};

process.on("message", (message) => {
  if (message === "START") {
    const result = slowFunction();

    const message = `{"totalCount":${result}}`;
    process.send(message);
  }
});
