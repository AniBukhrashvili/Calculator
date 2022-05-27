let display = document.getElementById('result');
let buttons = Array.from(document.getElementsByClassName('buttons'));
let nums = [];
let res = 1;

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                res = 1;
                break;
            case '⌫':
                display.innerText = display.innerText.slice(0, -1);
                res = 1;
                break;
            case '=':
                if (display.innerText.includes('^')) {
                    nums = display.innerText.split('^');
                    for (let i = 0; i < eval(nums[1]); i++) {
                        res *= eval(nums[0]);
                    }
                    display.innerText = res;
                } else {
                    display.innerText = eval(display.innerText);
                }
                break;
            case '√':
                display.innerText = Math.round(Math.sqrt(display.innerText) * 100) / 100;
                break;

            default:
                display.innerText += e.target.innerText;
                let operators = ['.', '*', '/', '+', '-', '^'];
                if (display.innerText.length == 1) {
                    for (let i = 0; i < operators.length; i++) {
                        if (display.innerText.includes(operators[i])) {
                            display.innerText = '';
                        }
                    }
                }
                for (let i = 0; i < operators.length; i++) {
                    nums = display.innerText.split(operators[i]);
                    if (nums.length > 2) {
                        display.innerText = display.innerText.substring(0, display.innerText.length - 1);
                    }
                }
        }
    });
});