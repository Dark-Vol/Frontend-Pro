document.getElementById('container').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        alert('Клікнуто на кнопці: ' + event.target.innerText);
    }
});