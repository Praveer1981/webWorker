let webWorker = undefined;

    // if the browser supports worker then create one
if (window.Worker) {
    webWorker = new Worker("worker.js"); 
} else {
    console.error("Browser does not support Worker");
}

function addNumber() {
    // get the values from the UI
    var firstNumber = document.getElementById("firstNumber").value;
    var secondNumber = document.getElementById("secondNUmber").value;
    var result = 0;
    // for debugging purpose
    console.debug(`here is the first number ${firstNumber}`);
    console.debug(`here is the second number ${secondNumber}`);

    if (webWorker) {
        // https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage
        // here main thread sends message to worker thread
        webWorker.postMessage({
            fNumber: firstNumber,
            sNumber: secondNumber
        });
        // main thread receives the message from the worker thread
        webWorker.onmessage = ( e => {
            result = e.data;
            document.getElementById("result").value = result;
        });
    }
}