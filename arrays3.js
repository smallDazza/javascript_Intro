
// iterating an array
// using for of loops OR foreach method:

const numbers = [1, 2, 3, 4, 5, 6];
const letters = ["a", "b", "c"];

for (let number of numbers) console.log(number);

letters.forEach((letter, index) => console.log(index, letter));


// Join method from an array to a string:

const joined = numbers.join(",");
console.log(joined);

//then can be combined with split method to split a string (to an array) and then join back with whatever symbol you want. EG:

const message = "This message is to be split and then joined back together with a syymbol";

const parts = message.split(" ");
console.log(parts);
const rejoined = parts.join("-");
console.log(rejoined);

