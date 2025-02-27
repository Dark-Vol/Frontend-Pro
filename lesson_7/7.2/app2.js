let number = parseInt(prompt('Enter a number: '));

function multiply(a) {
    return function (b) {
        return a * b;
    };
}

const result = multiply(number)(2);
console.log(result);