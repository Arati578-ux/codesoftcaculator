let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let currentNumber = '';
let previousNumber = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let buttonText = button.textContent;

        if (buttonText === 'C') {
            currentNumber = '';
            previousNumber = '';
            operator = '';
            display.value = '';
        } else if (buttonText === '←') {
            currentNumber = currentNumber.slice(0, -1);
            display.value = currentNumber;
        } else if (buttonText === '=' && previousNumber !== '') {
            let result = eval(previousNumber + operator + currentNumber);
            display.value = result;
            currentNumber = result;
            previousNumber = '';
            operator = '';
        } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
            if (previousNumber !== '') {
                let result = eval(previousNumber + operator + currentNumber);
                display.value = result;
                currentNumber = '';
                previousNumber = result;
                operator = buttonText;
            } else {
                previousNumber = currentNumber;
                currentNumber = '';
                operator = buttonText;
            }
        } else {
            currentNumber += buttonText;
            display.value = currentNumber;
        }
    });
});;
