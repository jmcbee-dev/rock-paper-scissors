var playerScore = 0;
var computerScore = 0;

function getComputerChoice(){
   return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)]
}

function playRound(playerChoice, computerChoice){
   let result = '';
   let pc = playerChoice.toLocaleLowerCase();
   let cc = computerChoice.toLocaleLowerCase();

   if(pc == cc)
      result = `Tie! You both picked ${cc}`;
   else {
      if( (pc == 'rock' && cc == 'paper') 
         || (pc == 'paper' && cc == 'scissors') 
         || (pc == 'scissors' && cc == 'rock') )
         result = `You lose! Computer picked ${cc}`;
      else {
         result = `You win! Computer picked ${cc}`;
      }
   }
   return result;
}

function updateScore(){
   const resultDiv = document.getElementsByClassName('scorecard')[0];
   let announcement = '';
   let gameOver = false;

   if(playerScore == 5){
      announcement = 'Game over, you\'ve won! 🥳';
      gameOver = true;
   } else 
   if(computerScore == 5){
      announcement = 'Game over, you\'ve lost! 😣';
      gameOver = true;
   } else {
      announcement = `Current score: Player ${playerScore} | Computer ${computerScore}`;
   }

   resultDiv.innerHTML = announcement;
   if(gameOver){
      let buttons = [...document.getElementsByTagName('button')];
      buttons.forEach( (button) => {
         button.removeEventListener('click', button.playing, false);
      })
   }   
}

function addButtonFunctions(){
   const resultDiv = document.getElementsByClassName('results')[0];
   let buttons = [...document.getElementsByTagName('button')];

   buttons.forEach( (button) => { 
      button.addEventListener('click', button.playing=function(){
         let result = playRound(button.innerHTML, getComputerChoice());
         resultDiv.innerHTML = result;
         if(result.includes('win'))
            playerScore++;
         if(result.includes('lose'))
            computerScore++;
         updateScore();    
      }, false);
   });
}

addButtonFunctions();