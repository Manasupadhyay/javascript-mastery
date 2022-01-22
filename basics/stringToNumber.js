// typeof operator

// data type (primitive data type)
// string ("Manas")
// number (12)
// boolean  (true or false)
// undefined
// null
//BigInt
// Symbol

let age = 24;
let firstName = 'manas';

console.log(typeof age); // number
console.log(typeof firstName); // string

// convert number to string.

// trick
age = age + "";
console.log(typeof age); // string

// another method
let rollno = 19;
rollno = String(rollno);
console.log(typeof rollno); // string


// convert string to number

// trick
let id = "234";
id = +id; // convert to number
console.log(typeof id); // number

// another method
let pincode = "249408";
pincode = Number(pincode);
console.log(typeof pincode); // number