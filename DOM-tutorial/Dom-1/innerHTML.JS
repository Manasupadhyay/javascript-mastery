// innerHTML
// using this we get inner html of an element
// we also change inner html of an element using innerHTML property

const header = document.querySelector(".heading");

console.log(header.innerHTML);
// output
/* <h2 id="main-heading">Manage Your Task <span style="display: none;">manas</span></h2>
        <button class="btn btn-heading">Learn More</button> */


// we change the innerHTML of an element also
header.innerHTML = "<h1> inner Html changed </h1>";
// we can add more
header.innerHTML += "<button class= \"btn \" > button change</button>";
