module.exports = function(workerPath, handler) {
  return (function() {
    const api = {};
    const worker = new Worker(workerPath);
    let isExecuting = false;
    let pendingJob;
    let numPosts = 0;

    // make sure handler is a function
    if (typeof handler !== 'function') {
      handler = function() {};
    }

    // worker.postMessage wrapper for debugging
    const postMessage = function(data) {
      worker.postMessage(data);
      numPosts++;
    };

    // send pending job if needed, and call handler
    worker.onmessage = function(event) {
      if (pendingJob) {
        postMessage(pendingJob);
      } else {
        isExecuting = false;
      }
      pendingJob = null;
      if (event.data) {
        handler(event.data);
      }
    };

    // execute immediately, or store as a pending job
    api.exec = function() {
      const args = Array.prototype.slice.call(arguments);
      if (isExecuting) {
        pendingJob = args;
      } else {
        isExecuting = true;
        postMessage(args);
      }
    };

    // terminate our worker
    api.terminate = function() {
      return worker.terminate();
    };

    return api;
  })();
};
