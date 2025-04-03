const rate = 26;
let exchangerResult = "";

for (let dollars = 10; dollars <= 100; dollars += 10) {
    exchangerResult += `${dollars} USD = ${dollars * rate} UAH` + (dollars < 100 ? ", " : "");
}

document.getElementById("exchanger").textContent = 
    "2. Розрахунок валюти - " + exchangerResult;
