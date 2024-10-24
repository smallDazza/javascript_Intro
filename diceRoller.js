console.log("Start of the Dice Roller !!")

function rollDice(diceSize = 6) {
    console.log(`Rolling a ${diceSize} -sided die....`);
    let diceSide = Math.ceil(Math.random() * diceSize);
    //console.log(diceSide);
    return diceSide;
}
// calliing the function:
rollDice(); // or
rollDice(diceSize=12); // or
rollDice(22);

// specific dice roller function that calls the simple function:
// using function expression
const rollDice25 = function() {
    rollDice(25);
}
rollDice25();
// using arrow function / unanonymous function
const rollDice15 = () => {
    return rollDice(15);
    // or 
    // result = rollDice(15);
    // return result;
}
let diceSide15 = rollDice15();
console.log(`The side you rolled on the 15 side die is: ${diceSide15} !`)

const rollDice8 = () => rollDice(8);
console.log("The side you rolled for the 8 sided die is: " + rollDice8())
