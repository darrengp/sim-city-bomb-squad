/*----- constants -----*/
const intialTime = 30;
/*----- app's state (variables) -----*/

let blueWire = document.getElementById("blue");
let greenWire = document.getElementById("green");
let redWire = document.getElementById("red");
let whiteWire = document.getElementById("white");
let yellowWire = document.getElementById("yellow");
// console.log(blueWire);
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

/*----- cached element references -----*/

/*----- event listeners -----*/
//event listners on wires
// set interval
// clear interval

document.addEventListener("DOMContentLoaded", function () {
  console.log("loaded!");
});
