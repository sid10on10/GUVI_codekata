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
let tickets = userInput[1].split(" ")
let date = +userInput[2]
let outarr = []

for(i of tickets){
    if(i%date===0){
        outarr.push(1)
    }else{
        outarr.push(0)
    }
}
console.log(outarr.join(" "))
  //end-here
});