const user1 = {
    firstName : "Manas",
    age : 24,
    about : function(){
        console.log(this.firstName, this.age);
    }
}

// we can write it other way also

const user2 = {
    firstName : "Manas",
    age : 24,
    about(){
        console.log(this.firstName, this.age);
    }
}