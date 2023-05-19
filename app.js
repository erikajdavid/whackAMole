//target timer set timer to 15, score to 0, and mole needs to be removed from the page.

//target timer and save in a variable
const timeTracker = document.querySelector('.timer');
//initialize timer to 0 and print
let timer = 15;
timeTracker.textContent = timer;

//target score and save in a variable
const score = document.querySelector('.score');
//initiizalize score to 0 and print
let userScore = 0;
score.textContent = userScore;

//target mole and save in a variable
const mole = document.querySelector('.mole');
mole.remove(); //this removes the mole from page when the page is first loaded. 

//target bomb and save in a varaible
const bomb = document.querySelector('.bomb');
bomb.remove(); //this removes the mole from the page when the page is first loaded. 

//target all squares and save in a variable
const squares = document.querySelectorAll('.square');
//for each square
squares.forEach(square => {
  //add an event listener
  square.addEventListener('mousedown', () => {
    if (square.classList.contains('bomb')) {
      //create smaller square elements
      const numParticles = 25;
      const particleSize = 8; //size of particles in px
      const particleColor = "red"; //color of each particle
      const particles = Array.from({ length: numParticles }, () => {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = particleSize + 'px';
        particle.style.height = particleSize + 'px';
        particle.style.backgroundColor = particleColor;
        square.appendChild(particle);
        return particle;
      });

      // Animate the particles to disperse
      particles.forEach(particle => {
        const randomAngle = Math.random() * 2 * Math.PI;
        const randomDistance = Math.random() * 200 + 100; // Random distance between 50 and 150 pixels
        const translationX = Math.cos(randomAngle) * randomDistance;
        const translationY = Math.sin(randomAngle) * randomDistance;

        particle.animate(
          [
            { transform: 'translate(0, 0)' },
            { transform: `translate(${translationX}px, ${translationY}px)` }
          ],
          {
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease-out' // Animation easing function
          }
        ).onfinish = () => {
          particle.remove(); // Remove the particle element after the animation finishes
        };
      });
   
      //remove 3 points from score
      userScore = userScore - 3;
      //print new score
      score.textContent = userScore;
      //remove bomb when clicked
      square.classList.remove('bomb');
      //this also removes the mole that shows up immediately after you click on the bomb. 
      square.classList.remove('mole');
    } else if (square.classList.contains('mole')) {
      //to flash the square for 2 seconds
      square.style.backgroundColor = "lightgreen";
      setTimeout(() => {
        square.style.backgroundColor = ''; // Revert back to original color
      }, 200);
      //add 1 point to score
      userScore++;
      //print new score
      score.textContent = userScore;
      //remove mole when clicked
      square.classList.remove('mole');
    } 
  });
});

//create a function to get a random square for the mole
function randomSquare() {
  //for each square,
  squares.forEach(square => {
    //search for the mole and bomb and remove them before the game starts
    square.classList.remove('mole', 'bomb');
  })
  //get a random index for the random square
  let randomIndex = Math.floor(Math.random() * squares.length);
  let randomMolePosition = squares[randomIndex];
  //add the mole to the random square
  randomMolePosition.classList.add('mole');

  //bomb has a 20% chance of appearing in a square
  if (Math.random() < 0.2) {
    randomMolePosition.classList.add('bomb');
  }
}

let moleSpeedInterval = null;
//create functions for mole moving
function moleSpeed() {
  //set speed of mole to be 0.8 seconds
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

let ticTocInterval = null;
//create function for timer speed
function ticToc() {
  //set speed of timer to 1 second
  ticTocInterval = setInterval(countdown, 1000);
}

//set function to reset game
function resetGame() {
    //clear the score. without this, points in a new game are added to the previous score.
    score.textContent = 0;
    userScore = 0;
    //this is only to display the timer at 15 seconds. without it, the timer just displays 2, 1, 0. 
    timeTracker.textContent = 15;
    //this is to set the timer to run for 15 seconds. the timer will not run without it. 
    timer = 15;
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
start.addEventListener('click', startGame);

//create function to start the game
function startGame() {
  resetGame();
  moleSpeed();
  ticToc();
}













