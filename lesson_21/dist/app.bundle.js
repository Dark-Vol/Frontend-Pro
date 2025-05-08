"use strict";

// src/app.js

document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.js--form');
  var input = document.querySelector('.js--form__input');
  var todosWrapper = document.querySelector('.js--todos-wrapper');
  var currentTask = null;
  var loadTodos = function loadTodos() {
    var todos = JSON.parse(localStorage.getItem('todos')) || [];
    todosWrapper.innerHTML = '';
    todos.forEach(function (todo) {
      return createTodoElement(todo.text, todo.completed);
    });
  };
  var saveTodos = function saveTodos() {
    var todos = Array.from(todosWrapper.children).map(function (li) {
      return {
        text: li.querySelector('.todo-item__description').textContent,
        completed: li.classList.contains('todo-item--checked')
      };
    });
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  var createTodoElement = function createTodoElement(text) {
    var completed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var li = document.createElement('li');
    li.className = 'todo-item';
    if (completed) li.classList.add('todo-item--checked');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = completed;
    checkbox.addEventListener('change', function () {
      li.classList.toggle('todo-item--checked');
      saveTodos();
    });
    var desc = document.createElement('span');
    desc.className = 'todo-item__description';
    desc.textContent = text;
    desc.addEventListener('click', function () {
      document.getElementById('modal-text').value = text;
      currentTask = desc;
      new bootstrap.Modal(document.getElementById('todoModal')).show();
    });
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'todo-item__delete';
    deleteBtn.textContent = 'Видалити';
    deleteBtn.addEventListener('click', function () {
      li.remove();
      saveTodos();
    });
    li.append(checkbox, desc, deleteBtn);
    todosWrapper.appendChild(li);
  };
  document.getElementById('save-task').addEventListener('click', function () {
    var newText = document.getElementById('modal-text').value.trim();
    if (currentTask && newText) {
      currentTask.textContent = newText;
      saveTodos();
      bootstrap.Modal.getInstance(document.getElementById('todoModal')).hide();
    }
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var text = input.value.trim();
    if (text) {
      createTodoElement(text);
      saveTodos();
      input.value = '';
    }
  });
  loadTodos();
});
