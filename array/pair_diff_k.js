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

let pairs = []

for(let i=0;i<n;i++){
   for(let j=i+1;j<n;j++){
        pairs.push([nums[i],nums[j]])
    } 
}

function diff(pair){
    return Math.abs(pair[0]-pair[1])
}
let newarr = pairs.filter(data=>diff(data)==k)
console.log(newarr.length)
  //end-here
});