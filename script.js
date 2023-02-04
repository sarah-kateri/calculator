const display = document.querySelector('.display');

const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const times = document.getElementById('times');
const dividedBy = document.getElementById('divided-by');
const toPower = document.getElementById('to-power');
const point = document.getElementById('point');
const backspace = document.getElementById('backspace');
const percent = document.getElementById('percent');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');

let a = 'temp';
let b = 'temp';
let operator;

//Add event listeners on 0-9 buttons//

zero.addEventListener('click', () => {
    display.textContent = '0';
    a === 'temp' ? a = 0 : b = 0;
});

one.addEventListener('click', () => {
    display.textContent = '1';
    a === 'temp' ? a = 1 : b = 1;
    console.log (a);
    console.log (b);
});

two.addEventListener('click', () => {
    display.textContent = '2';
    a === 'temp' ? a = 2 : b = 2;
    console.log (a);
    console.log (b);
});

three.addEventListener('click', () => {
    display.textContent = '3';
    a === 'temp' ? a = 3 : b = 3;
});

four.addEventListener('click', () => {
    display.textContent = '4';
    a === 'temp' ? a = 4 : b = 4;
});

five.addEventListener('click', () => {
    display.textContent = '5';
    a === 'temp' ? a = 5 : b = 5;
});

six.addEventListener('click', () => {
    display.textContent = '6';
    a === 'temp' ? a = 6 : b = 6;
});

seven.addEventListener('click', () => {
    display.textContent = '7';
    a === 'temp' ? a = 7 : b = 7;
});

eight.addEventListener('click', () => {
    display.textContent = '8';
    a === 'temp' ? a = 8 : b = 8;
});

nine.addEventListener('click', () => {
    display.textContent = '9';
    a === 'temp' ? a = 9 : b = 9;
});

//Add event listeners on operators and other symbol buttons.//
//Operate if a and b are both occupied variables. //
//Modify 'a' to equal the total in case the equation is continuing.//

plus.addEventListener('click', () => {
    display.textContent = '+';
    operator = '+';
    if (a !== 'temp' & b !== 'temp') {
        operate (a, b, operator);
        a = a + b;
        b = 'temp';
    }
});

minus.addEventListener('click', () => {
    display.textContent = '-';
    operator = '-';
    if (a !== 'temp' & b !== 'temp') {
        operate (a, b, operator);
        a = a - b;
        b = 'temp';
    }
});

times.addEventListener('click', () => {
    display.textContent = 'x';
    operator = '*';
    if (a !== 'temp' & b !== 'temp') {
        operate (a, b, operator);
        a = a * b;
        b = 'temp';
    }
});

dividedBy.addEventListener('click', () => {
    display.textContent = '/';
    operator = '/';
    if (a !== 'temp' & b !== 'temp') {
        operate (a, b, operator);
        a = a / b;
        b = 'temp';
    }
});

toPower.addEventListener('click', () => {
    display.textContent = '^';
    operator = '**';
    if (a !== 'temp' & b !== 'temp') {
        operate (a, b, operator);
        a = a ** b;
        b = 'temp';
    }
});

point.addEventListener('click', () => {
    if (a !== 'temp') {
        display.textContent = a + '.';
    } else if (b !== 'temp') {
        display.textContent = b + '.';
    }
});

backspace.addEventListener('click', () => {
   
});

percent.addEventListener('click', () => {
    
});

clear.addEventListener('click', () => {

});

equals.addEventListener('click', () => {
    operate (a, b, operator);
});

//Operator functions and operator switch//

let add = function (a, b) {
    display.textContent = a + b;
}

let subtract = function (a, b) {
    display.textContent = a - b;
}

let multiply = function (a, b) {
    display.textContent = a * b;
}

let divide = function (a, b) {
    display.textContent = a / b;
}

let raiseToPower = function (a, b) {
    display.textContent = a ** b;
}

let operate = function (a, b, operator) {
    switch (true) {
        case operator === '+':
            add(a, b);
            break;
        case operator === '-':
            subtract(a, b);
            break;
        case operator === '*':
            multiply(a, b);
            break;
        case operator === '/': 
            divide(a, b);
            break; 
        case operator === '**':
            raiseToPower(a, b);
            break;         
    }
}

