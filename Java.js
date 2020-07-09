
'use strict'

function computerPlay(){
    let deger = Math.floor(Math.random()*3);
    if (deger == 0) {
        //alert('rock');
        return 'rock';
     // return  "rock";
      
    } else if(deger ==1) {
        //alert('papaer');
       return 'paper';
    }
    else {
       // alert('scissors');
       return 'scissors';
    }
}

//computerPlay();
let rounds = 0;
let playerRound = 0;
let computerRound = 0;
function playRound(playerSelection, computerSelection){

    if (playerSelection == 'scissors' ) {
        if(computerSelection == 'scissors' ) {
          alert( 'Noone won' );
          
            }
            else if (computerSelection == 'paper' ) {
                alert( 'You win!' );
                playerRound += 1;
            }
            else {
                 alert( 'You lose!' );
                 computerRound += 1;
        }
    }
    else if( playerSelection == 'paper' ){
        if( computerSelection == 'paper' ) {
            alert( 'Noone won' );
            }
              else if ( computerSelection=='rock' ) {
                  alert( 'You win!' );
                  playerRound += 1;
                }
              else { 
                  alert( 'You lose!' );
                  computerRound += 1;
                
                }  
    }
    else if (playerSelection == 'rock' ) {
        if ( computerSelection == 'rock' ) {
            alert( 'Noone won' );
        }
          else if ( computerSelection == 'scissors' ) {
              alert( 'You Win!' );
              playerRound += 1;
        }
          else {
              alert( 'You Lost' );
              computerRound += 1;
            }
    }
    return 
}

function game(){
    for (rounds = 0; rounds <= 5; rounds++) {
    //const x = array[rounds]; 
    const computerSelection = computerPlay();
    const playerSelection = prompt('Please enter: Rock, Paper, Scissors').toLowerCase();
    playRound( playerSelection, computerSelection );
    alert(`Oyuncu-${playerSelection}, Komputer-${computerSelection}`);
    alert(`Kullanici ${playerRound}, Komputer ${computerRound}`);
}

if( playerRound > computerRound ){
    alert(`Kullanici kazandi: Kullanici ${playerRound}, Computer ${computerRound}`);
}
else if (playerRound < computerRound) {
    alert(`Bilgisayar kazandi: Kullanici ${playerRound}, Computer ${computerRound}`);
}
else{
    game();
}
}
game();