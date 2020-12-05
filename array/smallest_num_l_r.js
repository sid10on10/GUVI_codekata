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
let [n,l,k] = userInput[0].split(" ").map(val=>+val)
let nums = userInput[1].split(" ").map(val=>+val)
let arr = nums.slice(l,k)

console.log(Math.min(...arr))
  //end-here
});