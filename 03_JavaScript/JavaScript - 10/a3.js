let inp = document.querySelector("input");
let heading = document.querySelector("h2");

inp.addEventListener("keydown", function (evt) {
  console.log("key pressed");
  console.dir(evt);
  this.value = this.value.replace(/[^A-Za-z]/g, "");
});

inp.addEventListener("input", function () {
  heading.innerText = this.value;
});
