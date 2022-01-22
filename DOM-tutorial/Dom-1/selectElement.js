// ways to select html elements in javascript

// 1. Using getElementById() method 
// it works with id only
// it return an javascript Object
// when browser parse the html file , it make all html element 

// const  mainHeading = document.getElementById("main-heading");
// console.log(mainHeading);  // it return a html representation 
// console.dir(mainHeading); // it return javascript representation ( a object)
// // checking type 
// console.log(typeof mainHeading);


// 2. using querySelector()
// it works with anything like, id,class,tags, or combination of two or more to access an element(like div a )

const mainHeading = document.querySelector("#main-heading");
console.log(mainHeading);
console.dir(mainHeading);
console.log(typeof mainHeading);

const header = document.querySelector(".header");
console.log(header);

// querySelector() return only first element it find
const navItem = document.querySelector(".nav-item");
console.log(navItem); // it return only first nav-item

// to get all the nav-items we use
// 3 . querySelectorAll()
// it returns a nodeList
const navItems = document.querySelectorAll(".nav-item");
console.log(navItems);