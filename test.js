function changeNumber(number) {
    return number % 2 === 0 ? number : number + 1;
  }
  
  module.exports = changeNumber;
  
  console.log(changeNumber(4));