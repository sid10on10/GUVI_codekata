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
let pairs = []

function diff(arr){
    return (Math.abs(arr[0]-arr[1]))
}

for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        pairs.push([nums[i],nums[j]])
    }
}

console.log(pairs.sort((a,b)=>diff(a)-diff(b))[0].join(" "))
  //end-here
});