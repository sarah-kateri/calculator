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
let total = '';
let operator = '';

//Add event listeners on 0-9 buttons//

zero.addEventListener('click', () => {
    if (operator === '') {
        a += 0;
        a = a.slice(0, 12);
        display.textContent = a;
    } else if (operator !== '') {
        b += 0;
        b = b.slice(0, 12);
        display.textContent = b;
    } 
});

one.addEventListener('click', () => {
    if (operator === '') {
        a += 1;
        a = a.slice(0, 12);
    display.textContent = a;
    } else if (operator !== '') {
        b += 1;
        b = b.slice(0, 12);
    display.textContent = b;
    }
});

two.addEventListener('click', () => {
    if (operator === '') {
        a += 2;
        a = a.slice(0, 12);
        display.textContent = a;
    } 
    if (operator !== '') {
        b += 2;
        b = b.slice(0, 12);
        display.textContent = b;
    }
});

three.addEventListener('click', () => {
    if (operator === '') {
        a += 3;
        aDisplay = a.slice(0, 12);
        display.textContent = aDisplay;
    } 
    if (operator !== '') {
        b += 3;
        b = b.slice(0, 12);
        display.textContent = b;
    }
});

four.addEventListener('click', () => {
    if (operator === '') {
        a += 4;
        a = a.slice(0, 12);
        display.textContent = a;
    } 
    if (operator !== '') {
        b += 4;
        b = b.slice(0, 12);
        display.textContent = b;
    }
});

five.addEventListener('click', () => {
    if (operator === '') {
        a += 5;
        a = a.slice(0, 12);
        display.textContent = a;
    } 
    if (operator !== '') {
        b += 5;
        b = b.slice(0, 12);
        display.textContent = b;
    }
});

six.addEventListener('click', () => {
    if (operator === '') {
        a += 6;
        a = a.slice(0, 12);
        display.textContent = a;
    } 
    if (operator !== '') {
        b += 6;
        b = b.slice(0, 12);
        display.textContent = b;
    }
});

seven.addEventListener('click', () => {
    if (operator === '') {
        a += 7;
        a = a.slice(0, 12);
        display.textContent = a;
    } 
    if (operator !== '') {
        b += 7;
        b = b.slice(0, 12);
        display.textContent = b;
    }
});

eight.addEventListener('click', () => {
    if (operator === '') {
        a += 8;
        a = a.slice(0, 12);
        display.textContent = a;
    } 
    if (operator !== '') {
        b += 8;
        b = b.slice(0, 12);
        display.textContent = b;
    }
});

nine.addEventListener('click', () => {
    if (operator === '') {
        a += 9;
        a = a.slice(0, 12);
        display.textContent = a;
    } 
    if (operator !== '') {
        b += 9;
        b = b.slice(0, 12);
        display.textContent = b;
    }
});

//Operator switch//

function operate (a, b, operator) {
    switch (true) {
        case operator === '+':
            total = Number(a) + Number(b);
            totalDisplay = total.toString().slice(0, 12);
            display.textContent = totalDisplay;
            break;
        case operator === '-':
            total = Number(a) - Number(b);
            total = total.toString().slice(0, 12);
            display.textContent = total;
            break;
        case operator === '*':
            total = Number(a) * Number(b);
            total = total.toString().slice(0, 12);
            display.textContent = total;
            console.log(total);
            break;
        case operator === '/': 
            total = Number(a) / Number(b);
            total = total.toString().slice(0, 12);
            display.textContent = total;
            break; 
        case operator === '**':
            total = Number(a) ** Number(b);
            total = total.toString().slice(0, 12);
            display.textContent = total;
            break;         
    }
}

//Add event listeners on operators.//
//Operate if a and b are both occupied variables. //
//Modify 'a' to equal the total in case the equation is continuing.//

plus.addEventListener('click', () => {
    display.textContent = '+';
    if (a !== '' & b !== '') {
        operate (a, b, operator);
        a = total;
    }
    operator = '+';
    b = '';
});

minus.addEventListener('click', () => {
    display.textContent = '-';
    if (a !== '' & b !== '') {
        operate (a, b, operator); 
        a = total; 
    }
    operator = '-';
    b = '';
});

times.addEventListener('click', () => {
    display.textContent = '*';
    if (a !== '' & b !== '') {
        operate (a, b, operator);
        a = total;
    }
    operator = '*';
    b = '';
});

dividedBy.addEventListener('click', () => {
    display.textContent = '/';
    if (a !== '' & b !== '') {
        operate (a, b, operator);
        a = total;
    }
    operator = '/';
    b = '';
});

toPower.addEventListener('click', () => {
    display.textContent = '^';
    if (a !== '' & b !== '') {
        operate (a, b, operator);
        a = total;
    }
    operator = '**';
    b = '';
});

equals.addEventListener('click', () => {
    if (a !== '' & b !== '') {
    operate (a, b, operator);
    a = total;
    }
    b = '';
});

//Add event listeners on other symbol buttons.//

point.addEventListener('click', () => {
    if (operator === '') {
        a += '.';
        display.textContent = a;
    } 
    if (operator !== '') {
        b += '.';
        display.textContent = b;
    }
});

backspace.addEventListener('click', () => {
    if (operator === '') {
        a = a.slice(0, a.length - 1);
        display.textContent = a;
    } 
    if (operator !== '') {
        b = b.slice(0, b.length - 1);
        display.textContent = b;
    }
});

percent.addEventListener('click', () => {
    if (operator === '') {
        a = a / 100;
        display.textContent = a;
    } 
    if (operator !== '') {
        b = b / 100;
        display.textContent = b;
    }
});

clear.addEventListener('click', () => {
    a = '';
    b = '';
    total = '';
    operator = '';
    display.textContent = '';
});





