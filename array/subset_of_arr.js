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
let proj1 = userInput[1].split(" ").map(val=>+val)
let proj2 = userInput[3].split(" ").map(val=>+val)
let flag = true

for(i of proj2){
    if(!proj1.includes(i)){
        flag = false
        console.log("no")
        break
    }
}
if(flag){
    console.log("yes")
}
  //end-here
});