let arr = [1,2,3,4,5,9];
const arrayAverage = arr =>
{
    let total = 0;
    for(let i=0; i<arr.length; i++)
    {
        total += arr[i];
    };

    return total/arr.length;
};

console.log(arrayAverage(arr));