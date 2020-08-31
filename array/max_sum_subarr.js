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
let sum = []

function summer(arr){
    return arr.reduce((acc,item)=>{return acc+=item},0)
}

for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length+1;j++){
        sum.push(summer(nums.slice(i,j)))
    }
}

console.log(Math.max(...sum))

  //end-here
});