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
let total;
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
    console.log(a);
    console.log(b);
    console.log(operator);
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
        a += 8;
        display.textContent = a;
    } 
    if (operator !== '') {
        b += 8;
        display.textContent = b;
    }
});

nine.addEventListener('click', () => {
    if (operator === '') {
        a += 9;
        display.textContent = a;
    } 
    if (operator !== '') {
        b += 9;
        display.textContent = b;
    }
});

//Operator switch//

function operate (a, b, operator) {
    switch (true) {
        case operator === '+':
            total = Number(a) + Number(b);
            display.textContent = total;
            break;
        case operator === '-':
            total = Number(a) - Number(b);
            display.textContent = total;
            break;
        case operator === '*':
            total = Number(a) * Number(b);
            display.textContent = total;
            break;
        case operator === '/': 
            total = Number(a) / Number(b);
            display.textContent = total;
            break; 
        case operator === '**':
            total = Number(a) ** Number(b);
            display.textContent = total;
            break;         
    }
}

//Add event listeners on operators and other symbol buttons.//
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





