//Whack-A-Mole

//target score and save in a variable.
const score = document.querySelector('.score');
//intialize the results to zero and save in a variable.
let userScore = 0;
score.textContent = userScore;
//target timer and save in a variable.
const timer = document.querySelector('.timer');
let startTimer = 60;
timer.textContent = startTimer;

//target all buttons and save in a variable.
const squares = document.querySelectorAll('.square')
    //use a forEach() method
    squares.forEach(square => {
        square.addEventListener('mousedown', () => {
            if (square.classList.contains('mole')) {
                userScore++;
                score.textContent = userScore;
                square.classList.remove('mole');
            }
        });
    }); 

let randomPosition;

//create a function to get a random square and pass as a callback function. 
function randomSquare() {
    const mole = document.querySelector('.mole');    
    if (mole) {
      mole.classList.remove('mole');
    }
  
    // generate a random index and select a square
    const randomIndex = Math.floor(Math.random() * squares.length);
    const randomSquare = squares[randomIndex];
  
    // add the 'mole' class to the selected square
    randomSquare.classList.add('mole');
  
    // return the selected square
    return randomSquare;
  }
  

//create a function for the mole moving.

let moleMoving;

function moveMole() {
    moleMoving = setInterval(randomSquare, 1250); //mole moves every 0.75seconds
}

moveMole();

//create a countdown function
function countdown() {
    startTimer --;
    timer.textContent = startTimer;
}
countdown();

const ticToc = setInterval(countdown, 1000);

//get the time to stop working when it gets to 0
//create a variable to default the default time (60 seconds)
//create a countdown function
//default time - 1 second
//display time left
//if the time === 0 clear the interval
//alert GAME OVER



