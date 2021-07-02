function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a/b;
}

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return add(a,b);
            break;
        case '-':
            return subtract(a,b);
            break;
        case 'x':
        case '*':
            return multiply(a,b);
            break;
        case '/':
            return divide(a,b);
            break;
        default:
            return 0;
    }
}

let a  = 4;
let b = 2;



const buttons = document.querySelectorAll('.button');


buttons.forEach((e) => {
    console.log(e);
});

// [].forEach.call(buttons, (div, row, column)=> {
//     div.style.gridRow = row;
//     row++;
//     div.style.gridColumn = column;
//     column++;
//     if(row > 4) {
//         row = 0;
//     }
//     if(column > 5) {
//         column = 0;
//     }

// });

