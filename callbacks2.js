///////////////////////
//    callbacks     //
/////////////////////

// Function that takes 2 arguments and a callback
// Adds them together and then calls the callback

let adder = (a, b, cb) => {
    console.log(a+b);
    let ans = (a+b);
    cb(ans)
}

// Callback multiplies the answer by 2

let multiby2 =(ans)=> {
    console.log(ans*2);
}


adder(12, 2, multiby2);