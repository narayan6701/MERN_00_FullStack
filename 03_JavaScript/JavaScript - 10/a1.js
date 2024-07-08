let inp = document.querySelector("input");
console.dir(window);

inp.addEventListener("mouseout", function () {
  console.log("you left");
});

inp.addEventListener("keypress", function () {
  console.log("key pressed");
});

window.addEventListener("scroll", function () {
  console.log("scrolled");
});

window.addEventListener("load", function () {
  console.log("loaded");
});
