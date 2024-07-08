let fruits=["mango", "banana", "papaya", "litchi", "apple", "guava"];

console.log(fruits.slice(3));
console.log(fruits.slice(-4));

console.log(fruits.slice(1,3));

console.log(fruits.indexOf("papaya"));

// console.log("The value of fruits.splice(3) will be", fruits.splice(3));
console.log("The value of fruits.splice(2,5) will be", fruits.splice(2,5));
console.log('The value of fruits.splice("orange", "kiwi") will be', fruits.splice(0,1,"orange", "kiwi"));