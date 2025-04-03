// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20
let numbers = []
for(let i = 10; i<= 20; i++){
    numbers.push(i)
}
console.log(numbers)
document.getElementById("numbers1").textContent = "Вивести на сторінку в один рядок через кому числа від 10 до 20 -"+ numbers

// 2 Вивести на сторінку квадрати чисел від 10 до 20 через кому
let squard = []
for(let i = 10; i<= 20; i++){
    squard.push(i*i)
}
console.log(squard)
document.getElementById("squard").textContent = "Вивести на сторінку квадрати чисел від 10 до 20 через кому -"+ squard



// 3 Вивести таблицю множення на 7 в форматі (1*7 = 7; 2*7 = 14…)
// 4 Знайти суму всіх цілих чисел від 1 до 15
let sum = 0
for(let i = 1; i<= 15; i++){
    sum += i
}
console.log(sum)
document.getElementById("sum").textContent = "Знайти суму всіх цілих чисел від 1 до 15"+ sum


// 5 Знайти добуток всіх цілих чисел від 15 до 35
let product = 1
for(let i = 15; i<= 35; i++){
    product *= i
}
console.log(product)
document.getElementById("product").textContent = "Знайти добуток всіх цілих чисел від 15 до 35"+ product



// 6
let sumBig = 0
for(let i = 1; i<= 500; i++){
    sumBig += i
}
let average=sumBig/500
console.log(average)
document.getElementById("sumBig").textContent = "Знайти середнє арифметичне всіх цілих чисел від 1 до 500"+ sumBig



// 7
let evenSmm = 0
for(let i = 30; i<= 80; i+=2){
    evenSmm += i
}
console.log(evenSmm)
document.getElementById("evenSmm").textContent = "Вивести суму тільки парних чисел в діапазоні від 30 до 80"+ evenSmm

// 8
let multiplise = []
for(let i = 100; i<= 200; i++){
    if(i % 3 === 0){
        multiplise.push(i)
    }
}
console.log(multiplise)
document.getElementById("multiplise").textContent = "Вивести всі числа в діапазоні від 100 до 200, які кратні 3"+ multiplise


// 9 
let number = prompt("введите натуральное число:")
number = parseInt(number)
let divirsion = []
let eveDivirsion = []
let eveDivirsionSum = []

for(let i = 1; i<= number; i++){
    if(number % i === 0){
        divirsion.push(i)
        if(i % 2 === 0){
            eveDivirsion.push(i)
            eveDivirsionSum += 2
        }
    }
}
document.getElementById("divirsion").textContent = "Дано натуральне число (>0). Знайти и вивести на сторінку всі його дільники - "+ divirsion
document.getElementById("eveDivirsion").textContent = "Визначити кількість його парних дільників - "+ eveDivirsion
document.getElementById("eveDivirsionSum").textContent = "Знайти суму його парних дільників - "+ eveDivirsionSum
