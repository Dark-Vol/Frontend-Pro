import './styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('clickMe');
  button.addEventListener('click', () => {
    alert('Ви натиснули кнопку!');
  });
});
