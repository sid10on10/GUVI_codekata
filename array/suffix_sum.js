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

let sum = nums.reduce((acc,item)=>{
                return acc+=item    
},0)
let arr = []

for(i of nums){
    arr.push(sum)
    sum-=i
}
console.log(arr.join(" "))
  //end-here
});