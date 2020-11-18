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
let [n,k] = userInput[0].split(" ").map(val=>+val)
let nums = userInput[1].split(" ").map(val=>+val)
let added = userInput[2].split(" ").map(val=>+val)
let outarr = []

for(i of added){
    nums.push(i)
    nums.sort((a,b)=>b-a)
    outarr.push(nums[0])
}
console.log(outarr.join(" "))
  //end-here
});