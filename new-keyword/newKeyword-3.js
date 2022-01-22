
let numbers1 = [1,2,3];
// how numbers array access all the function 
console.log(numbers1);
// if we check in numbers, there is no function

// internally array is created using new keyword
let numbers2 = new Array(1,2,3);

// as we know , how new keyword works
// 1. it create a empty object
// 2. and return it
// and main point :) , set the __proto__ property of object
// to Array's function prototype object, where all the array methods are
// define
// so later object can easily use , the methods through its __proto__
// property


console.log(Object.getPrototypeOf(numbers2));

// note:- Array function's prototype is an array , not an object