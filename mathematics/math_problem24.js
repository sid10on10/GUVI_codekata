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
let numbers = userInput[0].split(" ").map(val=>+val)
let a = numbers[0]
let b = numbers[1]
let c = numbers[2]
let answer = (a*b)%c
console.log(answer)

  //end-here
});