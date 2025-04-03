let num = parseInt(prompt("Введіть тризначне число:"));

if (num < 100 || num > 999) {
    alert("Число повинно бути тризначним!");
} else {
    let digits = num.toString().split('').map(Number);
    let allSame, hasDuplicates;

    if (digits[0] === digits[1] && digits[1] === digits[2]) {
        allSame = true;
        hasDuplicates = true;
    } else if (digits[0] === digits[1] || digits[1] === digits[2] || digits[0] === digits[2]) {
        allSame = false;
        hasDuplicates = true;
    } else {
        allSame = false;
        hasDuplicates = false;
    }

    alert(`Всі цифри однакові: ${allSame}\nЄ однакові цифри: ${hasDuplicates}`);
}