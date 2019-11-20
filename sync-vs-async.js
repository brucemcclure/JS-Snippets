///////////////////////////
//    Async vs Sync     //
/////////////////////////

// Sync code = Blocking

const wait = (ms) => {
    let start = new Date();
    let now = start;
     while (now - start < ms) {
         now = Date.now();
     }
}

wait(5000);
console.log("finished");

// Async code = NonBlocking

// Logs 1, 3, 2, 4. (even if setTimeout has 0 seconds)
// Any time there is callback, it gets taken out of the flow. 


console.log(1);

setTimeout ( ()=> {
    console.log(2);
}, 0);

setTimeout ( ()=> {
    console.log(4);
}, 5000);

console.log(3);