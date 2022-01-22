const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");


//   text       Delay           Color
//  one           1s            violet
//  two           2s            purple
//  three         2s            red
//  four          1s            pink
//  five          2s            green
//  six           3s            blue
//  seven         1s            brown


function changeText(element, text, color, time, ){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // console.log(element);
        if(element){
            element.textContent = text;
            element.style.color = color;
            resolve("success");
        }
        else{
            reject("element not found");
        }
        }, time);
   })
    
}


// never do this way
// changeText(heading1,"one","red",1000).then(()=>{
//     changeText(heading2,"two","purple",1000)
//     // return Promise.resolve(undefined);
// }).then((data)=>{
//     changeText(heading3,"three","green",1000)
//     console.log(data); // undefined
// })


// right way
// changeText(heading1,"one","violet",1000).then(()=>{
//     // initially this function return pending
//     return changeText(heading2,"two","purple",1000)
// })
// // .then() wait for promise to resolve or reject
// .then(()=>{
//     return changeText(heading3,"three","red",1000)
// })
// .then(()=>{
//     return changeText(heading4,"four","pink",1000)
// })
// .then(()=>{
//     return changeText(heading5,"five","green",1000)
// })
// .then(()=>{
//     return changeText(heading6,"six","blue",1000)
// })
// .then(()=>{
//     return changeText(heading7,"seven","brown",1000)
// })
// .then(()=>{
//     return changeText(heading8,"eight","cyan",1000)
// })
// .then(()=>{
//     return changeText(heading9,"nine","lightgreen",1000)
// })
// .then(()=>{
//     return changeText(heading10,"ten","yellow",1000)
// })
// .catch((error)=>{
//     // console.log()
//     alert(error);
// })


// more elegant way

changeText(heading1,"one","violet",1000).then(()=>changeText(heading2,"two","purple",1000))
.then(()=> changeText(heading3,"three","red",1000))
.then(()=>changeText(heading4,"four","pink",1000))
.then(()=>changeText(heading5,"five","green",1000))
.then(()=>changeText(heading6,"six","blue",1000))
.then(()=>changeText(heading7,"seven","brown",1000))
.then(()=>changeText(heading8,"eight","cyan",1000))
.then(()=>changeText(heading9,"nine","lightgreen",1000))
.then(()=>changeText(heading10,"ten","yellow",1000))
.catch(error=>alert(error))
