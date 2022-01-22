// how to iterate object
const person = {
    name : "manas",
    age : 24,
    hobbies : ["watching anime", "thriller movies", 'sleeping' ]
}


// to ways to iterate

// for in loop
// Object.keys

// for in loop
for(let key in person){
    console.log(person[key]);
}
// print key and value pair
for(let key in person){
    console.log(`key: ${key}  value: ${person[key]}`);
}

// Object.keys()
// return array of keys of the passing object
console.log(Object.keys(person));
console.log(Array.isArray(Object.keys(person))); // true


// using for of loop
for(let key of Object.keys(person)){
    console.log(person[key]);
}