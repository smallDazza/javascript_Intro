console.log("Start of the Dice Roller !!")
/**
 * JSDoc Comment - Simple Dice roller function
 * @param {number} diceSize 
 * @returns the dice numbered side.
 */
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
// If we want more functionality, then we use the function with {}, otherwise we can use this shortened version:
const rollDice8 = () => rollDice(8);
console.log("The side you rolled for the 8 sided die is: " + rollDice8())

/**
 * Callback function ( calling a function within a function):
 * @param {*} side 
 * @param {*} callback 
 * @returns 
 */
function customDiceRoll(side, callback) {
    return callback(side); // rollDice(30)
}
result = customDiceRoll(30, rollDice);
console.log(result);

//Function to roll multiple dice
function rollMultipleDice(numdice, diceSize, callback) {
    for (let i = 0; i < numdice; i++) {
        const result = rollDice(diceSize);
        callback(result);
    }
}
rollMultipleDice(3, 6, (result) => console.log("Rolled : " + result));