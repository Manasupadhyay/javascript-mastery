// first fetch all records
// then take a id and request for user data related to that id



const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

xhr.open("GET",URL);

xhr.onload = ()=>{
    if(xhr.status >=200 && xhr.status <300){
        const data = JSON.parse(xhr.response);
        console.log(data);
        // const [,,,{id}] = data;
        // creating a new xmlhttprequest object
        const id = data[3].id;
        console.log(id);
        const URL2 = `${URL}/${id}`;
        const xhr2 = new XMLHttpRequest();
        // console.log(URL2);
        xhr2.open("GET", URL2);
        xhr2.onload = ()=>{
            const data = JSON.parse(xhr2.response);
            console.log(data);
        }
        xhr2.send();

    }
}

xhr.send();