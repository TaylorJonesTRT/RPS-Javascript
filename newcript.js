// const score;
const choices = document.querySelectorAll('.choice');
const playerPointsHtml = document.querySelector('.player-points');
const cpuPointsHtml = document.querySelector('computer-points');
const playerScore = 0;
const cpuScore = 0;
const resultsText = document.querySelector('.results-text');
const winnerHtml = document.querySelector('.winner');
const playerHtmlChoice = document.querySelector('.player-choice');
const cpuHtmlChoice = document.querySelector('.cpu-choice');

console.log(choices);

// Adding event listeners to all images
for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener('click', playGame);
}

function playGame(e) {
    // Resetting text contents from previos round
    resultsText.textContent = "";
    winnerHtml.textContent = "";
    playerHtmlChoice.textContent = "";
    cpuHtmlChoice.textContent = "";

    let playerSelection = e.target.className;

    // Computer selection logic
    let computerSelection = Math.random();
    if (computerSelection < .34){
        computerSelection = 'Rock';
    } else if (computerSelection <= .67){
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissors';
    }

    if (playerSelection !== " ") {
        playerHtmlChoice.textContent = playerSelection;
    }

    cpuHtmlChoice.textContent - computerSelection;

    let result = checkWinner(playerSelection, computerSelection);

    function checkWinner(player, computer) {
        if (player === computer) {
            return 'Draw';
        }
        if (player === 'Rock') {
            if (computer === 'Paper') {
                return 'Computer';
            } else {
                return 'Player';
            }
        }
        if (player === 'Paper') {
            if (computer === 'Scissors') {
                return 'Computer';
            } else {
                return 'Player';
            }
        }
        if (player === 'Scissors') {
            if (computer === 'Rock') {
                return 'Computer';
            } else {
                return 'Player';
            }
        }
    }
}

playGame();