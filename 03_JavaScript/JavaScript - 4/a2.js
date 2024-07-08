let number=Number(prompt("Enter you Number"));

let count = 0;

while (number>0)
{
    number=Math.floor(number/10);
    count++;
}

console.log(count);

