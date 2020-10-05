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
let insert = userInput[3].split(" ").map(val=>+val)
let outarr = []

for(i of insert){
    nums.push(i)
    nums.sort((a,b)=>b-a)
    let ind = nums.indexOf(i)
    outarr.push(ind+1)
}
console.log(outarr.join(" "))

  //end-here
});