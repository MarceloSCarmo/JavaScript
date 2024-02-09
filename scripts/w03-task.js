/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.getElementById('sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click',addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(subtract1, subtract2) {
    return subtract1 - subtract2;
}

function subtractNumbers() {
    let subtractNumbers1 = Number(document.querySelector('#subtract1').value);
    let subtractNumbers2 = Number(document.querySelector('#subtract2').value);

    document.getElementById('difference').value = subtract(subtractNumbers1, subtractNumbers2); 
}

document.querySelector('#subtractNumbers').addEventListener('click',subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    document.getElementById('product').value = multiply(factor1, factor2);
}
document.querySelector('#multiplyNumbers').addEventListener('click',multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor) => dividend / divisor;

const divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    document.getElementById('quotient').value = divide(dividend, divisor);
}
document.querySelector('#divideNumbers').addEventListener('click',divideNumbers);

/* Decision Structure */
function getTotal() {
    let subTotal = parseFloat(document.getElementById('subtotal').value);

    if (document.getElementById('member').checked) {
        subTotal = subTotal - (subTotal * 0.2);
    } 

    document.getElementById('total').textContent = `$${subTotal.toFixed(2)}`;
}
document.getElementById('getTotal').addEventListener('click', getTotal);
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let number1To13 = [1,2,3,4,5,6,7,8,9,10,11,12,13];

document.getElementById('array').innerHTML = number1To13;
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = number1To13.filter(number => number % 2 === 1);
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = number1To13.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = number1To13.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = number1To13.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = number1To13.map(number => number * 2).reduce((sum, number) => sum + number);