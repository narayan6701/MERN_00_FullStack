let arr = [1, 2, 3, 4, 5];

let print = function (el) {
  console.log(el);
};

arr.forEach(print);

console.log("By defining a function");

arr.forEach(function (el) {
  console.log(el);
});

console.log("By defining a arrow function");

arr.forEach((el) => {
  console.log(el);
});
