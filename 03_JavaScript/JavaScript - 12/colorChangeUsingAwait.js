let ele = document.querySelector("h1");

async function colorChange(clr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ele.style.color = clr;
      resolve();
    }, 1000);
  });
}

// colorChange("blue", () => {
//   colorChange("red", () => {
//     colorChange("purple");
//   });
// });

async function demo() {
  await colorChange("green");
  await colorChange("red");
  await colorChange("orange");
  await colorChange("blue");
}

demo();
