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
let digarr = userInput[0].split("").map(val=>+val)
let sum = digarr.reduce((acc,item)=>{return acc+=item**digarr.length},0)
console.log(sum)

  //end-here
});