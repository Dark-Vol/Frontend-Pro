// 1. Дано 2 числа. Визначити, яке з них більше, а яке - менше. Перевірити, чи вони однакові.
// let num1 = prompt("Введіть перше число:");
// let num2 = prompt("Введіть друге число:");

// if (isNaN(num1) || isNaN(num2)) {
//     console.log("Будь ласка, введіть коректні числа.");
// } else {
//     if (num1 > num2) {
//         console.log(`Число ${num1} більше, ніж ${num2}.`);
//     } else if (num1 < num2) {
//         console.log(`Число ${num2} більше, ніж ${num1}.`);
//     } else {
//         console.log("Числа рівні.");
//     }
// }

/** */

// 2. Відомі 2 відстані. Одна - в кілометрах, інша - в футах (1 фут = 0,305м, 1км = 1000м). Яка відстань менша?
// let km = prompt("Введіть відстань в кілометрах:");
// let feet = prompt("Введіть відстань в футах:");

// const feetToMeters = feet * 0.305;
// const kmToMeters = km * 1000;

// if (isNaN(km) || isNaN(feet)) {
//     console.log("Будь ласка, введіть коректні числа.");
// } else {
//     console.log(`${feetToMeters} футов,  ${kmToMeters} метров`);
//     console.log(`Конвертовані значення: ${feetToMeters} м, ${kmToMeters} м`);
//     if (kmToMeters > feetToMeters) {
//         console.log("Відстань у кілометрах більша за відстань у футах.");
//     } else if (kmToMeters < feetToMeters) {
//         console.log("Відстань у футах більша за відстань у кілометрах.");
//     } else {
//         console.log("Відстані рівні.");
//     }
// }

/** */

// 3. Визначити, чи є число а дільником числа b. І навпаки, якщо число а більше за num2.
// let num1 = prompt("Введіть число num1:");
// let num2 = prompt("Введіть число num2:");

// if (isNaN(num1) || isNaN(num2)) {
//     console.log("Будь ласка, введіть коректні числа.");
// } else {
//     if (num2 % num1 === 0) {
//         console.log(`Число ${num1} є дільником числа ${num2}.`);
//     } else {
//         console.log(`Число ${num1} не є дільником числа ${num2}.`);
//     }
//     if (num1 > num2) {
//         if (num1 % num2 === 0) {
//             console.log(`Число ${num2} є дільником числа ${num1}.`);
//         } else {
//             console.log(`Число ${num2} не є дільником числа ${num1}.`);
//         }
//     }
// }

/** */

// 4. Дано число. Визначити, чи закінчується воно парною чи непарною цифрою. Вивести останню цифру в консоль.
// let num = prompt("Введіть число:");

// if (isNaN(num)) {
//     console.log("Будь ласка, введіть коректне число.");
// } else {
//     const lastDigit = Math.abs(num) % 10;
//     console.log(`Остання цифра: ${lastDigit}`);
    
//     if (lastDigit % 2 === 0) {
//         console.log("Число закінчується на парну цифру.");
//     } else {
//         console.log("Число закінчується на непарну цифру.");
//     }
// }

/** */

// 5. Дано двозначне число. Визначити, яка з його цифр більша - перша чи друга?
// let number = prompt("Введіть двозначне число:");

// const firstDigit = Math.floor(number / 10);
// const secondDigit = number % 10;

// if (firstDigit > secondDigit) {
//     console.log("Перша цифра більша.");
// } else if (firstDigit < secondDigit) {
//     console.log("Друга цифра більша.");
// } else {
//     console.log("Цифри рівні.");
// }

/** */

// 6. Дано тризначне число. 
// Визначити, чи є сума його цифр парною
// Визначити, чи кратна сума його цифр п’яти
// Визначити, чи є добуток його цифр більшим за 100
// Чи вірно, що всі його цифри однакові?
// Чи є серед його цифр однакові?

// Введення тризначного числа
// let number = prompt("Введіть тризначне число:");

// // Отримуємо цифри числа
// const firstDigit = Math.floor(number / 100);
// const secondDigit = Math.floor((number % 100) / 10);
// const thirdDigit = number % 10; 

// // 1. Визначити, чи є сума цифр парною
// const sum = firstDigit + secondDigit + thirdDigit;
// const isSumEven = sum % 2 === 0;
// console.log(`Сума цифр ${isSumEven ? "парна" : "непарна"}.`);

// // 2. Визначити, чи кратна сума цифр п’яти
// const isSumMultipleOfFive = sum % 5 === 0;
// console.log(`Сума цифр ${isSumMultipleOfFive ? "кратна п'яти" : "не кратна п'яти"}.`);

// // 3. Визначити, чи є добуток цифр більшим за 100
// const product = firstDigit * secondDigit * thirdDigit;
// const isProductGreaterThan100 = product > 100;
// console.log(`Добуток цифр ${isProductGreaterThan100 ? "більший за 100" : "не більший за 100"}.`);

// // 4. Чи вірно, що всі цифри однакові?
// const areAllDigitsSame = firstDigit === secondDigit && secondDigit === thirdDigit;
// console.log(`Всі цифри ${areAllDigitsSame ? "однакові" : "не однакові"}.`);

// // 5. Чи є серед цифр однакові?
// const areAnyDigitsSame = firstDigit === secondDigit || secondDigit === thirdDigit || firstDigit === thirdDigit;
// console.log(`Серед цифр ${areAnyDigitsSame ? "є однакові" : "немає однакових"}.`);

/** */
// 7 Визначити, чи є дане шестизначне число - дзеркальним? (напр., 123321, 147741)
// const number = prompt("Введіть шестизначне число:");

// const strNumber = number.toString();

// const isMirror = strNumber === strNumber.split('').reverse().join('');

// console.log(`Число ${isMirror ? "є дзеркальним" : "не є дзеркальним"}.`);
