// add click event to multiple buttons

const allBtn = document.querySelectorAll("button");
console.log(allBtn);
// using for of loop

// for(let btn of allBtn){
//     btn.addEventListener("click", function(){
//         console.log(this);
//         console.log(this.textContent);
//     })
// }

// simple for loop
// for(let i=0; i< allBtn.length; i++){
//     allBtn[i].addEventListener("click", function(){
//         console.log(this);
//         console.log(this.textContent);
//     })
// }

// forEach method

allBtn.forEach((btn)=>{
btn.addEventListener("click", function(){
    console.log(this);
    console.log(this.textContent);
})
})