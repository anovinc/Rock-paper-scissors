var userScore=0;
var compScore=0;
const userScore_span=document.getElementById('user-score');
const compScore_span=document.getElementById('comp-score');
const scoreBoard_div=document.querySelector('.scoreBoard');
const result_div=document.querySelector('.result');
const rock=document.getElementById('rock');
const scissors=document.getElementById('scissors');
const paper=document.getElementById('paper');

function main(){
  
    rock.addEventListener('click', function() {
        game('r');
    })

;   
    ;
    scissors.addEventListener('click', function() {
        
        game('s')
    })
  
    paper.addEventListener('click', function() {
        game('p');
    })
}
function getCompChoice()
{
    var choices=['r', 'p', 's'];
    var randomNum=Math.floor(Math.random()*3);
    return choices[randomNum];
}
function wordConvert(choice){
    if(choice=="r") return "Rock";
    if(choice=="p") return "Paper";
    if(choice=="s") return "Scissors";
}
function win(userChoice,computer){
    userScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    result_div.innerHTML= wordConvert(userChoice) +" beats "+ wordConvert(computer)+". You win! 💪";

   
}

function lose(userChoice,computer){
    compScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    result_div.innerHTML= wordConvert(computer) +" beats "+wordConvert(userChoice)+". You lose!..&#128557";
    
}

function draw(){
    result_div.innerHTML="It is a draw!"
}
function game(userChoice){
    var compChoice=getCompChoice();
    switch(userChoice+compChoice){
        case "rs":
        case "sp":
        case "pr":
            win(userChoice,compChoice);
            break;
       case "sr":
       case "rp": 
       case "ps" :
           lose(userChoice,compChoice);
           break;
       default:
           draw();
           break;         
}

}

main();