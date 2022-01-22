// use const for creating array

// const restrict the array to change its address
// fruits reference can't point to another array
const fruits =["apple", "mango", "banana"];

// but value of array can be changed

fruits.push("grapes");
console.log(fruits);