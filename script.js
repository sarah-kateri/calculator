const display = document.querySelector('.display');
const one = document.getElementById('one');
const two = document.getElementById('two');
const plus = document.getElementById('plus');
const equals = document.getElementById('equals');
let a = 'temp';
let b = 'temp';
let operator;

plus.addEventListener('click', () => {
    display.textContent = '+';
    operator = '+';
    if (a !== 'temp' & b !== 'temp') {
        operate ();
    }
});

equals.addEventListener('click', () => {
    operate ();
});

one.addEventListener('click', () => {
    display.textContent = '1';
    a === 'temp' ? a = 1 : b = 1;
});

two.addEventListener('click', () => {
    display.textContent = '2';
    a === 'temp' ? a = 2 : b = 2;
});

let add = function (a, b) {
    display.textContent = (a + b);
}

let subtract = function (a, b) {
    return a - b;
}

let multiply = function (a, b) {
    return a * b;
}

let divide = function (a, b) {
    return a / b;
}

let raiseToPower = function (a, b) {
    return a ** b;
}

let operate = function (a, b, operator) {
    switch (true) {
        case operator === '+':
            display.textContent = '${a} + ${b}';
            break;
        case operator === '-':
            subtract (a, b);
            break;
        case operator === '*':
            multiply (a, b);
            break;
        case operator === '/': 
            divide (a, b);
            break; 
        case operator === '**':
            raiseToPower (a, b);
            break;         
    }
}

