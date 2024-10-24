// objects in JS are similar to dictionaries in python = key value pairs

const person1 = {
    name: "Rick",
    age: 90,
    city: "Hobart"
};
// an objects property can be called using the dot or brackets method:
console.log(person1.name);
console.log(person1["age"]);
console.log(person1.city);

const person2 = {
    name: "Lucy",
    age: 75,
    city: "Sydney"
};

console.log(person2["name"], person2.age, person2.city);
console.log(person2.age);
console.log(person2.city);