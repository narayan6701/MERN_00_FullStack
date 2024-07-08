let fom = document.querySelector("form");
fom.addEventListener("submit", function (evt) {
  evt.preventDefault();
  alert("form submitted");
  console.log("form submitted");
});
