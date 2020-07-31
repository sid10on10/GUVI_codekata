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
let bin = (+userInput[0]).toString(2)
let binarr = String(bin).split("").filter(data=>data==="1")
console.log(binarr.length)

  //end-here
});