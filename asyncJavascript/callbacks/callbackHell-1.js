// callback, callback Hell , pyramid of doom
// asynchronous programming


// task :- 
// change text and color of first h1 in 1sec second h1 in 2 second with there className

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
console.log(heading1);

// here work is done in order
// first setTimeout wait for 1sec and put the callback in callback queue
// and then eventloop check the call stack , is it empty or not
// as global execution context completly run
// now call stack is empty and event loop put callback in callStack
// now a function execution context is created in callstack
// and execute line by line now it detect a setTimeout() and give it to browser
// now setTimeout wait for 1 sec and put callback in callback queue, and same things happen with this callback as well.

setTimeout(()=>{
const className = heading1.classList[0];
heading1.textContent = className;
heading1.style.color = "purple";
setTimeout(()=>{
const className = heading2.classList[0];
heading2.textContent = className;
heading2.style.color = "red";
},1000);
},1000)