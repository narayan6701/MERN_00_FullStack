// Refactoring the callbackHell.js using promises

let h1 = document.querySelector("h1");

function colorChange(clr, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      h1.style.color = clr;
      if (num >= 5) {
        resolve("Color changed");
      } else {
        reject("Color unchanged");
      }
    }, delay);
  });
}

colorChange("red", 1000)
  .then((result) => {
    console.log(`Color Changed first time`);
    console.log("success: ", result);
    return colorChange("blue", 1000);
  })
  .then((result) => {
    console.log("Color Changed second time");
    console.log("success: ", result);
    return colorChange("pink", 1000);
  })
  .then((result) => {
    console.log("Color changed third time");
    console.log("success: ", result);
  })
  .catch((error) => {
    console.log("failed to change the color");
    console.log("failure: ", error);
  });
