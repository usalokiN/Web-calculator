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
            getFirstValue(atr);
        }
    })
} 

    function getFirstValue (el) {
        result.innerHTML = '';
        firstValue += el;
        result.innerHTML = firstValue;
        firstValue = +firstValue;

    }

    function getSecondValue (el) {
        if(firstValue != "" && sign != "")

        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = +secondValue;

    };

function getSign (el) {
    for (let i = 0; i < sign.length; i++) {
        signs[i].addEventListener('click', (event) => {
            sign = event.target.getAttribute('value');
            isFirstValue = true;    
        });
    }
}

getSign();