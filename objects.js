// objects in JS are similar to dictionaries in python = key value pairs

const person1 = {
    name: "Rick",
    age: 90,
    city: "Hobart"
};
// an objects property can be called using the dot or brackets method:
// console.log(person1.name);
// console.log(person1["age"]);
// console.log(person1.city);

const person2 = {
    name: "Lucy",
    age: 75,
    city: "Sydney"
};

// console.log(person2["name"], person2.age, person2.city);
// console.log(person2.age);
// console.log(person2.city);

const circle =  {
    radius : 1,
    location : {
        x: 1,
        y: 2
    },
    isVisible: true,
    draw: function() {
        console.log("draw");
    }
};

// factory function (in Camel case):

function createCircle(radius){
    return {
        radius,
        draw(){
            console.log("draw circle");
        }
    }
};

// const create = createCircle(2);
// console.log(create);
// console.log(create.draw());

// Constructor function (in Pascal case):

function CreateCircle2(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw circle 2");
    }
};

const create2 = new CreateCircle2(2);
console.log(create2);
console.log(create2.draw());

const rectanle = {
    lemgth : 100,
    draw(){
        console.log("draw");
        }
}

rectanle.width = 200;
rectanle.area = function(){};

console.log(rectanle);
// for in loops for iterating over a object:
for (let key in rectanle) console.log(key, rectanle[key]);
// for of loops for iterating over an array OR over a object must use the Object.keys() method:
for (let key of Object.keys(rectanle)) console.log(key);
// if a property exists in an object use the in operator:
if ("width" in rectanle) console.log("yes");
// using the Object.assign to clone a existing object to a new one:
const anotherObj = Object.assign({
    colour: "green"
}, rectanle)
console.log(anotherObj)
// OR can use the spread operator to do the same thing:
const thirdObj = {...rectanle};
console.log(thirdObj);


const liveAddress = {
    street: "testing st",
    city: "Sydney",
    postcode: 2147
}
function showAddress(address){
    for (let key in address) console.log(key, address[key]);
}
showAddress(liveAddress);