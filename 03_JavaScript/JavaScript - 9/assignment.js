let inp = document.createElement("input");
let btn = document.createElement("button");
document.querySelector("body").append(inp);
document.querySelector("body").append(btn);

document.querySelector("button").innerText = "Click me";
document.querySelector("input").placeholder = "username";

document.querySelector("button").setAttribute("id","btn");

console.log(document.querySelector("#btn"));

document.querySelector("button").style.backgroundColor = "blue";
document.querySelector("button").style.color = "white";

let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";

document.querySelector("body").append(h1);
h1.setAttribute("class","text");

let para = document.createElement("p");
para.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(para);

