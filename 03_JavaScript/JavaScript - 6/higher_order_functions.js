function multiple_greet(func, count)
{
    for (let i=1; i<=count; i++)
    {
        func();
    }
}

let greet = function()
{
    console.log("hello");
}

multiple_greet(greet, 2);


function oddEvenTest (request)
{
    if (request=="odd")
    {
        return function(n)
        {
            console.log(!(n%2==0));
        }
    }
    else if  (request=="even")
    {
        return function(n)
        {
            console.log(n%2==0);        
        }
    }
    else
    {
        console.log("wrong request");
    }
}