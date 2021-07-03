function add(a,b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a,b) {
    return parseInt(a) - parseInt(b);
}

function multiply(a,b) {
    return parseInt(a) * parseInt(b);
}

function divide(a,b) {
    return parseInt(a)/parseInt(b);
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

let inputNumA;
let inputNumB;
let currentInput;
let operatorInput = '';
let operatorActive = false;

const history = document.querySelector('#history');
const solution = document.querySelector('#solution');


const equal = document.querySelector('#equal');
equal.addEventListener('click', ()=> {
    inputNumB = solution.textContent;
    console.log("Operator input:" + operatorInput);
    console.log("NumA: " + inputNumA);
    console.log("NumB: " + inputNumB);
    solution.textContent = operate(operatorInput, inputNumA, inputNumB);
  
});


const operators = document.querySelectorAll('.operator');
operators.forEach((operator)=> {
    operator.addEventListener('click', ()=> {
        if(inputNumA !=undefined && inputNumB != undefined) {
            solution.textContent = operate(operatorInput, inputNumA, inputNumB);
        }
        operatorInput = operator.textContent;
        if(inputNumA != undefined) {
            inputNumB = solution.textContent;
            operatorActive = false;
            //operate(operatorInput, inputNumA, inputNumB);
        } else {
            inputNumA = solution.textContent;
            operatorActive = true;
        }

        
    });
});

const numbers = document.querySelectorAll('.number');
numbers.forEach((number)=> {
    number.addEventListener('click', ()=> {
        //Reset Number if Operator active
        if(operatorActive) {
            solution.textContent = "";
            operatorActive = false;
        }
        //Inputting Number
        currentInput = solution.textContent + number.textContent;
        solution.textContent = currentInput;

        //Other
    });
});

const ac = document.querySelectorAll('.clear');
ac.forEach((c)=> {
    c.addEventListener('click', ()=> {
        solution.textContent = "";
        inputNumA = undefined;     
        inputNumB = undefined;     
        operatorInput = undefined;
    });
});
