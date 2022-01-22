// intro to events
// click

// event add karne ke 3 tarike hai
// 1.) directly add in html element 
// in this we directly use javscript in quotes
// like <button onclick="console.log('you clicked me'"></button>


// 2.) add function to onclick property of button object
// const btn = document.querySelector(".btn-heading");
// console.dir(btn);
// btn.onclick = function(){
//     console.log("you clicked me!!");
// }

// above method is also not good,
// as we can only attached one function at a time to click event

// 3.) using addEventListener(event, callback)
const btn = document.querySelector(".btn-heading");
// function clickMe(){
//     console.log("you clicked me!!!");
// }

// btn.addEventListener("click", clickMe);
// console.dir(btn);

// we can also use arrow function
btn.addEventListener("click" , ()=>{
    console.log("you clicked me!!");
})