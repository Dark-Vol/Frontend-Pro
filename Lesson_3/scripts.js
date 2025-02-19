/*ДЗ 3.1. Перелік типів */
const outputElement = document.getElementById("output");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", () => {
    if (outputElement.style.display === "none") {
        outputElement.style.display = "block";
        showDataTypes();
    } else {
        outputElement.style.display = "none";
        outputElement.innerHTML = "";
    }
});

// Функція для виводу типів даних
function showDataTypes() {
    const dataTypes = [
        42,                  // number
        3.14,                // number (floating point)
        "Hello",             // string
        true,                // boolean
        null,                // null
        undefined,           // undefined
        Symbol("id"),        // symbol
        BigInt(9007199254740991n), // BigInt
        { name: "Alice" },   // object
        [1, 2, 3],           // array (object)
        function () {},      // function (object)
    ];

    // Очищення списку перед додаванням
    outputElement.innerHTML = "";

    dataTypes.forEach(value => {
        const displayValue = typeof value === "symbol" ? value.toString() : value;
        const typeInfo = `${displayValue} → ${typeof value}`;
        console.log(typeInfo);

        const listItem = document.createElement("li");
        listItem.textContent = typeInfo;
        outputElement.appendChild(listItem);
    });
}


/* ДЗ 3.2. Числа та рядки*/
function outputLines() {
    const line1 = document.getElementById("line1").value;
    const line2 = document.getElementById("line2").value;
    const line3 = document.getElementById("line3").value;

    const lines = [line1, line2, line3];
    lines.sort(() => Math.random() - 0.5);

    document.getElementById("result").textContent = `${lines[0]} ${lines[1]} ${lines[2]}`;
}

/* ДЗ 3.3. Розкласти п'ятизначне число */
function splitNumber() {
    const number = document.getElementById("number").value;
    const resultElement = document.getElementById("result");

    if (number.length === 5 && !isNaN(number)) {
        const digits = number.split('').join(' ');
        resultElement.textContent = digits;
    } else {
        resultElement.textContent = 'Введіть п\'ятизначне число!';
    }
}