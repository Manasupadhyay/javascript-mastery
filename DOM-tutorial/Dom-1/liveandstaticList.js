// live list vs static list

// querySelectorAll hamein static list deti he
// getElementsBySomething hamein live list deti he

// querySelectorAll()
// const listItems = document.querySelectorAll(".todo-list li");
// console.log(listItems); // NodeList(5) [li, li, li, li, li]
// const newTodo = document.createElement("li");
// newTodo.textContent = "6";
// const ul = document.querySelector(".todo-list");
// ul.append(newTodo);
// console.log(listItems); // NodeList(5) [li, li, li, li, li]
// change are not reflect in querySelectorAll
// we add 6th todo but , querySelectorAll show only 5 todos


// getElementsBySomething()
// const listItems = document.getElementsByTagName("li");  // HTMLCollection(8) [li.nav-item, li.nav-item, li.nav-item, li, li, li, li, li]
// it returns all the li element in the page
// so to restrict it and we search only in ul
const ul = document.querySelector(".todo-list");
// now its what we required
const listItems = ul.getElementsByTagName("li"); // HTMLCollection(5) [li, li, li, li, li]
console.log(listItems);
// creating a new todo
const newTodo = document.createElement("li");
newTodo.textContent = "6";
ul.append(newTodo);
// changes are reflect back, now it has 6 elements
console.log(listItems);  // HTMLCollection(6) [li, li, li, li, li, li]