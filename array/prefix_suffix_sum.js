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

function summer(arr){
    return arr.reduce((acc,item)=>{return acc+=item},0)
}
let outarr = []

for(let i=0;i<n;i++){
    let prefixarr = nums.slice(0,i+1)
    let prefixsum = summer(prefixarr)
    let suffixarr = nums.slice(i,n)
    let suffixsum = summer(suffixarr)
    let total = prefixsum+suffixsum
    outarr.push(total)
}
console.log(outarr.join(" "))
  //end-here
});