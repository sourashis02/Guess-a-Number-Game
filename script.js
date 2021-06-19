'use strict';

let guessValue = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let playing = true;
const gamemessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function check() {
    const val = Number(document.querySelector('.guess').value);
    // if there is no value in the value section .
    if (playing) {
        if (!val) {
            gamemessage('⛔ No Number!');
        } else if (val === guessValue) {
            // when the value is correct
            playing = false;
            gamemessage('🎉 Correct Number!');
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = guessValue;
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        } else if (val !== guessValue) {
            // if the value is not correct at that time !!!!!!
            if (score > 1) {
                gamemessage(val > guessValue ? '📈 Too High!' : '📉 Too Low!');
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                score--;
                gamemessage('💣 You have lost the Game!');
                document.querySelector('.score').textContent = '0';
            }
        }
    }
});

document.querySelector('.again').addEventListener('click', function again() {
    playing = true;
    score = 20;
    guessValue = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.backgroundColor = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});