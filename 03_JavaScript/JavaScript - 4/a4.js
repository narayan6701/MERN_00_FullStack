let num=Number(prompt("Enter your number"));

let fac=1;

while(num>0)
{
    fac = num * fac;
    num--;
}

console.log(fac);