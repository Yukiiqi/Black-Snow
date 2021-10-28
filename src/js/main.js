// Get reference what you need
var button = document.querySelector("button");
var ul = document.querySelector("ul");

// Define what should happen
function toggle() {
  ul.classList.toggle("active");
}

// Wire up the event
button.addEventListener("click", toggle);

var accordions = document.querySelectorAll(".accordion");
var i;

for (i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
  });
}

//scroll to top button
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
