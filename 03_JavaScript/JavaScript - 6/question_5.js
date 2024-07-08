function sum_of_numbers(a,b)
{
    for(c=0; a<=b; a++)
    {
        c+=a;
    }
    return c;
}

console.log(sum_of_numbers(1,3));
console.log(sum_of_numbers(1,10));

// Slightly different it prints the sum of numbers between a and b.