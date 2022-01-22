// some old methods to support poor IE
// appendChild  -> it adds a child to a parent at the end 
// insertBefore -> insert a element before a reference node
// replaceChild -> replace the child with other
// removeChild -> remove a child from a parent

// const todoList = document.querySelector(".todo-list");
// const todoItem = document.createElement("li");
// todoItem.textContent = "new todo";
// // appendChild
// todoList.appendChild(todoItem);  // add a new todo at the end


// parent.insertBefore(element,referenceNode);
// both the argument are child of parent 
// const todoItem2 = document.createElement("li");
// todoItem2.textContent = "todo3";
// const referenceNode = document.querySelector(".first-todo");

// todoList.insertBefore(todoItem2,referenceNode);



// replaceChild(newChild,referenceNode)
const todoList = document.querySelector(".todo-list");
const referenceNode = document.querySelector(".first-todo");
// new element
const newTodo = document.createElement("li");
newTodo.textContent = "replace todo";
todoList.replaceChild(newTodo,referenceNode);

// removeChild
todoList.removeChild(newTodo);