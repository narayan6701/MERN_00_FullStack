let names = ["tony", "bruce", "steve", "peter"];

let [winner, runnerup] = names;
console.log(winner, runnerup);

// Destructuring of obejcts

const obj = {
    fname:"narayan",
    age:22,
    clas:"bca",
    subjects:["hindi", "english", "maths", "science", "sst"],
    username:"narayan.6701",
    pword:"Narayan.108"
};

let {subjects, age} = obj;
let {fname:naam, clas:standard} = obj;

console.log(subjects, age);
console.log(naam, standard);

//Destructuring of a string

let str = "narayan";

let [first, second, third] = str;

console.log(first, second, third);