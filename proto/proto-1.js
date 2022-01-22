const user = {
    firstName : "Manas",
    lastName : "Upadhyay",
    email: "Manasshouter@gmail.com",
    age : 24,
    address : "hazari bagh, kankal, haridwar",
    about : function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18: function(){
        return this.age >=18;
    }
}

// const aboutUs = user.about();
// console.log(aboutUs);

// lets say we want to make 100 objects
// by above method its tedious,


// we can use function, to generate object for us,
// we pass required information to i.e required to make a object
// and that function , returns a object 
// so, we have to call function and our object is created

// in short
// 1.function (function create object)
// 2. add key value pair
// 3. object ko return karega 
// lets see how we can do this,

function createUser(firstName,lastName,email,age,address){
   // create a empty object
    const user = {};
    
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.age = age;
        user.address = address;
        user.about = function(){
            return `${this.firstName} is ${this.age} years old`;
        }
        user.is18 = function(){
            return this.age >= 18;
        } 
    
    return user;
}

const user1 = createUser("manas","upadhyay","manasshouter@gmail.com",24,"hazri bagh,kankhal");
console.log(user1);

const user2 = createUser("kushagra","upadhyay","kushagra23dec@gmail.com",22,"hazri bagh,kankhal");
console.log(user2);

console.log(user1.about());
console.log(user2.about());

// isme abhi kamiya bahot he
// check next file 