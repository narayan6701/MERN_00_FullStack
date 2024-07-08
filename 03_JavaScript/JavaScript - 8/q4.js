// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled

let chars = ["a","b","c","d","e"];

function doubleAndReturnArgs (arr, ...nums)
{
    return [...arr.map((n) => n*2),...nums];
};

console.log(doubleAndReturnArgs([1,2,3,4,5],...chars));