// param Destructuring

// use in object
// in react we use it

const person = {
firstName : "Manas",
gender : "male",
}

// general method
// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }
// printDetails(person);


// using param destructuring
// if we already know , that an object is pass to a function 
// then we can use param destructuring
function printDetails({firstName,gender,age}){
console.log(firstName);
console.log(gender);
console.log(age); // undefined as, it is not present in person
}
printDetails(person);