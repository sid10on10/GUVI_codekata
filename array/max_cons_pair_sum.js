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
let max = []

for(let i=1;i<n;i++){
    let pair = [nums[i-1],nums[i]]
    let maxofpair = Math.max(...pair)
    max.push(maxofpair)
}


console.log(max.reduce((acc,item)=>{return acc+=item},0))

  //end-here
});