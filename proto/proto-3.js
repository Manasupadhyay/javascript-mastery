// const userMethods = {
//     about: function () {
//       return `${this.firstName} is ${this.age} years old`;
//     },
  
//     is18: function () {
//       return this.age >= 18;
//     },
//   };

// function createUser(firstName,lastName,email,age,address){
//     // create a empty object
//      const user = {};

//          user.firstName = firstName;
//          user.lastName = lastName;
//          user.email = email;
//          user.age = age;
//          user.address = address;
//          // adding function reference(address)
//          user.about = userMethods.about;
//          user.is18 = userMethods.is18;

//      return user;
//  }


// const user1 = createUser("manas","upadhyay","manasshouter@gmail.com",24,"hazri bagh,kankhal");
// const user2 = createUser("kushagra","upadhyay","kushagra23dec@gmail.com",22,"hazri bagh,kankhal");
// const user3 = createUser("swapnil","verma","swapnil@gmail.com",23,"nazibabad");

// console.log(user1.is18());
// console.log(user2.about());
// console.log(user3.about());


// now we have to add one more method to user, so
// we have to add it in userMethods, but we also have to add its
// address(reference) in user object as well
// thats seems fine but suppose we have to write 100 methods
// so we add 100 methods in userMethods but we forget to add
// some method address(reference) in user object, 
// so to solve this problem 
// see the next file :)



const userMethods = {
    about: function () {
      return `${this.firstName} is ${this.age} years old`;
    },
  
    is18: function () {
      return this.age >= 18;
    },
    move : function(){
        return `${this.firstName} is moving`;
    },
    eat : function(){
        return `${this.firstName} is eating`
    },
  };

function createUser(firstName,lastName,email,age,address){
    // create a empty object
     const user = {};

         user.firstName = firstName;
         user.lastName = lastName;
         user.email = email;
         user.age = age;
         user.address = address;
         // adding function reference(address)
         user.about = userMethods.about;
         user.is18 = userMethods.is18;
         // we have to add those method address here
         user.move = userMethods.move;
         user.eat = userMethods.eat;

     return user;
 }


const user1 = createUser("manas","upadhyay","manasshouter@gmail.com",24,"hazri bagh,kankhal");
const user2 = createUser("kushagra","upadhyay","kushagra23dec@gmail.com",22,"hazri bagh,kankhal");
const user3 = createUser("swapnil","verma","swapnil@gmail.com",23,"nazibabad");

console.log(user1.move());
console.log(user2.eat());


// so to solve this problem 
// see the next file :)