
'use strict';



let secretNumber = Math.trunc(Math.random() * 20) + 1;


let score = 20;
// let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        // document.querySelector('.message').textContent = "No Number!";
        displayMessage('No Number!')
    } else if (guess === secretNumber) {
        displayMessage('correct Number!')
        // document.querySelector('.message').textContent = 'correct Number!';

        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').style.color = 'red';
        document.querySelector('.highscore').textContent = score;
        // if (score > highscore) {
        //     highScore = score;
        //     document.querySelector('.highscore').textContent = highScore;
        // }


        // again()

    } else if (guess !== secretNumber) {

        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too High!' : 'Too lOW!')
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High!' : 'Too lOW!';

            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You Are Lost The Game!');
            document.querySelector('.message').style.color = 'red';
            // document.querySelector('.message').textContent = 'You Are Lost The Game!';


            document.querySelector('.score').textContent = 0;
            // again()

        }

    }

})

// const again = function () {

document.querySelector('.again').addEventListener('click', function () {

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...')
    // document.querySelector('.message').textContent = 'Start guessing...';

    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').style.color = '#222';
    document.querySelector('.highscore').textContent = 0;
    document.querySelector('.message').style.color = 'white'



})



























