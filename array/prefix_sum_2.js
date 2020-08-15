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
let sum = 0
let prefix = []

for(i of nums){
    sum += i
    if(sum%2==0){
        prefix.push(sum)
    }else{
        prefix.push(i)
    }
    
}
console.log(prefix.join(" "))
  //end-here
});