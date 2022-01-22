// string Methods

// trim() -> remove starting and ending spaces from  a string
// toUpperCase() -> return a new string with all uppercase
// toLowerCase() -> return a new string with all lowercase
// slice() -> return a sub string

// let firstName = "    Manas    ";
// console.log(firstName.length);
// // trim() return a new string,
// let newString = firstName.trim();
// console.log(newString); // "Manas"
// console.log(newString.length);


// toUpperCase()

// let lastName = "upadhyay";
// let captialName = lastName.toUpperCase();
// console.log(captialName);


// toLowerCase()

// let lname = "GOku";
// let lowerCase = lname.toLowerCase();
// console.log(lowerCase);

// slice()
// it takes two parameter
// start index 
// end index (not included)

let userName = "manasUpadhyay";
let newString = userName.slice(1,6); // 6 index is not included
console.log(newString);
// note if we give only 1 parameter
// then string starts from that parameter to the end of the string

// ex
let newName = userName.slice(5); // Upadhyay (5 till end of the string)
console.log(newName);
