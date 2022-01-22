// select multiple element in javascript
// we can use following loops
// 1. simple for loop
// 2. for of loop
// 3. forEach loop
// we can't use forEach use to iterate through HTMLCollections

// using getELementsByClassName() return a HTMLCollection (array like object)
// const navItems = document.getElementsByClassName("nav-item");
// console.log(navItems);

// // change color and background of all links
// for(let i=0; i<navItems.length; i++){
//     // console.log(navItems[i]);
//     let a = navItems[i].querySelector("a");
//     // console.log(a);
//     a.style.color = "green";
//     a.style.backgroundColor = "white";
// }


// using getELementsByTagName() return a HTMLCollection (array like object)
// using for of loop
let navItems = document.getElementsByTagName("a");
// for(let a of navItems){
//     a.style.color = "green";
//     a.style.backgroundColor = "white";
// }


// convert HTMLCollection to Array
  navItems = Array.from(navItems);
  console.log(Array.isArray(navItems)); // true
// now we can apply forEach loop
navItems.forEach(navItem => {
    navItem.style.color = "green";
    navItem.style.backgroundColor = "white";
});

  // using querySelectorAll()  return a nodeList (array like object)

// using forEach loop
// const navItems = document.querySelectorAll("a");
// navItems.forEach((a)=>{
//     a.style.color = "green";
//     a.style.backgroundColor = "white";
// })