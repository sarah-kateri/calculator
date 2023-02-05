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

let a = '';
let b = '';
let operator = '';

//Add event listeners on 0-9 buttons//

zero.addEventListener('click', () => {
    if (operator === '') {
        a += 0;
        display.textContent = a;
    } else if (operator !== '') {
        b += 0;
        display.textContent = b;
    }  
    console.log(a); 
    console.log(b);
});

one.addEventListener('click', () => {
    if (operator === '') {
        a += 1;
    display.textContent = a;
    } else if (operator !== '') {
        b += 1;
    display.textContent = b;
    console.log (a);
    console.log (b);
    }
});

two.addEventListener('click', () => {
    if (operator === '') {
        a += 2;
        display.textContent = a;
    } 
    if (operator !== '') {
        b += 2;
        display.textContent = b;
    console.log(a);
    console.log(b);
    console.log(operator);
    }
});

three.addEventListener('click', () => {
    if (operator === '') {
        a += 3;
        display.textContent = a;
    } 
    if (operator !== '') {
        b += 3;
        display.textContent = b;
    }
});

four.addEventListener('click', () => {
    if (operator === '') {
        a += 4;
        display.textContent = a;
    } 
    if (operator !== '') {
        b += 4;
        display.textContent = b;
    }
});

five.addEventListener('click', () => {
    if (operator === '') {
        a += 5;
        display.textContent = a;
    } 
    if (operator !== '') {
        b += 5;
        display.textContent = b;
    }
});

six.addEventListener('click', () => {
    if (operator === '') {
        a += 6;
        display.textContent = a;
    } 
    if (operator !== '') {
        b += 6;
        display.textContent = b;
    }
});

seven.addEventListener('click', () => {
    if (operator === '') {
        a += 7;
        display.textContent = a;
    } 
    if (operator !== '') {
        b += 7;
        display.textContent = b;
    }
});

eight.addEventListener('click', () => {
    if (operator === '') {
        a += 2;
        display.textContent = a;
    } 
    if (operator !== '') {
        b += 2;
        display.textContent = b;
    }
});

nine.addEventListener('click', () => {
    if (operator === '') {
        a += 2;
        display.textContent = a;
    } 
    if (operator !== '') {
        b += 2;
        display.textContent = b;
    }
});

//Add event listeners on operators and other symbol buttons.//
//Operate if a and b are both occupied variables. //
//Modify 'a' to equal the total in case the equation is continuing.//

plus.addEventListener('click', () => {
    display.textContent = '+';
    if (a !== '' & b !== '') {
        operate (a, b, operator);
    }
    operator = '+';
});

minus.addEventListener('click', () => {
    display.textContent = '-';
    if (a !== '' & b !== '') {
        operate (a, b, operator);  
    }
    operator = '-';
});

times.addEventListener('click', () => {
    display.textContent = '*';
    if (a !== '' & b !== '') {
        operate (a, b, operator);
    }
    operator = '*';
});

dividedBy.addEventListener('click', () => {
    display.textContent = '/';
    if (a !== '' & b !== '') {
        operate (a, b, operator);
    }
    operator = '/';
});

toPower.addEventListener('click', () => {
    display.textContent = '^';
    if (a !== '' & b !== '') {
        operate (a, b, operator);
    }
    operator = '**';
});

point.addEventListener('click', () => {
    if (a !== '') {
        display.textContent = a + '.';
    } else if (b !== '') {
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
    display.textContent = Number(a + b);
    a = Number(a + b);
    b = '';
}

let subtract = function (a, b) {
    display.textContent = a - b;
    a = a - b;
    b = '';
}

let multiply = function (a, b) {
    display.textContent = a * b;
    a = a * b;
    b = '';
}

let divide = function (a, b) {
    display.textContent = a / b;
    a = a / b;
    b = '';
}

let raiseToPower = function (a, b) {
    display.textContent = a ** b;
    a = a ** b;
    b = '';
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

