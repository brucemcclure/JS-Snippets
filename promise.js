//////////////////////
//    Promises     //
////////////////////

// promises can have 3 states
// pending - initial state, neither fulfilled nor rejected.
// fulfilled - meaning that the operation completed successfully.
// rejected - meaning that the operation failed.





console.log("b")

let ourPromise = new Promise((resolve, reject)=>{
    setTimeout( ()=> {
        let x = 1;
        let y = 2;

        let answer = x + y;
        resolve(answer);
        // reject(answer);
    }, 2000);
});

console.log("a")
// .then() will run when resolve is called and it is success. Argument is provided by the resolve().
//         Only when the async code returns, then the .then() is run.
// .catch() will run when reject is called and it is failed  Argument provided by the reject().

ourPromise
    .then( (data)=> {
        console.log("then is ran", data);
    })
    .catch( (error)=> {
        console.log("catch is ran",error);
    });

console.log("c");

