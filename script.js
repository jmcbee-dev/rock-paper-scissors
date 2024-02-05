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

function playGame(){
   let playerScore = 0;
   for(let i = 0; i < 5; i++){
      let playerChoice = prompt("Pick between rock, paper, or scissors.");
      let result = playRound(playerChoice, getComputerChoice());
      console.log(result);
      if(result.includes('win'))
         playerScore++;
   }
   console.log(`You won ${playerScore} out of 5 games.`);
}

playGame();