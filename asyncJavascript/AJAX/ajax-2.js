// ajax 
const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

// method 1 
// console.log(xhr.readyState, " xmlhttprequest object created");
// xhr.open("GET",URL);
// console.log(xhr.readyState, " xhr object is configured");
// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 2){
//         console.log(xhr.readyState," response headers are received ");
//     }
//     if(xhr.readyState === 3){
//         console.log(xhr.readyState, " start receiving data")
//     }
//     if(xhr.readyState === 4){
//         console.log(xhr.readyState, " request,response cycle complete");
//         // console.log(xhr.response);
//         // convert json response into javascript object
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(data); 
//     }
// }

// method 2
// using onload
// onload runs the function when request response cycle is complete (i.e readystate == 4)
xhr.open("GET", URL);
xhr.onload = function(){
    // json data
    const response = xhr.response;
    // convert json into object
    const data = JSON.parse(response);
    console.log(data);
}
xhr.send();