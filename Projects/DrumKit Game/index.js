"use strict";

// grab all the elements with the .drum class
const BUTTONS = document.querySelectorAll(".drum");

// DETECTING CLICKS WITH MOUSE
// loops through the buttons and adds a listener every time a button is clicked
for (let i = 0; i < BUTTONS.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // The this.keyword will point at the element that got clicked in a loop
    // this.style.color = "white";
    let buttonClicked = this.innerHTML;
    playSound(buttonClicked);
    buttonAnimation(buttonClicked);
  });
}

// DETECTING KEYBOARD PRESSES
document.addEventListener("keydown", function (event) {
  // event.key acceses the object.key = 'w' for example which is why the switch statement bellow works
  playSound(event.key);
  buttonAnimation(event.key);
});

function playSound(key) {
  // depending on which keyboard button got clicked the coresponding sound will play
  // switch (key) {
  //   case "w":
  //     let tom_1 = new Audio("sounds/tom-1.mp3");
  //     tom_1.play();
  //     break;

  //   case "a":
  //     let tom_2 = new Audio("sounds/tom-2.mp3");
  //     tom_2.play();
  //     break;

  //   case "s":
  //     let tom_3 = new Audio("sounds/tom-3.mp3");
  //     tom_3.play();
  //     break;

  //   case "d":
  //     let tom_4 = new Audio("sounds/tom-4.mp3");
  //     tom_4.play();
  //     break;

  //   case "j":
  //     let snare = new Audio("sounds/snare.mp3");
  //     snare.play();
  //     break;

  //   case "k":
  //     let kick_bass = new Audio("sounds/kick-bass.mp3");
  //     kick_bass.play();
  //     break;

  //   case "l":
  //     let crash = new Audio("sounds/crash.mp3");
  //     crash.play();
  //     break;

  //   default:
  //     alert("Wrong button!");
  // }

  // TODO my attempt below
  // try {
  //   if (key === "w" || key === "W") {
  //     let tom_1 = new Audio("sounds/tom-1.mp3");
  //     tom_1.play();
  //   } else if (key === "a" || key === "A") {
  //     let tom_2 = new Audio("sounds/tom-2.mp3");
  //     tom_2.play();
  //   } else if (key === "s" || key === "S") {
  //     let tom_3 = new Audio("sounds/tom-3.mp3");
  //     tom_3.play();
  //   } else if (key === "d" || key === "D") {
  //     let tom_4 = new Audio("sounds/tom-4.mp3");
  //     tom_4.play();
  //   } else if (key === "j" || key === "J") {
  //     let snare = new Audio("sounds/snare.mp3");
  //     snare.play();
  //   } else if (key === "k" || key === "K") {
  //     let kick_bass = new Audio("sounds/kick-bass.mp3");
  //     kick_bass.play();
  //   } else if (key === "l" || key === "L") {
  //     let crash = new Audio("sounds/crash.mp3");
  //     crash.play();
  //   } else {
  //     alert("Wrong input");
  //   }
  // } catch (error) {
  //   console.error("Something went horribly wrong", error);
  // }

  // TODO an alternative after some search
  const sounds = {
    w: "tom-1.mp3",
    a: "tom-2.mp3",
    s: "tom-3.mp3",
    d: "tom-4.mp3",
    j: "snare.mp3",
    k: "kick-bass.mp3",
    l: "crash.mp3",
  };

  // this will handle lowerCase and upperCase
  const soundFile = sounds[key.toLowerCase()];

  if (soundFile) {
    // this line grabs the sounds from the file path based on the button pressed that is MAPPED on the object sounds
    const audio = new Audio(`sounds/${soundFile}`);
    audio.play();
  } else {
    alert("Wrong input");
  }
}

// adding animation
function buttonAnimation(currentKey) {
  // this will fetch the currentKey like this '.w' or '.k'
  let activeButton = document.querySelector("." + currentKey);

  if (activeButton) {
    activeButton.classList.add("pressed");

    // Remove the "pressed" class after a short delay
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100); // Adjust the delay as needed (in milliseconds)
  }
}
