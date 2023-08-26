let score = 0;
let molesLeft = 30;
let popupLength = 3000;
let hideTimeout;
let clickable = false;

function popUpRandomMole() {
  if (molesLeft <= 0) {
    document.querySelector('.sb__game-over').classList.remove('sb__game-over--hidden');
    return;
  }

  const moleHeads = document.querySelectorAll('.wgs__mole-head');

  if (moleHeads.length === 0) {
    return;
  }
  const moleIndex = Math.floor(Math.random() * moleHeads.length);
  const moleHead = moleHeads[moleIndex];

  clickable = true;

  // UNCOMMENT THIS LINE OF CODE WHEN DIRECTED
   moleHead.classList.remove('wgs__mole-head--hidden', 'wgs__mole-head--whacked');

  molesLeft -= 1;
  document.querySelector('.sb__moles').innerHTML = molesLeft;

  hideTimeout = setTimeout(() => hideMole(moleHead), popupLength);
}

function hideMole(mole) {
  clickable = false;
  mole.classList.add('wgs__mole-head--hidden');

  setTimeout(popUpRandomMole, 500);
}

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(popUpRandomMole, 0);

  const moleHeads = document.querySelectorAll('.wgs__mole-head');
  for (let moleHead of moleHeads) {
    moleHead.addEventListener('click', event => {
      if (!clickable) return;

      score += 1;
      document.querySelector('.sb__score').innerHTML = score;
      popupLength -= popupLength / 10;

      clearTimeout(hideTimeout);
      hideMole(event.target);

      // UNCOMMENT THIS LINE OF CODE WHEN DIRECTED
       event.target.classList.add('wgs__mole-head--hidden');

      // UNCOMMENT THIS LINE OF CODE WHEN DIRECTED FOR THE BONUS
       event.target.classList.add('wgs__mole-head--whacked');
    });
  }
});

// RESET GAME BUTTON

// Get references to your game elements or any data that needs to be reset
const scoreElement = document.querySelector('.sb__score');
const moleElements = document.querySelectorAll('.wgs__mole-head');

// Function to reset the game
function resetGame() {
    // Reset score
    scoreElement.textContent = '0';

    // Hide all mole images
    moleElements.forEach(mole => mole.classList.add('wgs__mole-head--hidden'));

    // Additional reset logic if needed

    // Hide game over message
    const gameOverElement = document.querySelector('.sb__game-over');
    gameOverElement.classList.add('sb__game-over--hidden');
}

// Add event listener to the reset button
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetGame);
// Create a function called checkForWin that will check if one of the players has won by checking if their counter equals 20.