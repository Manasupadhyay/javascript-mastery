// event bubbling / event propagation
// event capturing
// event delegation

console.log("hello");

const grandParent = document.querySelector(".grandParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

//event capturing ( pass third argument true, to enable capturing)
// child.addEventListener("click", ()=>{
//     console.log(" capturing child !!!");
// },true)
// parent.addEventListener("click", ()=>{
//     console.log(" capturing parent !!!");
// },true)

// grandParent.addEventListener("click", ()=>{
//     console.log("capturing grandParent !!!");
// },true)

// document.body.addEventListener("click", ()=>{
//     console.log("capturing body !!!");
// },true)


// event bubbling phase (no capture)
// child.addEventListener("click", ()=>{
//     console.log("child bubbling");
// })
// parent.addEventListener("click", ()=>{
//     console.log("parent bubbling");
// })

// grandParent.addEventListener("click", ()=>{
//     console.log("grandParent bubbling");
// })

// document.body.addEventListener("click", ()=>{
//     console.log("body bubbling");
// })


// event delegation
grandParent.addEventListener("click", (e)=>{
    console.log(e.target);
})