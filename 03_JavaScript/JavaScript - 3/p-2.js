let months=["january", "july", "march","august"];

months.splice(0, 1);
months.splice(1, 0, "june");

console.log(months);

let lang=["c","c++","html","javascript", "python", "java", "c#","sql"];

console.log(lang.reverse().indexOf("javascript"));