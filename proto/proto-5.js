// here we give soln of proto-3 file 

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
    // below line create a empty object
    // also set __proto__ property of user to userMethods
    // now if a property is not found in user object
    // javascript will search in __proto__ property of user
    // __proto__ is a reference, that create a chain
     const user = Object.create(userMethods);

         user.firstName = firstName;
         user.lastName = lastName;
         user.email = email;
         user.age = age;
         user.address = address;
         return user;
 }

const user1 = createUser("manas","upadhyay","manasshouter@gmail.com",24,"hazri bagh,kankhal");
const user2 = createUser("kushagra","upadhyay","kushagra23dec@gmail.com",22,"hazri bagh,kankhal");
const user3 = createUser("swapnil","verma","swapnil@gmail.com",23,"nazibabad");

console.log(user1.move());
console.log(user2.eat());
console.log(user3.eat());
