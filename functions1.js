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

// JS allows the parameters to be blank,
// then using the arguments object (available in every js function):
function sum() {
    let total = 0;
    for (let value of arguments) total += value;
    return total;
}
console.log(sum(2,4,6,8,10))

//BUT same thing using rest operator & reduce method;
// Rest operator (same as spread BUT in functions):
function sum2(...args){
    return args.reduce((a,b) => a + b );
}
console.log(sum2(1,10,20,30,40));
