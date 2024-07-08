let fom = document.querySelector("form");

fom.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("form submitted");

  let usr = document.querySelector("#user");
  let pwd = document.querySelector("#password");

  console.log(usr.value);
  console.log(pwd.value);

  alert(`Hi your username is ${usr.value} and your password is ${pwd.value}`);
});
