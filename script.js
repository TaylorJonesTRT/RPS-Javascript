// const score;
const playerPointsHtml = document.querySelector('.player-points');
const cpuPointsHtml = document.querySelector('computer-points');
let playerScore = 0;
let cpuScore = 0;
const resultsText = document.querySelector('.results-text');
const winnerHtml = document.querySelector('.winner');
const playerHtmlChoice = document.querySelector('.player-choice');
const cpuHtmlChoice = document.querySelector('.cpu-choice');
const playerScoreHtml = document.querySelector('.player-points');
const cpuScoreHtml = document.querySelector('.computer-points');

function playGame(choice) {
    // Computer selection logic
    let computerSelection = Math.random();
    if (computerSelection < .34){
        computerSelection = 'Rock';
    } else if (computerSelection <= .67){
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissors';
    }

    let playerSelection = choice;
    playerHtmlChoice.textContent = playerSelection + " (Player)";
    cpuHtmlChoice.textContent = computerSelection + " (CPU)";

 if (checkWinner(playerSelection, computerSelection) === 'Player') {
     resultsText.textContent = playerSelection + ' beats ' + computerSelection + ',';
     winnerHtml.textContent = ' Player Wins!';
     playerScore = playerScore + 1
     playerScoreHtml.textContent = playerScore;
 } else if (checkWinner(playerSelection, computerSelection) === 'Computer') {
     resultsText.textContent = computerSelection + ' beats ' + playerSelection + ',';
     winnerHtml.textContent = ' Computer Wins!';
     cpuScore = cpuScore + 1
     cpuScoreHtml.textContent = cpuScore;
 } else if (checkWinner(playerSelection, computerSelection) === 'Draw') {
     resultsText.textContent = "It's a tie!";
     winnerHtml.textContent = "";
 }

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