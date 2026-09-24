// Callback
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function message() {
    console.log("Welcome to JavaScript");
}

greet("Swetha", message);


// Promise
let promise = new Promise(function(resolve, reject) {
    let success = true;

    if (success) {
        resolve("Promise completed successfully");
    } else {
        reject("Promise failed");
    }
});

promise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });


// Async/Await
async function showMessage() {
    let result = await promise;
    console.log("Async/Await:", result);
}

showMessage();