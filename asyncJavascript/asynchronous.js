// javascript is a synchronous single threaded language
// synchronous programming vs asynchronous programming 
// in synchronous programming code runs line by line, if 1st line is executing then 2nd line has to wait , until line 1 is finished 
// its execution, we can say it , line 1 blocks the code of execution, for the further code

// example

// console.log("script start!!");

// // this code blocks the execution of code
// for(let i=1; i<100000; i++){
//     console.log("running");
// }

// // this code has to wait 
// console.log("script ends!!");


// asynchronous programming
// setTimeout(cb,time) -> call the callback function after a give time, we mention in the setTimeout()
// here time is the minimum time it has to wait, maximum can be anything
// example 1
// console.log("script start!!");
// non blocking code
// setTimeout(()=>{
// console.log("inside setTimeout");
// },1000);
// console.log("script ends!!");


// example 2
// console.log("script start!!");
// // non blocking code
// setTimeout(()=>{
// console.log("inside setTimeout");
// },1000);
// for(let i=1; i<100; i++){
//     console.log("inside for loop");
// }
// console.log("script ends!!");


// setTimeout() return an id 
// clearTimeout() -> it is use to remove the setTimeout, we say to browser, we don't need that callback anymore
// example 3
console.log("script start!!");
// non blocking code
const id = setTimeout(()=>{
console.log("inside setTimeout");
},1000);
for(let i=1; i<100; i++){
    console.log("inside for loop");
}
console.log("clearing the setTimeout");
clearTimeout(id);
console.log("script ends!!");