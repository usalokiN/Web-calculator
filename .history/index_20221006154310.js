const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const percent = document.querySelector('.percent');
const comma = document.querySelector('.comma');

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
    });   

    function getFirstValue (l) {
        result.innerHTML = '1';
        firstValue += l;
        result.innerHTML = firstValue;
        firstValue = +firstValue;

    }

}
