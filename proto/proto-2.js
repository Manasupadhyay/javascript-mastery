// isme abhi kamiya bahot he

// function createUser(firstName,lastName,email,age,address){
//     // create a empty object
//      const user = {};

//          user.firstName = firstName;
//          user.lastName = lastName;
//          user.email = email;
//          user.age = age;
//          user.address = address;
//          user.about = function(){
//              return `${this.firstName} is ${this.age} years old`;
//          }
//          user.is18 = function(){
//              return this.age >= 18;
//          }

//      return user;
//  }

//  const user1 = createUser("manas","upadhyay","manasshouter@gmail.com",24,"hazri bagh,kankhal");

//  const user2 = createUser("kushagra","upadhyay","kushagra23dec@gmail.com",22,"hazri bagh,kankhal");

//  const user3 = createUser("swapnil","verma","swapnil@gmail.com",23,"nazibabad");

// when we create above three objects
// there will be 3 copies of each method
// total 6 methods created
// if we create more objects then more methods will be created
// but method are not depend on individual object
// so we do is, writing their defination separte and only
// add reference(address) of method

const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} years old`;
  },

  is18: function () {
    return this.age >= 18;
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
    
         return user;
     }
    

  const user1 = createUser("manas","upadhyay","manasshouter@gmail.com",24,"hazri bagh,kankhal");
  const user2 = createUser("kushagra","upadhyay","kushagra23dec@gmail.com",22,"hazri bagh,kankhal");
  const user3 = createUser("swapnil","verma","swapnil@gmail.com",23,"nazibabad");
 
  console.log(user1.is18());
  console.log(user2.about());
  console.log(user3.about());

  // here only 2 method are created
  // if we create 100 object then also ,
  // only 2 method will be created, and 
  // we add reference of these method ,
  // to object property