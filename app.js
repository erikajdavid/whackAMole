// Whack-A-Mole

const score = document.querySelector('.score');
let userScore = 0;
score.textContent = userScore;

const timer = document.querySelector('.timer');
let startTimer = 10;
timer.textContent = startTimer;

const squares = document.querySelectorAll('.square');
squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.classList.contains('mole')) {
      userScore++;
      score.textContent = userScore;
      square.classList.remove('mole');
      if (userScore === 1) { // Start the timer only when the first mole is clicked
        moveMole();
        ticToc = setInterval(countdown, 1000);
      }
    }
  });
});

function randomSquare() {
  const mole = document.querySelector('.mole');
  if (mole) {
    mole.classList.remove('mole');
  }
  const randomIndex = Math.floor(Math.random() * squares.length);
  const randomSquare = squares[randomIndex];
  randomSquare.classList.add('mole');
  return randomSquare;
}

let moleMoving;
function moveMole() {
  moleMoving = setInterval(randomSquare, 1250);
}

function countdown() {
  if (startTimer === 0) {
    stopGame();
  } else {
    startTimer--;
    timer.textContent = startTimer;
  }
}

function stopGame() {
  clearInterval(ticToc);
  clearInterval(moleMoving);
  alert(`Game Over. Your score is: ${userScore}`);
  squares.forEach(square => {
    square.classList.remove('mole');
  });
  timer.textContent = 0;
  score.textContent = 0;
}

//create function to restart the game
function startGame() {
    const startBtn = document.querySelector('.startBtn');
    startBtn.addEventListener('click', () => {
    })
};
  
startGame();
