// finding maximum value in array using reduce function

let arr = [1,2,5,7,4,11,0,10];

let max_value = arr.reduce((max,el) =>
    {
        if (el>max)
        {
            return el;
        }
        else
        {
            return max;
        }
    });

console.log(max_value);