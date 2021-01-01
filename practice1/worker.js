onmessage = function(e) {
    console.log('Worker: Message received from main script/thread');
    const result = parseInt(e.data["fNumber"]) + parseInt(e.data["sNumber"]);
    if (isNaN(result)) {
      postMessage('Please write two numbers');
    } else {
      const workerResult = result;
      console.log('Worker: Posting message back to main script/thread');
      // just for debugging purpose
      console.debug(`${workerResult} value sent to main thread`)
      postMessage(workerResult);
    }
  }