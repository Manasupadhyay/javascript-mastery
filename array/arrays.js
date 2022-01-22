// intro to arrays
// reference type
// all reference types are objects
// how to create arrays

// ordered collection of items

let fruits = ["mango", "apple", "banana", "kiwi"];
let numbers = [1,2,3,4,5];
let mixed = [1,2,3.9, "manas", null, false];
console.log(fruits);
console.log(numbers);
console.log(mixed);

// arrays are mutable, we can change value of any index
fruits[1] = "papaya";
console.log(fruits);

// arrays are objects
console.log(typeof fruits); // object

// creating a object literal
let obj = {};

// check wether a reference type is array or not
console.log(Array.isArray(obj));  // false
console.log(Array.isArray(fruits));  // true

// array indexing