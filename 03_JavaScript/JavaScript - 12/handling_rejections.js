let ele = document.querySelector("h1");
let fixed = 8;

async function colorChange(clr) {
  return new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 5) + 1;
    if (num < 3) {
      reject("promise was rejected");
    } else {
      setTimeout(() => {
        ele.style.color = clr;
        console.log(`color changed to ${clr}`);
        resolve();
      }, 1000);
    }
  });
}

// colorChange("blue", () => {
//   colorChange("red", () => {
//     colorChange("purple");
//   });
// });

async function demo() {
  try {
    await colorChange("green");
    await colorChange("red");
    await colorChange("orange");
    await colorChange("blue");
  } catch (err) {
    console.log("error caught", err);
  }
}

demo();
