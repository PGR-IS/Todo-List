const todoList = [];

document.querySelector(".js-add-todo-button")
    .addEventListener("click", (event) => {
        addTodo();
    });

function addTodo(){
    const todoInput = document.getElementById("js-todo-input");
    const dueDate = document.getElementById("js-due-date").value;
    const name = todoInput.value;
    todoList.push({
        name,
        dueDate
    });
    todoInput.value = "";
    displayTodoList();
}

function displayTodoList(){
    const displayTodo = document.getElementById("js-display-list");
    let temp = "";

    todoList.forEach((todoItem, index) => {
        temp += `
            <div class="todo-list-items">
                <div class="todo-name">
                    ${todoItem.name}
                </div>
                <div class="todo-duedate">
                    ${todoItem.dueDate}
                </div>
                <button class="todo-delete-button js-todo-delete-button">
                    Delete
                </button>
            </div>
        `;

    });
    displayTodo.innerHTML = temp;
    document.querySelectorAll(".js-todo-delete-button")
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener("click", () => {
                deleteTodo(index);
            });
        });
}

function deleteTodo(i){
    const elementToRemove = todoList.splice(i, 1);
    displayTodoList();
}