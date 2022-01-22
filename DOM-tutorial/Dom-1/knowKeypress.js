// keypress event
// mouseover event


// know which key is pressed by user

const body =  document.body;
body.addEventListener("keypress", (event)=>{
    console.log(event.key);
})


// mouseover event

const mainBtn = document.querySelector(".btn-heading");

mainBtn.addEventListener("mouseover", (e)=>{
  console.log("mouseover event occur!!");
})


// mouseleave event

mainBtn.addEventListener("mouseleave", ()=>{
    console.log("mouseleave event occur!!");
})