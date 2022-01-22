// when function is outside the object

function intro (address,pincode){
    console.log(this.firstName, this.age,address,pincode);
}

const user1 = {
    firstName: "Manas",
    age : 24,
}
const user2 = {
    firstName: "kushagra",
    age : 22,
}
const user3 = {
        firstName: "swapnil",
        age : 23,
}

// we bind this keyword with user1
intro.call(user1,"hazri bagh",249408);

// we bind this keyword with user2
intro.apply(user2,["hazari, bagh",249408]);

// we bind this keyword with user3 and in bind(), it return , that function
const myFunc = intro.bind(user3,"najibabad",269834);
myFunc();