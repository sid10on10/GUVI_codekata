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
let nums = userInput[1].split(" ").map(val=>+val)
nums.sort((a,b)=>b-a)
console.log(nums.join(""))


  //end-here
});