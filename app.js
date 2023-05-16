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
    const randomIndex = Math.floor(Math.random() * squares.length);
    return squares[randomIndex];
}
    //forEach() 
        //remove the mole if it exists on any square. 
    
    //you need to pass a random number (0 to 8) into the squares array.
    //get a random number and save in a variable.
        //Math.random generated random number multiple by the length of the array.
        //Math.floor rounds down the generated random number.
    //assign the mole class to the random number. 


//create a function for the mole moving.
    //get the timerID and set it to null.
    //use setInterval to set how quickly the mole will jump from square to square. 

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



