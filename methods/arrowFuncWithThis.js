// arrow function
// arrow function doesn't have this keyword,
// it takes 'this' from its surroundings, one level up

// arrow function takes this keyword value from its surrounding's
// one level up
// call,apply, and bind method doesn't work with arrow function


const user1 = {
    firsName : "Manas",
    age : 24,
    about: ()=>{
        console.log(this);
        console.log(this.firsName,this.age);
    }
}

// user1.about();  // undefined
// user1.about.call(user1); // this doesn't work in case of arrow function



