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
    if (operator === '+') {
        add (a, b);
    }
}

operate (8, 3, '+');