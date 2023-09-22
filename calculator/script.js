const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSeondValue = false;
let sign = "";
let resultValue = 0;

for (let i=0; i<numbers.length; i++){
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if(isFirstValue === false){
            getFirstValue(atr)
            // console.log(typeof(atr))
        }
        if(isSeondValue === false){
            getSecondValue(atr);
        }
    })
}

function getFirstValue(e1){
    result.innerHTML = "";
    firstValue += e1; //like 5 + ""
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}

function getSecondValue(e1){
    if(firstValue!= "" && sign != ""){
        secondValue += e1;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    }
}
function getSign(){
    for(let i =0; i<signs.length; i++){
        signs[i].addEventListener('click',(e) => {
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}

getSign();

equals.addEventListener('click', () =>{
    result.innerHTML = 0;
    if(sign === "+"){
        resultValue = firstValue + secondValue;
    } else if(sign === "-"){
        resultValue = firstValue - secondValue;
    }else if(sign === "*"){
        resultValue = firstValue * secondValue;
    }else if(sign === "/"){
        resultValue = firstValue / secondValue;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = "";
})

function checkResultLength(){
    resultValue = JSON.stringify(resultValue);

    if(resultValue.length >=8){
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

// checkResultLength()

negative.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstValue != ""){
        resultValue =  -firstValue;
        firstValue = resultValue
    }
    if(firstValue != "" && secondValue != "" && sign != ""){
        resultValue = -resultValue;
    }

    result.innerHTML = resultValue;
})

percent.addEventListener('click', ()=>{
    result.innerHTML = "";
    if(firstValue != ""){
        resultValue =  firstValue / 100;
        firstValue = resultValue
    }
    if(firstValue != "" && secondValue != "" && sign != ""){
        resultValue = resultValue / 100;
    }

    result.innerHTML = resultValue;
})

clear.addEventListener('click', ()=>{
    result.innerHTML = 0;

    firstValue = "";
    isFirstValue = false;
    secondValue = "";
    isSeondValue = false;
    sign = ""
    resultValue = 0;
})











