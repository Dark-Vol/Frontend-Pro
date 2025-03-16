document.getElementById('taskList').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
    }
});

document.getElementById('addTask').addEventListener('click', function() {
    let taskText = document.getElementById('newTask').value.trim();
    if (taskText) {
        let li = document.createElement('li');
        li.innerHTML = taskText + ' <button class="delete">Видалити</button>';
        document.getElementById('taskList').appendChild(li);
        document.getElementById('newTask').value = '';
    }
});