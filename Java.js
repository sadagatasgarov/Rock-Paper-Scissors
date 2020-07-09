
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
       // alert('qayci');
       return 'Qayci';
    }
}

//computerPlay();

function playRound(playerSelection,computerSelection){
/*()=> playerSelection=='Qayci',computerSelection=='Paper'?alert('Qalib oldunuz'):computerSelection=='Rock'?alert('Meglub oldunuz'):computerSelection=='Qayci'?alert("Esitlik"):
playerSelection=='Paper',computerSelection=='Rock'?alert('Qalib oldunuz'):computerSelection=='Qayci'?alert('meglub oldunuz'):computerSelection=='Paper'?alert("Esitlik"):
playerSelection=='Rock',computerSelection=='Qayci'?alert('Qalib oldunuz'):computerSelection=='Paper'?alert('Qalib oldunuz'):computerSelection=='Rock'?alert("Esitlik"):
alert("Bir daha yoxlayin");
}*/
//playRound();

    if (playerSelection=='Qayci') {
        if(computerSelection=='Qayci') {
          alert('Bir daha sinayin');
            }
            else if (computerSelection=='Paper') {
                alert('Qalib oldunuz');
            }
            else { alert('Meglub oldunuz');}
    }
    else if(playerSelection=='Paper'){
        if(computerSelection=='Paper') {
            alert('Bir daha sinayin');
            }
              else if (computerSelection=='Rock') {
                  alert('Qalib oldunuz');
                }
              else { alert('Meglub oldunuz');}  
    }
    else if (playerSelection=='Rock') {
        if (computerSelection=='Rock') {
            alert('Bir daha sinayin');
        }
          else if (computerSelection=='Qayci') {
              alert('Qalib oldunuz');
        }
          else {alert('Meglub  oldunuz');}
    }
}

//(playerSelection == 'Rock')?computerSelection=='Paper' alert("komputer uddu"):alert("kullanici qalib oldu");
//(playerSelection == 'Qayci',computerSelection=='Rock')alert("komputer uddu"):alert("kullanici qalib oldu");
//(playerSelection == 'Paper',computerSelection=='Qayci')?alert("komputer uddu"):alert("kullanici qalib oldu");

const playerSelection=prompt();
const computerSelection=computerPlay();
playRound(playerSelection,computerSelection);
alert(`Oyuncu-${playerSelection}, Komputer-${computerSelection}`);
