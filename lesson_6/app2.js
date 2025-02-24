console.log(averageOfNumbers([1, "hello", 3, true, 5, null, 7]));
console.log(averageOfNumbers(["a", {}, [], false]));

function averageOfNumbers(arr) {
    const numbers = arr.filter(item => typeof item === 'number');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
