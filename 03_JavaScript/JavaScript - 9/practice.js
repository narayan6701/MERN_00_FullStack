let para = document.createElement("p");

document.querySelector("body").append(para);
para.innerText = "Hey I'm red!";

para.classList.add("red");

let heading3 = document.createElement("h3");
document.querySelector("body").append(heading3);
heading3.innerText="I'm a blue h3!";

heading3.classList.add("blue");

let box = document.createElement("div");
document.querySelector("body").append(box);

box.classList.add("box");

let h1 = document.createElement("h1");
document.querySelector(".box").append(h1);
h1.innerText = "I'm in a div";

let p = document.createElement("p");
document.querySelector(".box").append(p);
p.innerText = "ME TOO";