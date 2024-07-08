let btn = document.querySelector("button");
let heading = document.querySelector("h1");
let container = document.querySelector("div");

function generateRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  //   let color = "rgb(" + red + "," + green + "," + blue + ")";
  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}

btn.addEventListener("click", function () {
  let randomcolor = generateRandomColor();
  heading.innerText = randomcolor;
  container.style.backgroundColor = randomcolor;

  console.log("random color updated");
});
