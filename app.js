// Whack-A-Mole

//target score and save in a variable
const score = document.querySelector('.score');
//initial score to 0
let userScore = 0;
//print score
score.textContent = userScore;

//traget timer and save in a variable
const timer = document.querySelector('.timer');
//initialize timer
let startTimer = 5;
//print time
timer.textContent = startTimer;

//target squares and save in a variable.
const squares = document.querySelectorAll('.square');
//for every square in the array...
squares.forEach(square => {
  //add event listener to each square
  square.addEventListener('mousedown', () => {
    //if the square contains the mole
    if (square.classList.contains('mole')) {
      //increase the score by 1
      userScore++;
      //print the new score
      score.textContent = userScore;
      //remove the mole from the square
      square.classList.remove('mole');
      if (userScore === 1) { // Start the timer only when the first mole is clicked
        moveMole();
        //variable for timer moving down by 1s
        ticToc = setInterval(countdown, 1000);
      }
    }
  });
});

//randomizer function for mole
function randomSquare() {
  //target mole and save in a variable
  const mole = document.querySelector('.mole');
  //if the mole is present on a square, remove it. 
  if (mole) {
    mole.classList.remove('mole');
  }
  //get a random index number in the squares array.
  const randomIndex = Math.floor(Math.random() * squares.length);
  //create a variable to save the random number generated
  const randomSquare = squares[randomIndex];
  //when a random index is generated, make the mole appear in the corresponding square. 
  randomSquare.classList.add('mole');
  return randomSquare;
}

//create function for how long it takes for the mole to between between squares
let moleMoving;
function moveMole() {
  moleMoving = setInterval(randomSquare, 1250);
}

//create countdown function
function countdown() {
  // if the time reaches 0, stop the game
  if (startTimer === 0) {
    stopGame();
  //otherwise
  } else {
    //decrease time by 1 second
    startTimer--;
    timer.textContent = startTimer;
  }
}

//create a functions to stop the game
function stopGame() {
  //clear the timer moving
  clearInterval(ticToc);
  //clear the mole moving
  clearInterval(moleMoving);
  alert(`Game Over. Your score is: ${userScore}`);
  //search the squares, and remove the mole from the square
  squares.forEach(square => {
    square.classList.remove('mole');
  });
  //set timer to 0
  timer.textContent = 0;
  //set score to 0
  score.textContent = 0;
}

//create function to restart the game
  function startGame() {
    //target start button and save in variable
    const startBtn = document.querySelector('.startBtn');
    //add event listener to variable
    startBtn.addEventListener('click', () => {
    //when the start button is clicked
    //set default score
    userScore = 0;
    //set default timer
    startTimer = 10;
    //print default score
    score.textContent = userScore;
    //print default timer
    timer.textContent = startTimer;
    //call all the following functions
    randomSquare();
    moveMole();
    countdown();
    clearInterval(ticToc);
    clearInterval(moleMoving);
    });
  };

  startGame();
  
