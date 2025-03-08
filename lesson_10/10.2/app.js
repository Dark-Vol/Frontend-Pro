const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];

array.forEach(number => {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
});

console.log(evenNumbers);
