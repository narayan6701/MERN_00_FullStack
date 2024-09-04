let h1 = document.querySelector("h1");

function colorChange(clr, delay, nextColor) {
  setTimeout(() => {
    h1.style.color = clr;
    if (nextColor) {
      nextColor();
    }
  }, delay);
}

colorChange("red", 1000, () => {
  colorChange("orange", 1000, () => {
    colorChange("green", 1000, () => {
      colorChange("yellow", 1000, () => {
        colorChange("pink", 1000);
      });
    });
  });
});
