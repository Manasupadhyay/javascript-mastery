// how to clone a array

let array1 = ["item1", "item2","item3"];
// 3 methods to clone array
// let array2 = array1.slice(0); // faster among 3
// let array2 = [].concat(array1);
// new way
// using spread operator (...)
let array2 = [...array1];

array1.pop();
console.log(array1);
console.log(array2);
console.log(array1 === array2); // false
// means array1 and array2 points to two different addresses in memory


// how to concatenate two arrays

// let array3 = array1.slice(0).concat(["item4", "item5"]);
// let array3 = [].concat(array1, ["item4", "item5"]);
let array3 = [...array1,"item4", "item5"];
console.log(array3);