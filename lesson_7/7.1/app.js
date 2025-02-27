function createSum() {
    let total = 0;
    return function (num) {
        total += num; 
        return total;
    };
}

const sum = createSum();

function addNumber() {
    let input = document.getElementById('line1');
    let num = parseInt(input.value);
    
    if (!isNaN(num)) {
        let result = sum(num);
        document.getElementById('result').textContent = `Загальна сума: ${result}`;
    } else {
        alert('Будь ласка, введіть коректне число');
    }
    input.value = '';
}