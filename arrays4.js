// USING DIFFERENT METHODS ON ARRAYS 

const names = [
    {id:1 , name: "Dack"},
    {id:2, name: "dazza"}
];

const result = names.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1; 
    if (nameA > nameB) return 1;
    return 0; 
});

console.log(result);


const numbers = [2,4,-3,8];

const everyElementPositive = numbers.every((value) => {
    return value >= 0;
});

const someElementPositive = numbers.some((value) => {
    return value >= 0;
});

const filterNumbers = numbers.filter((value) => {
    return value >= 0;
});
// map & join to create a string for html use :
const mapItemsToString = filterNumbers.map((number) => {
    return "<li>" + number + "<li>";
});

const html = "<ul>" + mapItemsToString.join("") + "<ul>";

const mapItemsToObject = filterNumbers.map((number) => {
    return {value: number};
});

console.log(everyElementPositive);
console.log(someElementPositive);
console.log(filterNumbers);
console.log(html);
console.log(mapItemsToObject);

// CHAINING METHODS =

const items = [1,2,3,4,5,22,77,157];

const chainedResult = items
    .filter((value) => {return value >= 2})
    // map to create an object:
    .map((value) => {return {key: value}})
    // then filter the object:
    .filter((obj) => { return obj.key > 10});

console.log(chainedResult);

// add all the values in the array together:
const sum = items.reduce((previousVal, currentVal) => { return previousVal + currentVal});

console.log(sum);



