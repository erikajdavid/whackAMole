// Whack-A-Mole

//begining of game
//target timer set timer to 10, score to 0, and mole needs to be removed. 
const timeTracker = document.querySelector('.timer');
//initialize timer to 0 and print
let timer = 5;
timeTracker.textContent = timer;

//target score and save in a variable
const score = document.querySelector('.score');
//initiizalize score to 0 and print
let userScore = 0;
score.textContent = userScore;

//target mole and save in a variable
const mole = document.querySelector('.mole');
//mole needs to not be on the page when the page loads. 
mole.classList.remove('mole')

//press start button 
//target button and set in a variable 
const startBtn = document.querySelector('.startBtn');
//add event listener
//you want the game to start when this button is clicked.
startBtn.addEventListener('click', startGame);


//create a function to start the game
function startGame() {
  randomSquare();
  moleSpeed();
  countdown();
}

//create countdown function
function countdown() {
  if (timer === 0) {
    //clear interval to stop the timer
    clearInterval(ticToc)
    //alert game over
    alert(`Game Over`);
  } else {
    //start time to decrease by one increment
    timer --;
  }
  //print to screen
  timeTracker.textContent = timer;
}

//this is the speed 1s at which the mole is moving
const ticToc = setInterval(countdown, 1000);

//target all squares and save in a variable
const squares = document.querySelectorAll('.square')
//add forEach()
//search all the squares to find which one the mole is on
squares.forEach(square => {
  //add event listener
  square.addEventListener('click', randomSquare)
    if (square.id === 'mole') {
      //add a point to the score
      userScore++;
    }
      //remove the mole after its been clicked
    square.classList.remove('mole');
  }
);

//create function for mole moving
let move;
function moleSpeed() {
  move = setInterval(randomSquare, 1250);
}

//function to get a random square
function randomSquare() {
  const randomIndex = Math.floor(Math.random() * squares.length);
  let randomPosition = squares[randomIndex];
  if (mole) {
    randomPosition.classList.add('mole');
  }
    return randomSquare;
  }
randomSquare();




  //countdown timer starts
  //mole appears on random square
  //mole speed is set 

//user clicks on mole, adds 1 point to the score. 
//timer gets to 0. 
//game over message appears
//clear score
//clear timer
//clear mole 
//restart game







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
  
