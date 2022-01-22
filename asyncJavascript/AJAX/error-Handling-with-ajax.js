// error handling with ajax

const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);

xhr.onload = ()=>{
    if(xhr.status >=200 && xhr.status <300){
        const data = JSON.parse(xhr.response);
        console.log(data);
    }
    else{
        console.log("something went wrong!");
    }
}

// if request does not reach to server
// or request response cycle did not complete due to some problem like( internet is disconnected)
// we catch these error using onerror listener
xhr.onerror = ()=>{
    console.log("network error");
}
xhr.send();