const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch api

// return a promise
// fetch(URL)
// .then((response)=>{
// // reponse object
// // console.log(response);
// // we have to parse , response object to get data
// // response.json() also return a promise
// return response.json();
// }) 
// .then((data)=>{
//     // now we get data :)
//     console.log(data);
// })



// error handling in fetch

fetch(URL)
.then((response)=>{
    // we check response.ok(if true means request is successful)
    // console.log(response);
    if(response.ok){
        return response.json();
    }
    else{
        // make sure to write throw instead of return keyword
        // throw , throw to catch but return , return a promise to next .then()
        throw new Error("something went wrong");
    }
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("inside catch block");
console.log(error);
})


// note:- if did not use throw keyword ,catch block will run only, if internet is disconnected


// post request

fetch(URL,{
    method:"POST",
    body : JSON.stringify({
        title: "anime",
        body: "watch some ",
        userId: 1,
    }),
    headers:{
        'content-type':'application/json; charset=UTF-8',
    },
})
.then((response)=>{
    return response.json();
})
.then(data=>{
    console.log(data);
})