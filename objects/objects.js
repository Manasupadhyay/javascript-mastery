// objects (reference type)
// arrays are good but not sufficient
// for real world data
// objects store key value  pairs
// object don't have indexes

// how to create objects

// also called object literal ( {} )

// note-> by default , keys are string type
const person = {
    name : "manas",
    age : 24,
    hobbies : ["watching anime", "thriller movies", 'sleeping' ]
}

// how to access data from objects

// using dot notation

console.log("dot notation");
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);
console.log(person.hobbies[2]);

// bracket notation
console.log("bracket notation")
console.log(person["name"]); // by default keys are string type in javascript

console.log(person["hobbies"]);

// how to add key value pair to objects

// using dot notation
person.gender = "male";
console.log(person);

// using bracket notation
person["address"] = "hazari bagh , kankhal";
console.log(person);