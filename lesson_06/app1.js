
// Вариант - 1
// function removeChars(str, charsToRemove) {
//     return str.split('').filter(char => !charsToRemove.includes(char)).join('');
// }

// const inputString = prompt("Введіть рядок:");
// const charsToDelete = prompt("Введіть символи для видалення (без пробілів)").split('');

// const result = removeChars(inputString, charsToDelete);
// console.log(result);


// Вариант - 2
function removeCharacters(str, charsToRemove) {
    return str.split('').filter(char => !charsToRemove.includes(char)).join('');
}

// Приклад використання:
console.log(removeCharacters(" hello world", ['l', 'd']));