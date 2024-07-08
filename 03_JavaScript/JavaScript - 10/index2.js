let para = document.querySelector("p");
let pinkBox = document.querySelector(".box");

para.addEventListener("click", function () {
  console.log("paragraph was clicked");
});
pinkBox.addEventListener("mouseenter", function () {
  console.log("mouse entered the pink box");
});
pinkBox.addEventListener("mouseleave", function () {
  console.log("mouse left the box");
});
