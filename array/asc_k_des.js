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
let [n,ind] = userInput[0].split(" ").map(val=>+val)
let nums = userInput[1].split(" ").map(val=>+val)
let sliced = []
sliced.push(nums.slice(0,ind))
sliced.push(nums.slice(ind,nums.length))

sliced[0].sort((a,b)=>a-b)
sliced[1].sort((a,b)=>b-a)

let newarr = sliced[0].concat(...sliced[1])
console.log(newarr.join(" "))
  //end-here
});