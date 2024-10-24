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
