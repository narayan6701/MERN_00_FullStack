function sum (...args)
{
    for(let i=0; i<args.length; i++)
    {
        console.log(`You gave us ${args[i]}`);
    }
};

function sum(...args)
{
    return args.reduce((sum,el) => sum+el);
};