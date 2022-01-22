// using new keyword we can do this very easily
// so new keyword do 3 things for us
// 1. this = {}
// 2. return this
// 3. set __proto__ of this keyword to createUser's prototype object 

// it is also called constructor function
// as it construct a object for us

// note:- there is a convention, to know which function 
// we can use with new keyword, we start function name with 
// captital letter 
function CreateUser(firstName,lastName,email,age,address){
         this.firstName = firstName;
         this.lastName = lastName;
         this.email = email;
         this.age = age;
         this.address = address;
    }
// using prototype object of createUser to add methods of userMethod object
CreateUser.prototype.about = function () {
          return `${this.firstName} is ${this.age} years old`;
        };
CreateUser.prototype.is18 = function () {
          return this.age >= 18;
        };

CreateUser.prototype.move = function(){
            return `${this.firstName} is moving`;
        };
CreateUser.prototype.eat = function(){
            return `${this.firstName} is eating`
        };

console.log(typeof (CreateUser.prototype));


const user1 = new CreateUser("manas","upadhyay","manasshouter@gmail.com",24,"hazri bagh,kankhal");
const user2 = new CreateUser("kushagra","upadhyay","kushagra23dec@gmail.com",22,"hazri bagh,kankhal");
const user3 = new CreateUser("swapnil","verma","swapnil@gmail.com",23,"nazibabad");

console.log(user1.move());
console.log(user2.eat());
console.log(user3.eat());

// using for in loop

// it prints all key , objects keys + keys in __proto__ also
// for(let key in user1){
//     console.log(key); 
// }

// if we have to restrict this behaviour 
// we use hasOwnProperty(key) method
// now only user1's own property will display
// not the __proto__ one's 

for(let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}
