// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
let n = +userInput[0]
let numbers = userInput[1].split(" ").map(val=>+val)
numbers.sort((a,b)=>a-b)
console.log(numbers.join(" "))

  //end-here
});