// innerHTML -> 
// where to use
// when you have to insert html in a element only one time
// where not use
// when there is a need to add element to a html element frequently

// every element we add using innerHTML, it start adding from first element to that element
// every time, and it is not good for performance


const todoList = document.querySelector(".todo-list");
todoList.innerHTML += "<li>new Todo 1</li>";
todoList.innerHTML += "<li>new Todo 2 </li>";
// above code reduce the performance, as every time we add a new element, innerHtml add not only that element, but it adds every element again
// every time we add a new element in this todolist