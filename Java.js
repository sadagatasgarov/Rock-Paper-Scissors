
'use strict'
function computerPlay(x){
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
       // alert('Scrissors');
       return 'Scrissors';
    }
}
//computerPlay();

function playRound(playerSelection,computerSelection){
(playerSelection == 'Rock'||computerSelection=='Paper')?alert("komputer uddu"):(playerSelection == 'Paper'||computerSelection=='Rock')?alert("kullanici qalib oldu"):"Berebere";

(playerSelection == 'Scrissors'||computerSelection=='Rock')?alert("komputer uddu"):(playerSelection == 'Rock'||computerSelection=='Scrissors')?alert("kullanici qalib oldu"):"Berabere";

(playerSelection == 'Paper'||computerSelection=='Scrissors')?alert("komputer uddu"):(playerSelection == 'Scrissors'||computerSelection=='Paper')?alert("kullanici qalib oldu"):"berabere";
}
const playerSelection=prompt('Rock, Paper or Scrissors?');
const computerSelection=computerPlay();
alert(playRound(playerSelection,computerSelection));
