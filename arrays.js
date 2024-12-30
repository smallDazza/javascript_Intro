let numbers = [3, 4, 5, 6, 3];

// add to the end of an array:
numbers.push(5,6);
//remove from end = pop()

//add to the begining of an array:
numbers.unshift(1,2);
// remove from begining = shift()

// add OR remove  to the middle of an array:
//this is adding:
numbers.splice(3, 0, "a","b");
//remove would be:(removing 1 element from index 2)
// numbers.splice(2, 1)


console.log(numbers);
console.log(numbers[3]);
console.log(numbers.indexOf(2));
console.log(numbers.indexOf(3, 4));
console.log(numbers.includes(3));

// when finding reference types (objects) in arrays = must use the find methods:
const courses = [
    {id: 1, course_name: "math"},
    {id: 2, course_name: "english"},
    {id: 3, course_name: "science"}
];

const  course1 = courses.find((course) => {
    return  course.course_name === "math";
});

const  course2 = courses.findIndex((course) => {
    return  course.course_name === "science";
});

// instead of function syntax == use the arrow function syntax => 
    // arrow functions used where a callback function is needed OR a funcction as a parameter required.

console.log(course1);
console.log(course2);

//to delete an array:

numbers = [];
numbers.length = 0;
console.log(numbers);

