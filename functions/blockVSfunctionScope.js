// block scope vs function scope
// let and const are block scope
// var is function scope

// note:- whole js file act as a main function

// block scope -> 
// variables created using let and const are block scope
// and only accessable inside that block only
// and not accessable from outside the block
{
    let myVar = "manas"
    console.log(myVar);
}
// console.log(myVar); // reference error


// example
// function myApp(){
//     if(true){
//         let firstName = "manas";
//         console.log("hello "+ firstName);
//     }
//     // let is a block scope, it only access inside 'if' block
//     console.log(firstName); // reference error
// }
// myApp();



// example

function myApp(){
    // var can be used anywhere inside the function
    if(true){
        var firstName = "manas";
        console.log("hello "+ firstName);
    }
    //  var is a functional scope so it is accessible outside 'if' block
    console.log(firstName); // run sucessfully
}
// but outside the function scope it can't be accessed
console.log("hello "+ firstName); // reference error
myApp();