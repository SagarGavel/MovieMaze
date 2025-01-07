document.addEventListener('DOMContentLoaded', () => {
  const choices = document.querySelectorAll('.choice');
  const playerScoreDisplay = document.getElementById('player-score');
  const computerScoreDisplay = document.getElementById('computer-score');
  const resultMessage = document.getElementById('result-message');

  let playerScore = 0;
  let computerScore = 0;

  function computerPlay() {
      const options = ['rock', 'paper', 'scissors'];
      return options[Math.floor(Math.random() * options.length)];
  }

  function playRound(playerSelection, computerSelection) {
      if (playerSelection === computerSelection) {
          return 'Tie!';
      }

      const winConditions = {
          rock: 'scissors',
          paper: 'rock',
          scissors: 'paper'
      };

      if (winConditions[playerSelection] === computerSelection) {
          playerScore++;
          playerScoreDisplay.textContent = playerScore;
          return `You win! ${playerSelection} beats ${computerSelection}`;
      } else {
          computerScore++;
          computerScoreDisplay.textContent = computerScore;
          return `Computer wins! ${computerSelection} beats ${playerSelection}`;
      }
  }

  choices.forEach(choice => {
      choice.addEventListener('click', () => {
          const playerSelection = choice.getAttribute('data-choice');
          const computerSelection = computerPlay();
          const result = playRound(playerSelection, computerSelection);
          resultMessage.textContent = result;
      });
  });
});