console.log("script starts !!!");
const allBtn = document.querySelectorAll(".my-buttons button");
// console.log(allBtn);

allBtn.forEach((btn)=>{
    btn.addEventListener("click", (event)=>{
        let num = 0;
        for(let i=0 ; i< 1000000000; i++ ){
            num +=i;
        }
        
        console.log(event.currentTarget.textContent,num);
    })
})
let outervar = 0;
for(let i=0 ; i< 100000000; i++ ){
    outervar +=i;
}
console.log("outervar ", outervar);
console.log("script ends!!!");