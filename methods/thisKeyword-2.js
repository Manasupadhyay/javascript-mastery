// window is a global object
// console.log(window);
// console.log(this);


// check window === this
// console.log(window === this); // true


// this keyword in a function

// if we define a function directly in file
// then it is attach to global object
// so if we print this keyword in function
// it print window object
// function myFunc(){
//     function myFunc2(){
//         console.log(this); // window
//     }
//     myFunc2();
//     console.log("hello");
//     console.log(this); // window
// }

// myFunc(); // here implicitly window is attach to it, as window is global 
// above statement we can write this as well
// window.myFunc(); 

// restrict this behaviour
// we use "use strict"


// function myFunc(){
//     "use strict";
//     function myFunc2(){
//         console.log(this); // window
//     }
//     myFunc2();
//     console.log("hello");
//     console.log(this); // window
// }

// myFunc();  // it gives undefined

// if we exlicitly write window before it
// then it works
// window.myFunc();