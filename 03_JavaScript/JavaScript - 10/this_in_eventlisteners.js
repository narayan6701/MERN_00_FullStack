let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

function dual() {
  console.dir(this);
  this.style.backgroundColor = "blue";
}

function itext() {
  console.log(this.innerText);
}

h1.addEventListener("click", dual);
h1.addEventListener("click", itext);

h3.addEventListener("click", dual);
h3.addEventListener("click", itext);

p.addEventListener("click", dual);
p.addEventListener("click", itext);

btn.addEventListener("click", dual);
btn.addEventListener("click", itext);
