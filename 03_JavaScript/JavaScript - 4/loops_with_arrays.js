let fruits=["mango","apple","bananna","litchi","orange"];
fruits.push("pineapple");

for (let i=0; i<fruits.length; i++)
{
    console.log(i, fruits[i]);
}

console.log("reverse travesing");

for (let i=fruits.length-1; i>=0; i--)
{
    console.log(i, fruits[i]);
}