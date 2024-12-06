"use strict";

let $test = document.querySelector(".name-intro").innerHTML,
  $html = "",
  $i;

function animatedText() {
  for ($i = 0; $i < $test.length; $i++) {
    $html += '<span style="animation: introText ' + $i + 's">' + $test[$i] + "</span>";
  }
  // h1 el
  document.querySelector(".name-intro").innerHTML = $html;
  document.querySelector(".name-intro").style.color = "black";
  // document.querySelector(".name-intro").style.fontSize = "4rem";

  //TODO Find a way to make the subtext animated as well
  // h3 el
  // document.querySelector(".overall-intro").innerHTML = $html;
  // document.querySelector(".overall-intro").style.color = "black";
  // document.querySelector(".overall-intro").style.fontSize = "1.5rem";
}

animatedText();

// // Select the container
// const container = document.querySelector(".social-media-container");

// // Add click event listener
// container.addEventListener("click", (event) => {
//   // Ensure clicks only work when on the container, not margins or links
//   if (event.target === container || event.target.closest(".social-media-icon")) {
//     event.preventDefault(); // Prevent default anchor behavior
//     container.classList.toggle("expanded"); // Toggle 'expanded' class
//   }
// });
