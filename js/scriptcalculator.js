let currentNumber = '';
let previousNumber = '';
let operation = '';

function appendNumber(number) {
    if (number === '.' && currentNumber.includes('.')) return;
    currentNumber += number;
    updateScreen();
}

function chooseOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') calculate();
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current === 0 ? 'Error' : prev / current;
            break;
        default:
            return;
    }
    currentNumber = result.toString();
    operation = '';
    previousNumber = '';
    updateScreen();
}

function clearScreen() {
    currentNumber = '';
    previousNumber = '';
    operation = '';
    updateScreen();
}

function updateScreen() {
    document.getElementById('calculator-screen').value = currentNumber;
}
