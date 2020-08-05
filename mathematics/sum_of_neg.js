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
let neg = []

for(i of nums){
    if(i<0){
        neg.push(i)
    }
}
if(neg.length>0){
 let sum = neg.reduce((acc,item)=>{return acc+=item},0)
console.log(sum)
}else{
console.log(0)
}
  //end-here
});