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
let numbers = userInput[0].split(" ").map(val => +val)
numbers.sort((a,b)=> a-b)
console.log(numbers[0])



//end-here
});
