let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = "";
});

// let delBtns = document.querySelectorAll(".delete");

// for (butn of delBtns) {
//   butn.addEventListener("click", function () {
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
//   });
// }

//*****************Event Delegation*****************

ul.addEventListener("click", function (event) {
  console.dir(event.target);
  console.dir(event.target.nodeName);
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  } else {
    console.log("don't delete");
  }
});
