

function computerPlay() {
    let deger = Math.floor(Math.random() * 3);
    if (deger == 0) {
        //alert('rock');
        return 'rock';
        // return  "rock";

    } else if (deger == 1) {
        //alert('papaer');
        return 'paper';
    }
    else {
        // alert('scissors');
        return 'scissors';
    }
}

//computerPlay();
let rounds = prompt('Please Enter rounds ');
let playerRound = 0;
let computerRound = 0;
function playRound(playerSelection, computerSelection) {

    if (playerSelection == 'scissors') {
        if (computerSelection == 'scissors') {
            alert('Noone won');
            document.write(`Player-${playerSelection}, Computer-${computerSelection}<br>`);
            document.write(`Player ${playerRound}, Computer ${computerRound}<br><br>`);

        }
        else if (computerSelection == 'paper') {
            alert('You win!');
            document.write(`Player-${playerSelection}, Computer-${computerSelection}<br>`);
            document.write(`Player ${playerRound}, Computer ${computerRound}<br><br>`);
            playerRound += 1;
        }
        else {
            alert('You lose!');
            document.write(`Player-${playerSelection}, Computer-${computerSelection}<br>`);
            document.write(`Player ${playerRound}, Computer ${computerRound}<br><br>`);
            computerRound += 1;
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'paper') {
            alert('Noone won');
            document.write(`Player-${playerSelection}, Computer-${computerSelection}<br>`);
            document.write(`Player ${playerRound}, Computer ${computerRound}<br><br>`);
        }
        else if (computerSelection == 'rock') {
            alert('You win!');
            document.write(`Player-${playerSelection}, Computer-${computerSelection}<br>`);
            document.write(`Player ${playerRound}, Computer ${computerRound}<br><br>`);
            playerRound += 1;
        }
        else {
            alert('You lose!');
            document.write(`Player-${playerSelection}, Computer-${computerSelection}<br>`);
            document.write(`Player ${playerRound}, Computer ${computerRound}<br><br>`);
            computerRound += 1;

        }
    }
    else if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            alert('Noone won');
            document.write(`Player-${playerSelection}, Computer-${computerSelection}<br>`);
            document.write(`Player ${playerRound}, Computer ${computerRound}<br><br>`);
        }
        else if (computerSelection == 'scissors') {
            alert('You Win!');
            playerRound += 1;
            document.write(`Player-${playerSelection}, Computer-${computerSelection}<br>`);
            document.write(`Player ${playerRound}, Computer ${computerRound}<br><br>`);
        }
        else {
            alert('You Lost');
            computerRound += 1;
            document.write(`Player-${playerSelection}, Computer-${computerSelection}<br>`);
            document.write(`Player ${playerRound}, Computer ${computerRound}<br><br>`);
        }
    }
    return
}

function game() {
    for (round = 0; round < rounds; round++) {
        //const x = array[rounds]; 
        const computerSelection = computerPlay();
        const playerSelection = prompt('Please enter: Rock, Paper, Scissors').toLowerCase();
        playRound(playerSelection, computerSelection);
    }

    if (playerRound > computerRound) {
        document.write(`Player won: Player ${playerRound}, Computer ${computerRound}`);
    }
    else if (playerRound < computerRound) {
        document.write(`Computer won: Player ${playerRound}, Computer ${computerRound}`);
    }
    else {
        game();
    }
}
game();