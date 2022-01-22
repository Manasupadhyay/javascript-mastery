// document.createElement()  // create html elements
// append  // add element at the last
// prepend  // add element at the front
// remove  // remove elements

// const newTodoItem = document.createElement("li");
// // we can also use textContent instead of creating a textNode
// // like this , newTodoItem.textContent = "buy Some groceries"
// const todoTextNode = document.createTextNode("buy some groceries");
// newTodoItem.append(todoTextNode);

// const todoList = document.querySelector(".todo-list");
// todoList.append(newTodoItem);

// console.log(newTodoItem);

// remove()
// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();



// before => add element before a element
// after  => add element after a element

const todo2 = document.createElement("li");
const todo3 = document.createElement("li");
todo2.textContent = "hello1";
todo3.textContent = "hello2";
const todoList = document.querySelector(".todo-list");
todoList.before(todo2);  // add todo2 before todoList
todoList.after(todo3);   // add todo3 after todoList

