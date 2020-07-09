
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
/*()=> playerSelection=='Scissors',computerSelection=='Paper'?alert('You win!'):computerSelection=='Rock'?alert('You lose!'):computerSelection=='Scissors'?alert("Esitlik"):
playerSelection=='Paper',computerSelection=='Rock'?alert('You win!'):computerSelection=='Scissors'?alert('You lose!'):computerSelection=='Paper'?alert("Esitlik"):
playerSelection=='Rock',computerSelection=='Scissors'?alert('You win!'):computerSelection=='Paper'?alert('You win!'):computerSelection=='Rock'?alert("Esitlik"):
alert("Bir daha yoxlayin");
}*/
//playRound();

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
//playRound(playerSelection,computerSelection);
}


//(playerSelection == 'Rock')?computerSelection=='Paper' alert("komputer uddu"):alert("kullanici qalib oldu");
//(playerSelection == 'Scissors',computerSelection=='Rock')alert("komputer uddu"):alert("kullanici qalib oldu");
//(playerSelection == 'Paper',computerSelection=='Scissors')?alert("komputer uddu"):alert("kullanici qalib oldu");

//const playerSelection=prompt();
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