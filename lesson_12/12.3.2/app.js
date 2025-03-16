function updateTaskNumbers() {
    const tasks = document.querySelectorAll('#taskList li');
    tasks.forEach((task, index) => {
        task.firstChild.textContent = `${index + 1}. ${task.firstChild.textContent.replace(/^\d+\. /, '')}`;
    });
}

document.getElementById('taskList').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
        updateTaskNumbers();
    }
});

document.getElementById('addTask').addEventListener('click', function() {
    let taskText = document.getElementById('newTask').value.trim();
    if (taskText) {
        let li = document.createElement('li');
        li.innerHTML = `${document.getElementById('taskList').children.length + 1}. ${taskText} <button class="delete">Видалити</button>`;
        document.getElementById('taskList').appendChild(li);
        document.getElementById('newTask').value = '';
        updateTaskNumbers();
    }
});