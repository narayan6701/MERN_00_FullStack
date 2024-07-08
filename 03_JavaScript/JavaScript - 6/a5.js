function random(a,b)
{
    let diff=b-a;
    let number = Math.floor(Math.random()*diff) + a;
    return number;
}

console.log(random(2,10));