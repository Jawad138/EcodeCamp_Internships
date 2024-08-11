let currentInput = '0';
let previousInput = '';
let operation = null;

function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}

function appendToDisplay(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operation = null;
    updateDisplay();
    document.getElementById('error').innerText = '';
}

function setOperation(op) {
    if (operation !== null) calculate();
    operation = op;
    previousInput = currentInput;
    currentInput = '0';
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
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
            if (current === 0) {
                document.getElementById('error').innerText = 'Cannot divide by zero';
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operation = null;
    updateDisplay();
}

updateDisplay();