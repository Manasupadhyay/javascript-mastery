// difference between dot and bracket notation

const person = {
    name : "manas",
    age : 24,
    "person hobbies" : ["watching anime", "thriller movies", 'sleeping' ]
}

// if we have a key with more than one word

// with dot notation
// error
// console.log(person.person hobbies);

// with  bracket notation
// run fine
console.log(person["person hobbies"]);


// another different
const key = "email";
person.key = "manasshouter@gmail.com"; // it adds key as key, not email as a key
console.log(person);

// using bracket notation
person[key] = "manasshouter@gmail.com"; // it adds email as a key
console.log(person);