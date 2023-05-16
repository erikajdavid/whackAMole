//Whack-A-Mole

//target score and save in a variable.
const score = document.querySelector('.score');
//intialize the results to zero and save in a variable.
let userScore = 0;

//target timer and save in a variable.
const timer = document.querySelector('.timer');

//target the mole and save in a variable.
const mole = document.querySelector('.mole');

//target all buttons and save in a variable.
const squares = document.querySelectorAll('.square')
    //use a forEach() method
    squares.forEach(square => {
        //add event listeners
        square.addEventListener('mousedown', randomSquare)  //using mousedown because this executes the function as soon as the mouse is clicked. the click event only fires after a full click action occurs. 
    });   

let randomPosition;

//create a function to get a random square and pass as a callback function. 
function randomSquare() {
    const previousMole = document.querySelector('.mole');
    if (previousMole) {
      previousMole.classList.remove('mole');
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
    moleMoving = setInterval(randomSquare, 750); //mole moves every 0.75seconds
}

moveMole();

//you want to get a point every time you hit the mole
    //forEach()
    //addEventListener    mousedown() event
    //if the square ID === the random square
    //return score and add a point
    //display result on screen

//get the time to stop working when it gets to 0
//create a variable to default the default time (60 seconds)
//create a countdown function
//default time - 1 second
//display time left
//if the time === 0 clear the interval
//alert GAME OVER



