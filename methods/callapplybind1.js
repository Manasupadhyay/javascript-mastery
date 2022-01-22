// const user1 = {
//     firstName : "Manas",
//     age : 24,
//     about : function(){
//         console.log(this.firstName, this.age);
//     },
//     intro : function(address,pincode){
//         console.log(this.firstName, this.age,address,pincode);
//     }
// }
// const user2 = {
//     firstName: "kushagra",
//     age : 22,
    
// }
// const user3 = {
//     firstName: "sourabh",
//     age : 25,

// }

// user1.about.call(obj),
// we mention binding of this keyword, to which object, call()'s first argument
// here obj represent this keyword, which is use in about function

// we want to use about function of user1 in user2
// to achieve this we use, call()

// user1.about.call(user2);

// if we use call() then its mandatory to pass, a object
// that object is represent this keyword in object.

// user1.about.call();
// above code gives undefined, as its mandatory to pass, object which is used
// in user1

// user1.about.call(user1); // works fine

// we can pass argument in call()
// user1.intro.call(user2,"hazari bagh, kankhal",249408)

// apply() works same as call(), only difference is, 
// in apply(), we pass argument of function in a array
//  user1.intro.apply(user1,["hazari bagh",249408]);
 
 // bind() method also works same, but it return the function
 // so, to call the function, we have to store it in a variable
 // then call using that variable

//  const myFunc = user1.intro.bind(user3,"sandesh nagar,kankhal",249408);
//  myFunc();
 // its same as call(), but call(), calls immediately,
//  whereas bind(), return a function, so we can call it later



