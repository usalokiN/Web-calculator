const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const percent = document.querySelector('.percent');
const comma = document.querySelector('.comma');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelectorAll('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');

// ==============================================
let firstValue = '',
    isFirstValue = false,
    secondValue = '',
    isSecondValue = false,
    sign = '',
    resultValue = 0;


for (let i = 0; i <numbers.length; i++) {
    numbers[i].addEventListener('click', (e)=> {
        let atr = e.target.getAttribute('value');
        if (isFirstValue === false) {
            getFirstValue(atr);
        }
        if (isSecondValue == false) {
            getSecondValue(atr);
        }
    });

 

    function getFirstValue (el) {
        result.innerHTML = '';
        firstValue += el;
        result.innerHTML = firstValue;
        firstValue = +firstValue;

    }

    function getSecondValue (el) {
        if(firstValue != "" && sign != ""){
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    };
}

function getSign (el) {
    for (let i = 0; i < sign.length; i++) {
        signs[i].addEventListener('click', (event) => {
            sign = event.target.getAttribute('value');
            isFirstValue = true;    
        });
    }
}
equals.addEventListener('click', () => {
    result.innerHTML = '';
    if(sign == "+") {
        resultValue = firstValue + secondValue;
    } else if (sign == '-') {
        resultValue = firstValue - secondValue;
    } else if (sign === 'x') {
        resultValue = firstValue * secondValue;
    } else if (sign === '/') {
        resultValue = firstValue / secondValue;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = '';

    checkResultLength();
});

function checkResultLength() {
    resultValue = JSON.stringify(resultValue);

    if (resultValue.length >= 8) {
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

negative.addEventListener('click', () => {
    result.innerHTML = '';
    if (firstValue != "") {
        resultValue = -firstValue;
        firstValue = resultValue;
    }
    if(firstValue != '' && secondValue != "" && sign != '') {
        resultValue = -resultValue;
    }
    result.innerHTML = resultValue;
});
percent.addEventListener('click', () => {
    result.innerHTML = '';
    if (firstValue != '') {
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }
    if (firstValue != '' && secondValue != '' && sign != '') {
        resultValue = resultValue / 100;
    }
    result.innerHTML = resultValue;
});

clear.addEventListener('click', () => {
    result.innerHTML = 0;

    firstValue = '';
    isFirstValue = false,
    secondValue = '',
    isSecondValue = false,
    sign = '',
    resultValue = 0;
});
}

getSign();