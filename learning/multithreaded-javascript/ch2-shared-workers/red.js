console.log("red.js");

const worker = new SharedWorker("shared-worker.js");

worker.port.onmessage = (event) => {
  console.log("EVENT", event.data);
};
