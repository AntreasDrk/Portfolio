"use strict";
//Starting conditions
const displayScreen = document.querySelector("#display");
displayScreen.textContent = 0;

const percentageBtn = document.querySelector(".percent-button");
const ceBtn = document.querySelector(".ce-button");
const delBtn = document.querySelector(".del-button");

const buttons = document.querySelectorAll(
  ".btn-number, .operator, .equals, .clear"
);

let currentInput = "";
let operator = "";

// Displays the numbers/operators on the screen
const updateDisplay = (value) => {
  displayScreen.textContent = value;
};

// On click of a number, operator, equal, clear
// display it on the screen and calculate it with eval()
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.number) {
      currentInput += button.dataset.number;
    } else if (button.dataset.operator) {
      currentInput += ` ${button.dataset.operator} `;
    } else if (button.dataset.equals) {
      try {
        currentInput = eval(currentInput).toString();
      } catch (error) {
        currentInput = "Error";
      }
    } else if (button.dataset.clear) {
      currentInput = "";
      updateDisplay(0);
      return;
    }
    updateDisplay(currentInput);
  });
});

// Delete button
delBtn.addEventListener("click", () => {
  if (currentInput === "") {
    updateDisplay(0);
    return;
  }

  // Remove the last character and trim any leading or trailing spaces
  currentInput = currentInput.slice(0, -1).trim();

  // If currentInput is now empty, display 0
  if (currentInput === "") {
    updateDisplay(0);
  } else {
    updateDisplay(currentInput);
  }
});
