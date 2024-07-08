let btn = document.querySelector("button");
let inp = document.querySelector("input");

btn.addEventListener("click", function (event) {
  console.log("button was clicked");
  console.dir(event);
});

btn.addEventListener("dblclick", function (evt) {
  console.log("button was double clicked");
  console.dir(evt);
});

inp.addEventListener("keydown", function (evt) {
  console.log("key was pressed");
  console.log(evt.code);

  if (evt.code == "ArrowUp") {
    console.log("Forward");
  } else if (evt.code == "ArrowDown") {
    console.log("Backward");
  } else if (evt.code == "ArrowLeft") {
    console.log("Left");
  } else if (evt.code == "ArrowRight") {
    console.log("Right");
  }
});

inp.addEventListener("keyup", function () {
  console.log("key up");
});
