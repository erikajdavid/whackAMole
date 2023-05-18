//target timer set timer to 3, score to 0, and mole needs to be removed from the page.

//target timer and save in a variable
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
mole.remove(); //this removes the mole from page when the page is first loaded. 

//target all squares and save in a variable
const squares = document.querySelectorAll('.square');
//for each square
squares.forEach(square => {
  //add an event listener
  square.addEventListener('click', () => {
    if (square.classList.contains('mole')) {
      //add 1 point to score
      userScore++;
      //print new score
      score.textContent = userScore;
      //remove mole when clicked
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
    square.classList.remove('mole');
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
//create functions for mole moving
function moleSpeed() {
  moleSpeedInterval = setInterval(randomSquare, 800);
  randomSquare();
}

//create countdown function
function countdown() {
  if(timer === 0) {
    alert(`Game Over. You scored ${userScore} points.`);
    resetGame();
  } else {
    //decrease timer by 1 increment (1 second)
    timer--;
    //print timer
    timeTracker.textContent = timer;
  }
}

//set speed for timer
let ticTocInterval = null;
//create function for timer speed
function ticToc() {
  ticTocInterval = setInterval(countdown, 1000);
}

//set function to reset game
function resetGame() {
    //clear the score. without this, points in a new game are added to the previous score.
    score.textContent = 0;
    userScore = 0;
    //this is only to display the timer at 5 seconds. without it, the timer just displays 2, 1, 0. 
    timeTracker.textContent = 10;
    //this is to set the timer to run for 5 seconds. the timer will not run without it. 
    timer = 5;
    //clear the timer speed
    clearInterval(ticTocInterval);
    //clear the mole moving speed
    clearInterval(moleSpeedInterval);
    //search the squares for the mole and remove it from the page
    squares.forEach(square => {
      square.classList.remove('mole');
    });
};

//target start button and save in a variable
const start = document.querySelector('.startBtn');
//add event listener
start.addEventListener('mousedown', startGame);

//create function to start the game
function startGame() {
  resetGame();
  moleSpeed();
  ticToc();
}













