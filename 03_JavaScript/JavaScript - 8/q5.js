// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

let obj1  = {
    fname:"narayan",
    std:"bca-3",
    roll:41,
    marks:81
};

let obj2 = {
    city:"samastipur",
    state:"bihar",
    country:"bharat",
    pin_code:848131
};

function mergeObjects(ob1, ob2)
{
    return {...ob1,...ob2};
};

console.log(mergeObjects(obj1,obj2));