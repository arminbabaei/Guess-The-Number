let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const $ = document
const displayMessage = function (message) {
    $.querySelector('.message').textContent = message
}
$.querySelector('.check').addEventListener('click', function () {
    const guess = Number($.querySelector('.guess').value);
    if(!guess) {
        displayMessage('مشتی شماره وارد نکردیا 😂🤦‍♂️');
    } else if (guess === secretNumber) {
        displayMessage('ایول 👏😍 بیا اینم جایزت 🍬🤣');
        $.body.style.backgroundColor = '#17b331';
        $.querySelector('.number').style.width = '30rem'
        $.querySelector('.number').textContent = secretNumber;
        if (score > highScore) {
            highScore = score;
            $.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'بیا پایین 😜 آفرین' : 'تلاشت خوبه 🤣 برو بالا');
            score --;
            $.querySelector('.score').textContent = score;
        } else {
            displayMessage('ای بابا باختی که مشتی 💔😒')
            $.body.style.backgroundColor = '#b51313';
            $.querySelector('.score').textContent = 0;
            $.querySelector('.number').textContent = secretNumber;
        }
    }
});
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('منتظر چی هستی مشتی حدس بزن خُب');
    $.querySelector('.score').textContent = score;
    $.querySelector('.number').textContent = '?';
    $.querySelector('.guess').value = '';
    $.body.style.backgroundColor = '#363636';
    $.querySelector('.number').style.width = '15rem'
})