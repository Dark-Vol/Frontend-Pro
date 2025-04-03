// function promptNumbers() {
//     let attempts = 0;

//     while (attempts < 10) {
//         const userInput = prompt("Введіть число більше 100:");
//         if (parseInt(userInput) > 100) {
//             console.log("Ви ввели число більше 100:", userInput);
//             return;
//         } else {
//             console.log("Число повинно бути більше 100! Спробуйте ще раз.");
//         }
//         attempts++;
//     }

//     console.log("Досягнуто максимуму ітерацій (10).");
// }

// promptNumbers();
function promptNumbers() {
    let attempts = 0; // Лічильник ітерацій
  
    while (attempts < 10) {
      const userInput = prompt("Введіть число більше 100:");
  
      // Перевіряємо, чи введене число менше або рівне 100
      if (parseInt(userInput) <= 100) {
        console.log("Ви ввели число менше або рівне 100. Функція завершена.");
        return; // Завершуємо функцію
      }
  
      attempts++; // Збільшуємо лічильник ітерацій
    }
  
    alert("Досягнуто максимуму ітерацій (10).");
  }
  
  promptNumbers();
  
