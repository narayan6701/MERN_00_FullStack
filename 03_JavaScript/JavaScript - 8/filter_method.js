let nums = [1,2,3,4,5,6,7,8,9,0];

function only_even (n)
{
    return n%2 == 0;
}

let evens = nums.filter(only_even);

console.log(evens);