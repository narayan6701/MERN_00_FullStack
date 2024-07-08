// Square and sum the array elements using the arrow function and then find the average of the array.

let nums = [1,2,3,5,4];

let average_after_square_and_sum = arr  =>
{
    let square_of_nums = arr.map(el => el*el);

    let sum_of_nums = square_of_nums.reduce((sum,el) =>  sum+el);
    
    let avg = sum_of_nums / nums.length;
    
    console.log(nums);
    console.log(square_of_nums);
    console.log(sum_of_nums);
    console.log(`Number of elements in an array is ${nums.length}`)
    console.log(avg);

};

average_after_square_and_sum(nums);