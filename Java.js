
'use strict'

function computerPlay(){
    let deger = Math.floor(Math.random()*3);
    if (deger == 0) {
        //alert('rock');
        return 'Rock';
     // return  "Rock";
      
    } else if(deger ==1) {
        //alert('papaer');
       return 'Paper';
    }
    else {
       // alert('Scissors');
       return 'Scissors';
    }
}

//computerPlay();
let rounds=0;
let playerRound=0;
let computerRound=0;
function playRound(playerSelection,computerSelection){


    if (playerSelection=='Scissors') {
        if(computerSelection=='Scissors') {
          alert('Noone won');
          
            }
            else if (computerSelection=='Paper') {
                alert('You win!');
                playerRound+=1;
            }
            else {
                 alert('You lose!');
                 computerRound+=1;
        }
    }
    else if(playerSelection=='Paper'){
        if(computerSelection=='Paper') {
            alert('Noone won');
            }
              else if (computerSelection=='Rock') {
                  alert('You win!');
                  playerRound+=1;
                }
              else { 
                  alert('You lose!');
                  computerRound+=1;
                
                }  
    }
    else if (playerSelection=='Rock') {
        if (computerSelection=='Rock') {
            alert('Noone won');
        }
          else if (computerSelection=='Scissors') {
              alert('You Win!');
              playerRound+=1;
        }
          else {
              alert('You Lost');
              computerRound+=1;
            }
    }

}

const computerSelection=computerPlay();
function game(){
    for (rounds=0; rounds <= 5; rounds++) {
    //const x = array[rounds]; 
    const playerSelection = prompt();
playRound(playerSelection,computerSelection);
alert(`Oyuncu-${playerSelection}, Komputer-${computerSelection}`);

}

if(playerRound>computerRound){
    alert(`Kullanici ${playerRound}, Computer ${computerRound}`);
}
else {
    alert(`Kullanici ${playerRound}, Computer ${computerRound}`);
}

}
game();