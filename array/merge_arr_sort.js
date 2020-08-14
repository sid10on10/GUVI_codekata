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
let arr1 = userInput[1].split(" ")
let arr2 = userInput[2].split(" ")
let arr3 = arr1.concat(arr2)
arr3.sort((a,b)=>a-b)
console.log(arr3.join(" "))


  //end-here
});