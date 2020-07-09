
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
            }
            else { alert('You lose!');}
    }
    else if(playerSelection=='Paper'){
        if(computerSelection=='Paper') {
            alert('Noone won');
            }
              else if (computerSelection=='Rock') {
                  alert('You win!');
                }
              else { alert('You lose!');}  
    }
    else if (playerSelection=='Rock') {
        if (computerSelection=='Rock') {
            alert('Noone won');
        }
          else if (computerSelection=='Scissors') {
              alert('You win!');
        }
          else {alert('Meglub  oldunuz');}
    }
}

//(playerSelection == 'Rock')?computerSelection=='Paper' alert("komputer uddu"):alert("kullanici qalib oldu");
//(playerSelection == 'Scissors',computerSelection=='Rock')alert("komputer uddu"):alert("kullanici qalib oldu");
//(playerSelection == 'Paper',computerSelection=='Scissors')?alert("komputer uddu"):alert("kullanici qalib oldu");

const playerSelection=prompt();
const computerSelection=computerPlay();
playRound(playerSelection,computerSelection);
alert(`Oyuncu-${playerSelection}, Komputer-${computerSelection}`);
