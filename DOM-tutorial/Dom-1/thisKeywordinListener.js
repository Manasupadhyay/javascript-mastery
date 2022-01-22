// this keyword

const btn = document.querySelector(".btn-heading");

// in normal function value of 'this' is caller object(on which the event is attached)

btn.addEventListener("click", function (){
    console.log(this); // btn
    console.log("you clicked me!!");
})

// in case of arraow function value of 'this' is  window itself
btn.addEventListener("click" , ()=>{
    console.log(this);  // window
    console.log("you clicked me!!");
})


// example
// value of "this" in arrow function is , the value of "this" in its lexical environment
// as we seen in below code , the lexical environment of dob is getAge function
// and value of "this" in getAge is person, so "this" value of dob is also person

    const person = {
        name : "manas",
        age : 34,
        getAge : function(){
            // lexical scope of dob function
            console.log(this.age);
            console.log(this); // person object
            const dob = ()=>{
                console.log("dob :)");
                console.log(this); // person object
            }
            dob();
        }
    }

    console.log(person.getAge());