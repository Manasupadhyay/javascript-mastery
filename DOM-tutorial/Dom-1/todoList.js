// todo-list

const todoList = document.querySelector(".todo-list");
// console.log(todoList);

const formTodo = document.querySelector(".form-todo");
// console.log(formTodo);

const inputElement = formTodo.querySelector("input[type='text']");
// console.log(inputElement);

formTodo.addEventListener("submit", (e)=>{
    e.preventDefault();
    inputText = inputElement.value;
    inputElement.value = "";
    const liELem = document.createElement("li");
    liELem.classList.add("todo");
    const liInnerHtml = `
    <span class="text">${inputText}</span>
    <div class="buttons">
      <button class="btn done">Done</button>
      <button class="btn remove">Remove</button>
    </div>`;
    liELem.innerHTML = liInnerHtml;
    todoList.append(liELem);
    
});

todoList.addEventListener("click", (e)=>{
    const target = e.target;
    if(target.classList.contains("done")){
        const spanELem = target.parentElement.previousElementSibling;
        // console.log(spanELem);
        spanELem.style.textDecoration = "line-through";
    }
    if(target.classList.contains("remove")){
        const liELem = target.parentElement.parentElement;
        liELem.remove();
    }
})

