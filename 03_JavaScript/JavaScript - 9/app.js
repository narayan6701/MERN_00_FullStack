let small_images = document.getElementsByClassName("oldImg");

for (let i = 0; i < small_images.length; i++) {
  console.dir(small_images[i]);
  console.log(small_images[i].src);
}

for (let i = 0; i < small_images.length; i++) {
  small_images[i].src = "assets/spiderman_img.png";
  console.log(` value of image no. ${i} is changed.`);
}

console.dir(document.getElementsByTagName("p"));

document.querySelector("h1");

let links = document.querySelectorAll(".box a");

for (let i = 0; i < links.length; i++) {
  links[i].style.color = "green";
}

for (link of links) {
  link.style.color = "purple";
}

let heading = document.querySelector("h1");
heading.classList.add("green");
heading.classList.remove("green");
heading.classList.contains("green");
heading.classList.toggle("green");
