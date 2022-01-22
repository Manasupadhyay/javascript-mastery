// new Keyword

// new keyword do three things
// 1. create a empty object, set it to , this = {}
// 2. return this
// 3. set __proto__ to function.prototype

// example

function createUser(firstName, age){
    console.log(this);
    this.firstName = firstName;
    this.age = age;
}
createUser.prototype.about = function (){
    return `${this.firstName} is ${this.age} years old`;
}

const user1 = new createUser("manas", 24);
console.log(user1);
console.log(user1.about());

// here new keyword , first create a empty object
// and add this = {},
// then return this
// and set __proto__ property of 'this' to  createUser's prototype object 
// this = {}
// this = Object.create(createUser.prototype);


// create another user
const user2 = new createUser("kushagra", 22);
console.log(user2);
console.log(user2.about());