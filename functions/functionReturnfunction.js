// function returning function

// function myFunc(){
    
//     function hello(){
//         console.log("hello world");
//     }
//     // return function body
//     return hello;
// }

// // returned function body assign to hello
// // now hello is also a function
// const helloWorld = myFunc();
// helloWorld();


// another way of writing

function myFunc(){
    return function(){
        return "manas"
    }
}

const helloWorld = myFunc();
const name = helloWorld();
console.log(name);