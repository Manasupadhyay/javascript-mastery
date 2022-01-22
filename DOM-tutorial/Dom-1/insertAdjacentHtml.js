// elem.insertAdjacentHTML(where, html)
// beforebegin  // add element before elem
// afterbegin   // add element at first in elem (prepend)
// beforeend  // add element at the end of elem (append)
// afterend   // add element after elem

const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("beforeend","<li>todo2</li>");
todoList.insertAdjacentHTML("afterbegin","<li>todo3</li>");
todoList.insertAdjacentHTML("beforebegin","<li>todo4</li>");
todoList.insertAdjacentHTML("afterend","<li>todo5</li>");
