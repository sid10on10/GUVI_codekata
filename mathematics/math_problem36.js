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
let andb = userInput[0].split(" ").map(val=>+val)
let l = andb[1]
let b = andb[0]

let area = l*b
console.log(area.toFixed(5))
// buggy testcase
  //end-here
});