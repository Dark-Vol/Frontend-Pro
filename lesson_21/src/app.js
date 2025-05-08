// src/app.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.js--form');
  const input = document.querySelector('.js--form__input');
  const todosWrapper = document.querySelector('.js--todos-wrapper');
  let currentTask = null;

  const loadTodos = () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todosWrapper.innerHTML = '';
    todos.forEach(todo => createTodoElement(todo.text, todo.completed));
  };

  const saveTodos = () => {
    const todos = Array.from(todosWrapper.children).map(li => ({
      text: li.querySelector('.todo-item__description').textContent,
      completed: li.classList.contains('todo-item--checked'),
    }));
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const createTodoElement = (text, completed = false) => {
    const li = document.createElement('li');
    li.className = 'todo-item';
    if (completed) li.classList.add('todo-item--checked');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = completed;
    checkbox.addEventListener('change', () => {
      li.classList.toggle('todo-item--checked');
      saveTodos();
    });

    const desc = document.createElement('span');
    desc.className = 'todo-item__description';
    desc.textContent = text;
    desc.addEventListener('click', () => {
      document.getElementById('modal-text').value = text;
      currentTask = desc;
      new bootstrap.Modal(document.getElementById('todoModal')).show();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'todo-item__delete';
    deleteBtn.textContent = 'Видалити';
    deleteBtn.addEventListener('click', () => {
      li.remove();
      saveTodos();
    });

    li.append(checkbox, desc, deleteBtn);
    todosWrapper.appendChild(li);
  };

  document.getElementById('save-task').addEventListener('click', () => {
    const newText = document.getElementById('modal-text').value.trim();
    if (currentTask && newText) {
      currentTask.textContent = newText;
      saveTodos();
      bootstrap.Modal.getInstance(document.getElementById('todoModal')).hide();
    }
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const text = input.value.trim();
    if (text) {
      createTodoElement(text);
      saveTodos();
      input.value = '';
    }
  });

  loadTodos();
});
