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

for(let i=0;i<n;i++){
    if(i==n-1){
        outarr.push(nums[n-1])
    }else{
        let copy = nums.slice(i,n)
        let max = Math.max(...copy)
        if(nums[i]==max){
            outarr.push(nums[i])
        }
    }
}
console.log(outarr.join(" "))
  //end-here
});