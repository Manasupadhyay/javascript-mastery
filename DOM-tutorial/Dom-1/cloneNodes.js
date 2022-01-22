// clone nodes

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "todo2";
ul.append(li);
// passing true to cloneNode makes deep cloning , it clone its childs also
const li2 = li.cloneNode(true);
ul.append(li2);