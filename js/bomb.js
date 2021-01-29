/*----- constants -----*/
const intialTime = 30;
/*----- app's state (variables) -----*/

// variable to store interger
let timeRemaining = 0;
// to store timers setInterval so we can clear it
let countDown = null;

// boolean for game over
let gameOver = false;
// keep track of clicked wires
let wireState = {
  blue: false,
  green: false,
  red: false,
  white: false,
  yellow: false,
};

///////////////
let blueWire = document.getElementById("blue");
let greenWire = document.getElementById("green");
let redWire = document.getElementById("red");
let whiteWire = document.getElementById("white");
let yellowWire = document.getElementById("yellow");
console.log(blueWire);

// Array of wires need to be clicked

let wiresToCut = [];

/*----- cached element references -----*/

// event listner on wires /////////////
let wireboxEl = null;
// each wire
let wires = [];

// background img
let backgroundEl = null;

let timerEl = null;

/*----- event listeners -----*/
//event listners on wires
// set interval
// clear interval
let resetButtonEL = null;

// set interval timer function

function updateClock() {
  console.log("coutdown the timer!");
}

// app intializers sets up game state

function intializeGame() {
  console.log("let the game begin");
}

/// handles reset button game
function resetGame() {
  console.log("reset game");
}

// handles rese button click
function cutWire(event) {
  console.log("cut a wire", event);
}

// handles game over state
function endGame(isGameWon) {
  console.log("end game");
}

////////////// eventlistener ////////////
document.addEventListener("DOMContentLoaded", function () {
  console.log("loaded!");
  // main element to manipulate the background
  backgroundEl = document.querySelector("main");
  // Timer
  timerEl = document.querySelector("#timer");

  // reset button
  resetButtonEL = document.querySelector("#resetButton");
  //   console.log(resetButtonEL);
  resetButtonEL.addEventListener("click", resetGame);
  //wirebox
  wireboxEl = document.querySelector("#wires");
  wireboxEl.addEventListener("click", cutWire);
  // each wire elements in an array
  wires = wireboxEl.children;
  // init the game
  intializeGame();
});
