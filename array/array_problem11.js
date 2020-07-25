const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
//Your code goes here … replace this line with your code logic 
let nandm = userInput[0].split(" ").map(val => +val)
let n = nandm[0]
let m = nandm[1]
let array1 = userInput[1].split(" ").map(val => +val)
let array2 = userInput[2].split(" ").map(val => +val)

array1.sort((a, b) => a-b)
array2.sort((a, b) => b-a)
array1.splice(n,0,...array2)
console.log(array1.join(" "))




//end-here
});
