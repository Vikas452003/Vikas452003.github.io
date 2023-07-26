let display = document.getElementById("display");
let currentNumber = "";
let operator = "";
let result = 0;

function appendToDisplay(value) {
    currentNumber += value;
    display.value = currentNumber;
}

function clearDisplay() {
    currentNumber = "";
    operator = "";
    display.value = "";
}

function calculate() {
    if (operator === "+") {
        result += parseFloat(currentNumber);
    } else if (operator === "-") {
        result -= parseFloat(currentNumber);
    } else if (operator === "*") {
        result *= parseFloat(currentNumber);
    } else if (operator === "/") {
        result /= parseFloat(currentNumber);
    } else {
        result = parseFloat(currentNumber);
    }

    display.value = result;
    currentNumber = "";
}