////////////////////////////////////////
//    ES6 Classes vs Prototype In     //
////////////////////////////////////////


///////////////////////////////////
//    Prototype Inheritance     //
/////////////////////////////////


// This is a function that creates objects
function Shirt(brand){
    this.brand = brand
}

// Adding a new property to the object type
Shirt.prototype.size = "small";

// Making a new  object called shirt onw.
let shirt1 = new Shirt("Chciken");

console.log(shirt1.size);

class Shirt {
    constructor(brand) {
        this.brand = brand;
    }
    shoutBrand() {
        console.log(`I am a ${this.brand}`);
    }
}

let shirt1 = new Shirt("pickles");

console.log(shirt1.__proto__);

////////////////////////////////////
//    ES6 Classes inheritance     //
///////////////////////////////////


class Frog {
    constructor(name) {
        this.reptile = true;
        this.name = name;
    }
    swim() {
        console.log("I swim with my legs");
    }
}

class Tadpole extends Frog {
     constructor(name) {
        super(name);
        this.tail = true;
        }
    
        swim() {
            console.log("I swim with my tail");
        }
}

let jimmy = new Tadpole("Tadpoley");
let fimmy = new Frog("Foggy");


// console.log(fimmy.swim());
// console.log(jimmy.swim());


class Reptile {
    constructor() {
        this.coldBlooded = true;
    }
}

class Snake extends Reptile {
    constructor() {
        super();
        this.legs = 0;
    }
}

let snape = new Snake; 

console.log(snape.coldBlooded, snape.legs);