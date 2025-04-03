document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".js--form");
  const input = document.querySelector(".js--form__input");
  const todosWrapper = document.querySelector(".js--todos-wrapper");

  function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todosWrapper.innerHTML = "";
    todos.forEach(todo => createTodoElement(todo.text, todo.completed));
  }

  function saveTodos() {
    const todos = Array.from(todosWrapper.children).map(li => ({
      text: li.querySelector(".todo-item__description").textContent,
      completed: li.classList.contains("todo-item--checked")
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function createTodoElement(text, completed = false) {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    if (completed) li.classList.add("todo-item--checked");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;
    checkbox.addEventListener("change", () => {
      li.classList.toggle("todo-item--checked");
      saveTodos();
    });

    const span = document.createElement("span");
    span.classList.add("todo-item__description");
    span.textContent = text;

    const button = document.createElement("button");
    button.classList.add("todo-item__delete");
    button.textContent = "Видалити";
    button.addEventListener("click", () => {
      li.remove();
      saveTodos();
    });

    li.append(checkbox, span, button);
    todosWrapper.appendChild(li);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (text) {
      createTodoElement(text);
      saveTodos();
      input.value = "";
    }
  });

  loadTodos();
});
