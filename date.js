

const now = new Date();
const date1 = new Date("Dec 21 2024 09:00");
const date2 = new Date(2024, 12, 21, 9);
// commonly used to send date to a backend:
const date3 = now.toISOString();

const date4 = now.toDateString();

console.log(now);
console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);