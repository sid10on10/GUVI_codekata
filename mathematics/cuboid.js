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
let dimen = userInput[0].split(" ").map(val=>+val)
let l = dimen[0]
let b = dimen[1]
let h = dimen[2]

let sa = 2*(l*b+l*h+b*h)
let v = l*b*h
console.log(sa,v)


  //end-here
});