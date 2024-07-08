let number = Number(prompt("Enter the number"));
let sum = 0;

while (number > 0) {
  sum = (number % 10) + sum;
  number = number / 10;
  number = Math.floor(number);
}

console.log(sum);
