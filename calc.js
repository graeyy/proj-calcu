/**
 * TODO: add keyboard support 
 * * limit number display
 */

const btnNums = document.querySelectorAll('.num');
const screen = document.getElementById('screen');
var activeSign = '';
var total = null;
var firstNum = true;
var num;
var withDec = false;

document.addEventListener('keydown', function(e) {
    if (e.key >= 0 && e.key <= 9 || e.key == '.') {
        addNum(e.key);
    }
    if (e.key == 'Backspace') {
        delChar();
    }

    if (e.key == '+' || e.key == '−' || e.key == '÷' || e.key == '×') {
        activateSign();
        activeSign = e.key;
    }
    if (e.key == '=' || e.key == 'Enter') {
        equals();
    }
})

btnNums.forEach(button => {
    button.addEventListener('click', () => {
        num = button.textContent;
        addNum(num);
    })
})

function addNum(num) {
    //num = e.target.textContent;
    /**
     * TODO: refactor this pls, redundant
     */
    if (num == '.') {
        if (!withDec) {
            withDec = true;
            if (firstNum) {
                screen.textContent = '0' + num;
            } else {
                screen.textContent += num;
            }
        }
    } else {
        if (firstNum) {
            screen.textContent = num;
            //console.log('if')
        } else {
            screen.textContent += num;
            //console.log('else')
        }
    }

    firstNum = false;
    
    //console.log('pressed: ' + button.textContent);
    //console.log('activeSign: ' + activeSign);
}

const btnSigns = document.querySelectorAll('.sign');

btnSigns.forEach(button => {
    button.addEventListener('click', () => {
        activateSign();
        activeSign = button.textContent;
    })
})

function activateSign() {
    if (activeSign == '') {
        if (total == null) {
            num = parseFloat(screen.textContent);
            total = num;
            //console.log(typeof total)
            //console.log('total: ' + total + ', activeSign: ' + activeSign)
        }
    } else {
        calculate();
    }
    
    //console.log('activeSign: ' + activeSign);
    firstNum = true;

    withDec = false;
}

function calculate() {
    num = parseFloat(screen.textContent);

    if (activeSign == '+') {
        total += num;
    }
    else if (activeSign == '−') {
        total -= num;
    }
    else if (activeSign == '÷') {
        total /= num;
    }
    else if (activeSign == '×') {
        total *= num;
    } else {
        total = num;
    }
    console.log(total);
    screen.textContent = total;
    withDec = false;
}

function equals() {
    calculate();
    //screen.textContent = total;

    total = null;
    //total = parseFloat(screen.textContent);
    firstNum = true;
    activeSign = '';
    withDec = false;
}

const btnEquals = document.getElementById('op-eq');

btnEquals.addEventListener('click', equals);

const btnAllClr = document.getElementById('op-allClr');
const btnDel = document.getElementById('op-del');
const btnSign = document.getElementById('op-sign');

btnAllClr.addEventListener('click', () => {
    total = null;
    screen.textContent = 0;
    firstNum = true;
    activeSign = '';
    withDec = false;
})

btnDel.addEventListener('click', delChar)

function delChar() {
    num = screen.textContent;

    if (num.length > 1) {
        var n = num.substr(num.length-1, 1);
        if (n == '.') withDec = false;
        num = num.substr(0, num.length - 1);
    } else {
        num = 0;
    }
    
    screen.textContent = num;

}

btnSign.addEventListener('click', () => {
    num = parseFloat(screen.textContent);
    num *= -1;
    screen.textContent = num;
})

/*
const decPoint = document.getElementById('op-dec');

decPoint.addEventListener('click', () => {
    
    if (!withDec) {
        screen.textContent += '.';
        withDec = true;
        firstNum = false;
    }
})*/