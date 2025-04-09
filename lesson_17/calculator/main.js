// main.js

import Calculator from './components/Calculator.js';
import History from './components/history.js';
import Memory from './components/memory.js';

// Створення екземплярів класів
const calc = new Calculator();
const history = new History();
const memory = new Memory();

// Виконання обчислень
calc.add(10, 5);
history.addToHistory(`10 + 5 = ${calc.getResult()}`);

calc.subtract(10, 3);
history.addToHistory(`10 - 3 = ${calc.getResult()}`);

calc.multiply(4, 3);
history.addToHistory(`4 * 3 = ${calc.getResult()}`);

calc.divide(20, 4);
history.addToHistory(`20 / 4 = ${calc.getResult()}`);

// Виведення історії обчислень
history.displayHistory();

// Збереження результату в пам'яті
memory.saveToMemory(calc.getResult());
console.log("Memory value:", memory.recallMemory());

// Очищення пам'яті
memory.clearMemory();
console.log("Memory after clear:", memory.recallMemory());
