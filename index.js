let display = document.getElementById('result');
let buttons = Array.from(document.getElementsByClassName('buttons'));
let Nums = [];
let res = 1;

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '⌫':
                display.innerText = display.innerText.slice(0, -1);
                break;
            case '=':
                if (display.innerText.includes('^')) {
                    Nums = display.innerText.split('^');
                    for (let i = 0; i < eval(Nums[1]); i++) {
                        res *= eval(Nums[0]);
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
                if (display.innerText == '.') {
                    display.innerText = '';
                }
                Nums = display.innerText.split('.');
                if (Nums.length > 2) {
                    display.innerText = display.innerText.substring(0, display.innerText.length - 1);
                }
                if (display.innerText.includes('..')) {
                    display.innerText = display.innerText.replace('..', '.');
                }
        }
    });
});