let para = document.querySelector("p");
let inp = document.querySelector("#txt");

inp.addEventListener("input", function () {
  console.log(this.value);
  para.innerText = this.value;
});
