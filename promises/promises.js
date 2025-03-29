let myPromise = new Promise((resolve, reject) => {
    let success = true; 

    setTimeout(() => {
        if (success) { 
            resolve("Promise Resolved");
        } else { 
            reject("Promise Rejected");
        }
    }, 2000);
});

myPromise
    .then((message) => console.log("Success:", message))
    .catch((error) => console.log("Error:", error));
