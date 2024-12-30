// combine or merge 2 arrays:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbers2 = ["1", "2", "3", "4", "5"];

const numbers3 = [
    {
        id: 1, name: "dazza"
    },
    {
        id:"a", name: "cars"
    }
];


// const combined = numbers.concat(numbers3);
// OR same as using the spread operator:
const combined = [...numbers, ...numbers3];

// use slice again to cut, exclude or copy (leave blank: slice()):
const slice = combined.slice(9);
const slice2 = combined.slice();
//OR again use the spread operator to create a copy array of comibined:
const copy = [...combined]; 

console.log(combined);
console.log(slice);
console.log(slice2);
console.log(copy);




