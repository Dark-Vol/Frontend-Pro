let result = "";

for (let i = 20; i <= 30; i += 0.5) {
    result += i + (i < 30 ? ", " : ""); // Додаємо кому між числами
}

document.getElementById("output").textContent = 
    "1. Вивід чисел до консолі - " + result;
