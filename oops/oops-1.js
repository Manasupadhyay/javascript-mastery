// function CreateUser(firstName,lastName,email,age,address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// }
// // using prototype object of createUser to add methods of userMethod object
// CreateUser.prototype.about = function () {
//      return `${this.firstName} is ${this.age} years old`;
//    };
// CreateUser.prototype.is18 = function () {
//      return this.age >= 18;
//    };

// CreateUser.prototype.move = function(){
//        return `${this.firstName} is moving`;
//    };
// CreateUser.prototype.eat = function(){
//        return `${this.firstName} is eating`
//    };

// console.log(typeof (CreateUser.prototype));


// const user1 = new CreateUser("manas","upadhyay","manasshouter@gmail.com",24,"hazri bagh,kankhal");
// const user2 = new CreateUser("kushagra","upadhyay","kushagra23dec@gmail.com",22,"hazri bagh,kankhal");
// const user3 = new CreateUser("swapnil","verma","swapnil@gmail.com",23,"nazibabad");

// console.log(user1.move());
// console.log(user2.eat());
// console.log(user3.eat());


// we can create above behaviour using class as well

// in es5(2016) , there introduce class keyword
// it create above code , very neat and clean
// class are fake in javascript
// classes just do above code , but syntax of
// class is short and more readable

class CreateUser {
  constructor(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }

  about() {
    return `${this.firstName} is ${this.age} years old`;
  }
  is18() {
    return this.age >= 18;
  }
  move() {
    return `${this.firstName} is moving`;
  }
  eat() {
    return `${this.firstName} is eating`;
  }
  func(a){
      console.log(a);
  }
}


const user1 = new CreateUser("manas","upadhyay","manasshouter@gmail.com",24,"hazri bagh,kankhal");
const user2 = new CreateUser("kushagra","upadhyay","kushagra23dec@gmail.com",22,"hazri bagh,kankhal");
const user3 = new CreateUser("swapnil","verma","swapnil@gmail.com",23,"nazibabad");

console.log(user1.move());
console.log(user2.eat());
console.log(user3.eat());
user1.func("manas");

