$(document).ready(function () {
  const $form = $('.js--form');
  const $input = $('.js--form__input');
  const $todosWrapper = $('.js--todos-wrapper');
  let $currentTask = null;

  function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    $todosWrapper.empty();
    todos.forEach(todo => createTodoElement(todo.text, todo.completed));
  }

  function saveTodos() {
    const todos = [];
    $todosWrapper.children('li').each(function () {
      todos.push({
        text: $(this).find('.todo-item__description').text(),
        completed: $(this).hasClass('todo-item--checked')
      });
    });
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  function createTodoElement(text, completed = false) {
    const $li = $('<li class="todo-item"></li>');
    if (completed) $li.addClass('todo-item--checked');

    const $checkbox = $('<input type="checkbox">').prop('checked', completed).on('change', function () {
      $li.toggleClass('todo-item--checked');
      saveTodos();
    });

    const $desc = $('<span class="todo-item__description"></span>').text(text).on('click', function () {
      $('#modal-text').val(text);
      $currentTask = $desc;
      const modal = new bootstrap.Modal($('#todoModal'));
      modal.show();
    });

    const $delete = $('<button class="todo-item__delete">Видалити</button>').on('click', function () {
      $li.remove();
      saveTodos();
    });

    $li.append($checkbox, $desc, $delete);
    $todosWrapper.append($li);
  }

  $('#save-task').on('click', function () {
    const newText = $('#modal-text').val().trim();
    if ($currentTask && newText) {
      $currentTask.text(newText);
      saveTodos();
      $('#todoModal').modal('hide');
    }
  });

  $form.on('submit', function (e) {
    e.preventDefault();
    const text = $input.val().trim();
    if (text) {
      createTodoElement(text);
      saveTodos();
      $input.val('');
    }
  });

  loadTodos();
});