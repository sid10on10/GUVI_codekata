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
let flag = true

for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
        if(nums[i]==nums[j]){
            flag = false
        }
    }
    if(flag){
        console.log(nums[i])
        break
    }
}

  //end-here
});