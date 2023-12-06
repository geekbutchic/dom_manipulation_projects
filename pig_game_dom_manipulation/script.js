"use strict";

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current-1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// Current Score
let currentScore = 0;

// Rolling Dice Functionality
btnRoll.addEventListener("click", function() {
  // 1. Generate Random Dice Roll
  const dice = Math.trunc(Math.random() * 6) + 1; // 0 - 5
  console.log(dice);
  // 2. Display The Dice
  diceEl.classList.remove("hidden");
  // 3. Check For Rolled 1: if true, switch to next player
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    // Add dice to current score
    currentScore = currentScore + dice;
    current0El.textContent = currentScore
  } else {
    // Switch to next player
  }
});
