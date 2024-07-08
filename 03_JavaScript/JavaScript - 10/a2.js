let btn = document.createElement("button");
let bdy = document.querySelector("body");

bdy.appendChild(btn);

console.dir(btn);

btn.innerText = "Click me";

btn.addEventListener("click", function () {
  this.style.backgroundColor = "green";
});
