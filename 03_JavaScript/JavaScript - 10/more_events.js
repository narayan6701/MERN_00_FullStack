let user = document.querySelector("#user");
let fom = document.querySelector("form");

fom.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

user.addEventListener("change", function () {
  console.log("change event");
  console.log(this.value);
});

user.addEventListener("input", function () {
  console.log("input event");
  console.log(this.value);
});
