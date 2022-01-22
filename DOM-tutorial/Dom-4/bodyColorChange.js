// random color generator

const mainButton = document.querySelector("button");
const body = document.body;
const h1 = document.querySelector("h1");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");

mainButton.addEventListener("click", ()=>{
    const randomColor =  randomColorGenerator();
    h1.textContent = `Current Color :- ${randomColor}`
    body.style.backgroundColor = `${randomColor}`;
})


function randomColorGenerator(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const newColor = `rgb(${red},${green},${blue})`;
    return newColor;
}


// const id = setInterval(()=>{
//     const [red,green,blue] =  randomColorGenerator();
//    console.log(red,green, blue);
//     const newColor = `rgb(${red},${green},${blue})`;
//     h1.textContent = `Current Color :- ${newColor}`
//    body.style.backgroundColor = `${newColor}`;
// },1000)

// setTimeout(()=>{
// clearInterval(id);
// },5000)

// const alphabets = [..."abcdefghijklmnopqrstuvwxyz!@#$%^&*"];

// function randomAlphabet()
// {  
//     let  length = alphabets.length;
//    return  Math.floor(Math.random()*length);
// }
// setInterval(()=>{


// one.textContent = alphabets[randomAlphabet()];
// two.textContent = alphabets[randomAlphabet()];
// three.textContent = alphabets[randomAlphabet()];
// // console.log(alphabets[index]);

// },10)
// console.log(alphabets);