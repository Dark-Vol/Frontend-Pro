function checkPrime() {
    let num = parseInt(document.getElementById('numberInput').value);
    let resultElement = document.getElementById('result');

    if (isNaN(num)) {
        resultElement.textContent = "Будь ласка, введіть правильне число.";
        return;
    }

    if (isPrime(num)) {
        resultElement.textContent = `${num} є простим числом.`;
    } else {
        resultElement.textContent = `${num} не є простим числом.`;
    }
}

function isPrime(n) {
    if (n <= 1) return false; // числа менше або рівне 1 не є простими
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false; // якщо є дільник, число не просте
    }
    return true; // якщо дільників не знайдено, число просте
}