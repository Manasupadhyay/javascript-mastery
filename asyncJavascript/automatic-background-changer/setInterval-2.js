const body = document.body;
const btn = document.querySelector("button");

const id = setInterval(()=>{
  
 const randomColor = generateColor();
 body.style.backgroundColor=randomColor;
},1000)

function generateColor(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})`;
}

btn.addEventListener("click", ()=>{
    btn.textContent = body.style.backgroundColor;
    clearInterval(id);
})