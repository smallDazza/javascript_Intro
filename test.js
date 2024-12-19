// function changeNumber(number) {
//     return number % 2 === 0 ? number : number + 1;
//   }
  
//   module.exports = changeNumber;
  
//   console.log(changeNumber(4));

function maxOFTwo(num1, num2) {
  return (num1 > num2) ? num1 : num2;
}

let result = maxOFTwo(12,11);
console.log(result);

function isLandscape(width, height) {
  return (width > height);
}

console.log(isLandscape(10,99));


const output = fizzBuzz(true);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number")
    return NaN;

  if ((input % 3 === 0) && (input % 5 === 0))
    return 'FizzBuzz';

  if (input % 3 === 0)
    return 'Fizz';

  if (input % 5 === 0)
    return "Buzz";


  return input;
}
