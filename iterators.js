
let fruitJuice = [
    "oranges",
    "bananas",
    "apples",
    "mangoes",
    "lemons"
];

// for loops
for (let index = 0; index < fruitJuice.length; index++){
    const element = fruitJuice[index];
    console.log(element);
}

// iteration starts at 0 until reaches 4, do a thing and increase by 1 every time we do that thing:
for (let i = 0; i < 5; i++){
    // string interpolation uses the backticks
    console.log(`This is the ${i} iteration of the second for loop`);
    // or string concatenation
    console.log("This is the standard " + i + " iteration of the second for loop")

}
// forEach loop
fruitJuice.forEach(element => {
    console.log(" For each loop result: " + element.toLocaleUpperCase());
})

// for of loop
for (const fruit of fruitJuice){
    console.log(" For of loop result: " + fruit)
}

// map -> map returns a new array, and every element has a change applied on it.

let fruitJuiceShortened = fruitJuice.map(fruit => {
    return fruit.substring(0,3);
})
console.log(fruitJuiceShortened)

// filter -> returns a new array , only with the elements that meet the condition.
let nonCitrusFruits = fruitJuice.filter(fruit => {
    return fruit != "oranges" && fruit != "lemons"
})
console.log(nonCitrusFruits);