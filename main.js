const todoButton = document.querySelector(".todo-button");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const filterTodo = document.querySelector(".select-filter");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteChek);
filterTodo.addEventListener("click", filterOpation);

function addTodo(e) {
  e.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("item-todo");
  todoDiv.appendChild(newTodo);

  const completed = document.createElement("button");
  completed.innerHTML = "<i class='fa-solid fa-check'></i>";
  completed.classList.add("completed-btn");
  todoDiv.appendChild(completed);

  const trashed = document.createElement("button");
  trashed.innerHTML = "<i class='fa-solid fa-trash'></i>";
  trashed.classList.add("trashed-btn");
  todoDiv.appendChild(trashed);

  todoInput.value = "";

  todoList.appendChild(todoDiv);
}

function deleteChek(e) {
  const item = e.target;

  if (item.classList[0] === "trashed-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");

    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "completed-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("complete");
  }
}

function filterOpation(e) {
  const todoes = todoList.childNodes;

  todoes.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;

      case "complete":
        if (todo.classList.contains("complete")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;

      case "uncomplete":
        if (!todo.classList.contains("complete")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
