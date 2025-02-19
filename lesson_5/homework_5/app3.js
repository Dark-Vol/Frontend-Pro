let N = parseInt(prompt("Введіть ціле число N:", "100"));
let integerResult = "";

for (let i = 1; i <= 100; i++) {
    if (i * i <= N) {
        integerResult += i + ", ";
    } else {
        break;
    }
}

integerResult = integerResult.slice(0, -2);
document.getElementById("integer").textContent =
    `3. Числа, квадрат яких не перевищує ${N}: ${integerResult}`;