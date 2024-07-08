// Check if all numbers in our array are multiples of 10 or not

let arr = [1,20,30,40,9];

let multi_ten = (n) => n%10 == 0;

let ans = arr.every(multi_ten);

console.log(ans);

// Create a function to find the minimum number in an array.

function get_mini(nums)
{
    let min = nums.reduce((min,el) =>
    {
    if (el<min)
    {
        return el;
    }
    else 
    {
        return min;
    }
    }
    )

    return min;
}
;

console.log(get_mini(arr));