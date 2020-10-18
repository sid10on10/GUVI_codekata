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
let arr = userInput[1].split(" ").map(val=>+val)
let copy = arr.slice()

for(let i=0;i<n;i++){
    arr[i] = copy[copy[i]]
}
console.log(arr.join(" "))

  //end-here
});