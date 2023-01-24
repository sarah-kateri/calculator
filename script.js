let add = function (a, b) {
    console.log(a + b);
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

add (1, 5);

let operate = function (a, b, operator) {
    switch (true) {
        case operator === '+':
            add (a, b);
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
    }
}

operate (8, 3, '+');