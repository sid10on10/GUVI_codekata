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
let flag = false
for(i of nums){
    if(i%2==0){
        flag = true
    }
}
if(flag){
    console.log("even")
}else{
    console.log("odd")
}
  //end-here
});