let arr=[2, 5, 0, 4, 2, 7, 1, 9];

let largest = 0;

for (let i=0; i<=arr.length-1; i++)
{
    if (largest<arr[i])
    {
        largest = arr[i];
    }
}

console.log(largest);