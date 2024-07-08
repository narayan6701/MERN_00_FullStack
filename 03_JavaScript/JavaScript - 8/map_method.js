let arr = [1,2,3,4,5];

let new_arr = arr.map(function (el)
{
    return el*2;
});

console.log(new_arr);


let students = 
[
    {fname:'narayan', marks:'95'},
    {fname:'kirti', marks:'92'},
    {fname:'sakshi', marks:'85'},
    {fname:'monika', marks:'75'},
];

let convert = (students) => students.marks/9.5;

let gpa = students.map(convert);

console.log(gpa);