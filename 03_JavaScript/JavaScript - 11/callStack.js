function hello() {
  console.log("inside hello function");
  console.log("hello world!");
}

function demo() {
  console.log("calling hello function");
  hello();
}

console.log("calling demo function");
demo();
