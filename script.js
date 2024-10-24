//difference in using var or let:
function test() {
    if (true){
        var x = 5
    }
    console.log(x) // 5:  var used and called inside the function.

    if (true){
        let y = 5
        const z = 6
    }
    console.log(y) 
    console.log(z) // both undefined: because let & const can only be used and called inside the block (not outside).
};
test()

console.log("Hello World !!")

let someMessage = "Apples are red!";

console.log(someMessage);

if (someMessage) {
    console.log("Conditional statement");
}
let someNumber = "4";
if (someNumber == 10) {
    console.log(" We have 10 !!");
}

if (someNumber >= 5){
    console.log(" We have 5 or more !!");
} else {
    console.log("Less than 5 !");
}

//ternary operators
                                                        //seperators ? & : . ? = truthy action after ? . : = falsey action after :
let someCoolMessage = (someMessage === "Apples are red!") ? someMessage.toLocaleUpperCase() : "Default message here.";

if (someMessage === "Apples are red"){
    someCoolMessage = someMessage.substring(0,4).toLocaleUpperCase();
} else {
    someCoolMessage = "Default message from the else statement  ";
}

console.log(someCoolMessage);

// Switch operator

someMessage = "Mango";

switch (someMessage){
    case "Orange":
        console.log("we have oranges.");
        break;
    case "Banana":
        console.log(" we have bananas");
        break;
    case "Mango":
        console.log("we have mangoes");
        break;
    default:
        console.log("we have a fruit salad");
}

// Shor circuit logic 
someMessage = "Mango";
// evaluate if the first part is true, if it is, we return the second part.
// if the first part is false, it returns the first part: "", 0 , false boolean.
let circuitMessage = someMessage && "We have a new message";

console.log(circuitMessage);

// It returns the first part that is true.
// If both parts are false, it will return the second one.
circuitMessage = 0 || 11;

console.log(circuitMessage);


