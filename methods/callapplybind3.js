const user1 = {
    firstName:"harshit",
    age: 8,
    about: function(){
        console.log(this);
        console.log(this.firstName,this.age);
    }
}

// don't do this mistake

//note:- binding happens when we call a function with a object
user1.about(); // works fine

// here we only assign the function to another variable
// let myFunc = user1.about;
// myFunc(); 
// this means ;- window.myFunc(),
// here this keyword represent window object
// and window object doesn't have any property with these names

// solve this issue
// here we bind this keyword with user1, then assign it
let myFunc = user1.about.bind(user1);
myFunc();
