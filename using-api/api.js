const URL = "https://jsonplaceholder.typicode.com/posts";

async function sendRequest() {
    const response = await fetch(URL);
    const posts = await response.json();
    return posts;
}

let content = document.querySelector(".content");


 function displayPosts(posts,pageNo,rowsPerPage) {
    content.innerHTML = "";
    
    pageNo--;
    const startIndex = pageNo * rowsPerPage;
    const lastIndex = startIndex + rowsPerPage;
    paginatedPosts = posts.slice(startIndex,lastIndex);
    // adding posts to content
    paginatedPosts.forEach(post =>{
        const div = document.createElement("div");
        div.classList.add("post");
        const h2 = document.createElement("h2");
        h2.innerText = post.id + " " + post.title;
        const p = document.createElement("p");
        p.innerText = post.body;
        div.append(h2);
        div.append(p);
        content.append(div);
    })    

}

async function pagination(postPerPage){
    let paginationContainer =  document.querySelector(".pagination");
    paginationContainer.innerHTML = "";
    let posts = await sendRequest();
    const totalPages = Math.ceil(posts.length / postPerPage);
    // console.log(totalPages);
    for(let i=0; i<totalPages; i++){
        const button = document.createElement("button")
        button.innerText= i+1;
        button.classList.add("btn");
        button.onclick = function () {
            displayPosts(posts,button.innerText,postPerPage);
        }
        paginationContainer.append(button);
    }
    displayPosts(posts,1,postPerPage);
}
pagination(5);


// sendRequest()
// .then((posts)=>{
//     content.innerHTML = "";
    

//     // posts.forEach((post)=>{
//     //     count++;
//     //     if(count>5){
//     //         return 
//     //     }
        
//     //     div.classList.add("content");
//     //     div.innerHTML = `<div class="post">
//     //     <h2>${post.title}</h2>
//     //     <p>${post.body}</p>
//     //    </div>`
       
//     //     container.append(div);
        
       
//     // })
 
// })
