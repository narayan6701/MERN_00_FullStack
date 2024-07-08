let arr=["hi","hello", "bye", "!"];

function merge(arr)
{
    let result="";
    for (i=0; i<arr.length; i++)
    {
        result += arr[i];
    }
    return result;
}

console.log(merge(arr));