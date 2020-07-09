
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
       // alert('qayci');
       return 'Qayci';
    }
}
//computerPlay();

function playRound(playerSelection,computerSelection){
(playerSelection == 'Rock'||computerSelection=='Paper')?alert("komputer uddu"):(playerSelection == 'Paper'||computerSelection=='Rock')?alert("kullanici qalib oldu"):"Berebere";

(playerSelection == 'Qayci'||computerSelection=='Rock')?alert("komputer uddu"):(playerSelection == 'Rock'||computerSelection=='Qayci')?alert("kullanici qalib oldu"):"Berabere";

(playerSelection == 'Paper'||computerSelection=='Qayci')?alert("komputer uddu"):(playerSelection == 'Qayci'||computerSelection=='Paper')?alert("kullanici qalib oldu"):"berabere";
}
const playerSelection=prompt();
const computerSelection=computerPlay();
alert(playRound(playerSelection,computerSelection));
