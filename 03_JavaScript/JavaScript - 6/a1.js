let array=[10,2,3,9,5,1,7,8,4,6];
let num = 5;
let array2 = [];

function array_larger (array, num)
{
    for (i=0; i<array.length; i++)
    {
        if (array[i]>num)
        {
            array2.push(array[i]);
        }
    }

    return array2;
}

console.log(array_larger(array, 1));