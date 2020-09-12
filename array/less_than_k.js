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
let nums = userInput[1].trim().split(" ").map(val=>+val)
let outarr = []

for(i of nums){
    if(i<k){
        outarr.push(i)
    }
}
outarr.sort((a,b)=>a-b)
if(outarr.length>0){
    console.log(outarr.join(" "))
}else{
    console.log(-1)
}

  //end-here
});