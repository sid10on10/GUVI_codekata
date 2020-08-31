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

for(let i=0;i<nums.length;i++){
    if(nums[i]===i){
        outarr.push(i)
    }
}
if(outarr.length!=0){
    console.log(outarr.join(" "))
}else{
    console.log(-1)
}

  //end-here
});