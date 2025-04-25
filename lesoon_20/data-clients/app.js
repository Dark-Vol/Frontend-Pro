$(document).ready(function () {
  $('#birthdayForm').on('submit', function (e) {
    e.preventDefault(); // Запобігаємо перезавантаженню сторінки

    const dateInput = $('#dateInput').val();
    const dateFormat = 'DD/MM/YYYY'; // Формат дати, який очікуємо
    const date = moment(dateInput, dateFormat, true); // Перевіряємо формат дати

    if (date.isValid()) {
      const formattedDate = date.format('YYYY-MM-DD'); // Формат дати для збереження в базі даних
      $('#output').html(`Ваша дата народження: ${formattedDate}`);
    } else {
      $('#output').html('<span class="text-danger">Неправильний формат дати. Використовуйте ДД/ММ/РРРР.</span>');
    }
  });
});