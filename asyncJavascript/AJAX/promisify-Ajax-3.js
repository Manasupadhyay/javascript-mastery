// first fetch all records
// then take a id and request for user data related to that id

// promisify this code

const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method,URL) {
 return new Promise((resolve, reject)=>{
    const xhr = new XMLHttpRequest();
    xhr.open(method,URL);
    xhr.onload = function() {
        if(xhr.status >=200 && xhr.status <300){
            
            // console.log(data);
            resolve(xhr.response);

        }
        else{
            reject(new Error("something went wrong"));
        }
    }
    xhr.onerror = ()=>{
        reject(new Error("network error"));
    }
    xhr.send();
 })
    
}

// promise chaining
// consuming promise
sendRequest("GET",URL).then((response)=>{
  const data = JSON.parse(response);
  return data;
})
.then((data)=>{
    const id = data[3].id; 
    return id;
})
.then((id)=>{
    const newURL = `${URL}/${id}`;
    return sendRequest("GET",newURL);
})
.then((response)=>{
    const data = JSON.parse(response);
    return data;
})
.then((data)=>{
    console.log(data);
})
.catch(()=>{
    console.log(new Error("something went wrong!!"));
})