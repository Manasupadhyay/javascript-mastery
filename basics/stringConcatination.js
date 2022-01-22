// string concatination

// let string1 = "Manas";
// let string2 = "Upadhyay";
// let fullName = string1 + " " + string2;
// console.log(fullName);


// observe carefully
// let string1 = "12";
// let string2 = "72";
// let newString = string1 + string2;
// console.log(newString); // 1272


// now see
let string1 = "12";
let string2 = "72";
let newString = +string1 + +string2; //(by adding + , we convert them to number)
console.log(newString);
console.log(typeof newString);
