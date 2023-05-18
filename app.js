// Whack-A-Mole

//begining of game
//target timer set timer to 10, score to 0, and mole needs to be removed. 
const timeTracker = document.querySelector('.timer');
//initialize timer to 0 and print
let timer = 3;
timeTracker.textContent = timer;

//target score and save in a variable
const score = document.querySelector('.score');
//initiizalize score to 0 and print
let userScore = 0;
score.textContent = userScore;

//target all squares and save in a variable
const squares = document.querySelectorAll('.square');
squares.forEach(square => {
  square.addEventListener('click', () => {
    if (square.classList.contains('mole')) {
      userScore++;
      score.textContent = userScore;
      square.classList.remove('mole');
    }
  });
});

let hitPosition;

//create a function to get a random square for the mole
function randomSquare() {
  //for each square,
  squares.forEach(square => {
    //search for the mole and remove it before the game starts
    square.classList.remove('mole')
  })
  //get a random index for the random square
  let randomIndex = Math.floor(Math.random() * squares.length);
  let randomMolePosition = squares[randomIndex];
  //add the mole to the random square
  randomMolePosition.classList.add('mole');

  randomMolePosition.id = hitPosition
}

//set speed of mole
let moleSpeedInterval = null;
function moleSpeed() {
  moleSpeedInterval = setInterval(randomSquare, 1000);
  randomSquare();
}

moleSpeed();

//create countdown function
function countdown() {
  if(timer === 0) {
    alert(`Game Over. You scored ${userScore} points.`);
    resetGame();
  } else {
    //decrease timer by 1 increment
    timer--;
    //print 
    timeTracker.textContent = timer;
  }
}

//set speed for timer
let ticTocInterval = null;
function ticToc() {
  ticTocInterval = setInterval(countdown, 1000);
}

ticToc();

//set function to reset game
function resetGame() {
    score.textContent = 0;
    timeTracker.textContent = 3;
    clearInterval(ticTocInterval);
    clearInterval(moleSpeedInterval);
    hitPosition = null;
    squares.forEach(square => {
      square.classList.remove('mole');
    });
};

//set function to start new game

//target start button and save in a variable

const start = document.querySelector('.startBtn');
start.addEventListener('click', resetAndStartGame);

function resetAndStartGame() {
  timer = 3;
  userScore = null;
  resetGame();
  moleSpeed();
  ticToc();
}














//---------------------------------------------------------------------
/*
//FIRST ATTEMPT A CODE//
const score = document.querySelector('.score');
let userScore = 0;
score.textContent = userScore;

const timer = document.querySelector('.timer');
let startTimer = 5;
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
    userScore = 0;
    startTimer = 5;
    score.textContent = userScore;
    timer.textContent = startTimer;
    randomSquare();
    moveMole();
    countdown();
    clearInterval(ticToc);
    clearInterval(moleMoving);
    });
  };

  startGame();
*/
  
