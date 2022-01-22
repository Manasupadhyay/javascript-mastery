// async await

const URL = "https://jsonplaceholder.typicode.com/posts";
console.log("script starts");
// using promise
// fetch(URL)
// .then(response=>{
//     return response.json();
// })
// .then(data=>{
//     console.log(data);
// })


// using async-await

// async function always return a promise
// also await is use inside async function
// async function getPosts(){
// const response = await fetch(URL);
// if(!response.ok){
//     throw new Error("something went wrong!");
// }
// const data = await response.json();
// return data;
// }

// getPosts()
// .then(data=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log("inside catch block");
//     console.log(error);
// })



// using arrow function
const getPosts = async ()=>{
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error("something went wrong!");
    }
    const data = await response.json();
    return data;
    }
    
    getPosts()
    .then(data=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log("inside catch block");
        console.log(error);
    })

console.log("script ends!!");