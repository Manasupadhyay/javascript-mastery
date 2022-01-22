// array Destructuring
// extract values from array

const myArray = ["value1", "value2", 'value3','value4'];

// long method
// let myVar1 = myArray[0];
// let myVar2 = myArray[1];
// console.log("myVar1", myVar1);
// console.log("myVar2", myVar2);

// short method
// array destructuring

// it start from index 0, and start assigning value
// to the left side variables
// here myVar1 and myVar2
// let [myVar1, myVar2] = myArray;
// console.log("myVar1", myVar1);
// console.log("myVar2", myVar2);

// here myvar3 contains rest of the element of array as an array
// also we can skip elements using comma
// here we skip 2nd index of array
let [myVar1,myVar2, , ...myVar3] = myArray;
console.log("myVar1", myVar1);
console.log("myVar2", myVar2);
console.log("myVar3", myVar3);  // array