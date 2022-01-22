// ajax code practice

const URL = "https://jsonplaceholder.typicode.com/posts";

// method 1
// // creating XMLHttpRequest object
// const xhr = new XMLHttpRequest();
// console.log("xhr object is created");
// // configuring(initializing) XMLHttpRequest object
// console.log("xhr objects is initialized");
// xhr.open("GET",URL);

// // adding listener to tell the state of XMLHttpsObject

// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 2){
//         console.log("Response headers are received");
//     }
//     if(xhr.readyState === 3){
//         console.log("data is start to receive in client computer")
//     }
//     if(xhr.readyState === 4){
//         console.log("request response is complete");
//     }
// }


// method 2
// onload is also a listener, which listen for readyState, if readyState is 4 is execute the function, it is attach to.
const xhr = new XMLHttpRequest();
xhr.open("GET",URL);

xhr.onload = function(){
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}

// initiate the request
xhr.send();
