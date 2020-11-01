

const btnNums = document.querySelectorAll('.num');
const screen = document.getElementById('screen');
var activeSign = '';
var total = null;
var firstNum = true;
var num;
btnNums.forEach(button => {
    button.addEventListener('click', () => {
        num = button.textContent;
        if (firstNum) {
            screen.textContent = num;
            //console.log('if')
        } else {
            screen.textContent += num;
            //console.log('else')
        }

        firstNum = false;
        
        //console.log('pressed: ' + button.textContent);
        //console.log('activeSign: ' + activeSign);
    })
})

const btnSigns = document.querySelectorAll('.sign');

btnSigns.forEach(button => {
    button.addEventListener('click', () => {
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
        
        activeSign = button.textContent;
        //console.log('activeSign: ' + activeSign);
        firstNum = true;
    })
})

function calculate() {
    num = parseFloat(screen.textContent);

    if (activeSign == '+') {
        total += num;
    }
    else if (activeSign == '-') {
        total -= num;
    }
    else if (activeSign == '/') {
        total /= num;
    }
    else if (activeSign == 'x') {
        total *= num;
    }
    console.log(total);
}

function equals() {
    calculate();
    screen.textContent = total;

    firstNum = true;
    total = parseFloat(screen.textContent);
    activeSign = '';
}

const btnEquals = document.getElementById('op-eq');

btnEquals.addEventListener('click', equals);