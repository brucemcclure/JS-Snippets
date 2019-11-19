////////////////////////////////////////
//    Real World Example Closures     //
////////////////////////////////////////

validator =(rule)=> {
    return (input)=> {
        return rule.test(input);
    }
}

let validateMin6 = validator(/^.{6,100}$/);                     // Checks if it has 6 chars
let validateStartWithA = validator(/^[Aa].*$/);                 // Checks if it starts with an A

let ans = validateStartWithA("A is this valid");

console.log(ans);