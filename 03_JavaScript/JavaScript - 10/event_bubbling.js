let box = document.querySelector("div");
let unordered = document.querySelector("ul");
let litems = document.querySelectorAll("li");

box.addEventListener("click", function () {
  console.log("pink box was clicked");
});

unordered.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("blue box was clicked");
});

for (li of litems) {
  li.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("green box was clicked");
  });
}
