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
let weights = userInput[2].split(" ").map(val=>+val)
let myarr = [];

for(let i=0;i<n;i++){
    myarr.push({
        "value":nums[i],
        "weight":weights[i]
    })
}
myarr.sort((a,b)=>a.weight-b.weight)
let outarr = []
for(i of myarr){
    outarr.push(i.value)
}
console.log(outarr.join(" "))

  //end-here
});