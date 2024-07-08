let btns = document.querySelectorAll("input");
let btn = document.querySelector("button");
console.dir(btn);

btn.onclick = function () {
  console.log("by JS");
};

function sayHello() {
  console.log("Hello!");
}

function entry() {
  console.log("you entered a button");
}

function eventlistener() {
  alert("Hii");
}

function eventlistener2() {
  alert("Hii2");
}

for (but of btns) {
  //   but.onclick = sayHello;
  //   but.onmouseenter = entry;

  but.addEventListener(
    "dblclick",
    (dbl = () => {
      console.log("double clicked");
    })
  );
  but.addEventListener("click", eventlistener);
  but.addEventListener("click", eventlistener2);
}
