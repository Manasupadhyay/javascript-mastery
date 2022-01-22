// methods

// inside object this keyword represent the caller object ; 
// object which calls the function, that can be access through this keyword
// inside the object
function personInfo(){
    console.log(`my name is ${this.firstName} and age is ${this.age}` );
}

const person1 = {
    firstName : "manas",
    age : 8,
    about: personInfo,
}
const person2 = {
    firstName : "kushagra",
    age : 18,
    about: personInfo,
}
const person3 = {
    firstName : "swapnil",
    age : 28,
    about: personInfo,
}

person1.about();
person2.about();
person3.about();