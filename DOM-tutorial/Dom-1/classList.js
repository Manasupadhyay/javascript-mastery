// classList

const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo);

// returns a DOMTokenList ( array like object)
console.log(sectionTodo.classList); // DOMTokenList(2) ['section-todo', 'container', value: 'section-todo container']

// add a class
// sectionTodo.classList.add("bg-dark");

// remove a class
// sectionTodo.classList.remove("container");

// check whether a class exist or not
// const ans = sectionTodo.classList.contains("container");
// console.log(ans);


// use toggle ( it remove the class if present and add class if it is not present )
// sectionTodo.classList.toggle("bg-dark");



// selecting header

const header = document.querySelector(".header");
console.log(header.classList);
header.classList.add("bg-dark");
// note: order of classes is important , if bg-dark class came first in css file then, it is override by header class
// so make sure bg-dark come later, concept: - css specificity