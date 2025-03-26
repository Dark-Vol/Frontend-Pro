document.addEventListener("DOMContentLoaded", function() {
    const orderDetailsForm = document.getElementById("orderDetailsForm");
    const orderSummary = document.getElementById("orderSummary");

    // Перевірка форми при її відправці
    orderDetailsForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Запобігаємо стандартній відправці форми

        let fullName = document.getElementById("fullName").value.trim();
        let city = document.getElementById("city").value;
        let branch = document.getElementById("branch").value.trim();
        let payment = document.getElementById("payment").value;
        let quantity = document.getElementById("quantity").value;
        let comment = document.getElementById("comment").value.trim();

        let errorMessages = [];

        // Валідація полів
        if (!fullName) {
            errorMessages.push("ПІБ є обов'язковим.");
        }
        if (!city) {
            errorMessages.push("Виберіть місто.");
        }
        if (!branch) {
            errorMessages.push("Введіть склад Нової пошти.");
        }
        if (!payment) {
            errorMessages.push("Виберіть тип оплати.");
        }
        if (!quantity || quantity <= 0) {
            errorMessages.push("Введіть коректну кількість товару.");
        }

        // Якщо є помилки, виводимо їх
        if (errorMessages.length > 0) {
            alert(errorMessages.join("\n"));
        } else {
            // Якщо валідація пройшла успішно, відображаємо деталі замовлення
            displayOrderDetails(fullName, city, branch, payment, quantity, comment);
        }
    });

    // Функція для відображення деталей замовлення
    function displayOrderDetails(fullName, city, branch, payment, quantity, comment) {
        const paymentText = payment === 'cash_on_delivery' ? 'Накладений платіж' : 'Оплата на рахунок';

        let orderDetails = `
            <h2>Деталі вашого замовлення</h2>
            <p><strong>ПІБ:</strong> ${fullName}</p>
            <p><strong>Місто:</strong> ${city}</p>
            <p><strong>Склад Нової пошти:</strong> ${branch}</p>
            <p><strong>Тип оплати:</strong> ${paymentText}</p>
            <p><strong>Кількість товару:</strong> ${quantity}</p>
            <p><strong>Коментар:</strong> ${comment || "Немає коментарів"}</p>
        `;

        // Приховуємо форму і виводимо деталі замовлення
        orderDetailsForm.style.display = "none";
        orderSummary.innerHTML = orderDetails;
    }
});
