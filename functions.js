//Functions
function calculateArea(length, width) {
    return length * width;
}

let area = calculateArea(5,3);
console.log(area);

//Methods = calling a function from a object

function greet(name) {
    console.log("Hello, " + name + "!!")
}

let person3 = {
    name: "Kylie",
    age: 25,
    city: "Brissy",
    greetingMessage: greet // method
}
//          object.propertyValue
console.log(person3.name);
//          object.propertyFunction
console.log(person3.greetingMessage(person3.name));

// function expressions
const person1 = {
    name: "Rick",
    age: 90,
    city: "Hobart",
    greetingMessage: function() {
        console.log("Hey....Rickyyyy mate !!");
        console.log("Hey my name is " + this.name );
    }
};
console.log(person1.greetingMessage())

const person2 = {
    name: "James",
    age: 35,
    city: "sydney",
    greetingMessage: () => { // arrow function (used often in JS)
        console.log("Gday , im James from sydney");
    }
};
console.log(person2.greetingMessage())

// nested object 
const person4 = {
    name: "Dazza",
    age: 45,
    city: "sydney",
    greetingMessage: greet,
    contact: {
        phone: "024455777",
        mobile: "0444111222",
        voicemailMessage: function() {
            console.log("This message is from a nested object");
        }
    }
}
console.log(person4.contact.phone);
console.log(person4["contact"]["mobile"]);
console.log(person4.contact.voicemailMessage());

console.log(Object.keys(person4));
console.log(Object.keys(person4.contact));

// function declaration:
console.log(walk());

function walk() {
    return "walk";
}
// Anonymous function expression:
const run = function() {
    return "run";
}
const move = run;
// Note = cannot call a function expression before it is defined:
// Hoisting = JS automatically when running code moves function declarations to the top of the code.
console.log(run());
console.log(move());

// using the arguments object (available in every js function):
function sum() {
    let total = 0;
    for (let value of arguments) total += value;
    return total;
}
console.log(sum(2,4,6,8,10))