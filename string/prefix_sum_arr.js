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
let nums = userInput[1].split(" ").map(val=>+val)
let outarr = []
let sum = 0

for(let i=0;i<nums.length;i++){
    sum += nums[i]
    outarr.push(sum)
}
console.log(outarr.join(" "))

  //end-here
});