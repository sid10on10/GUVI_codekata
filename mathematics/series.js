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
let s1 = [4]

for(let i=0;i<n-2;i++){
  s1.push(s1[i]+2)
}
let series = [2]
for(let i=0;i<n-1;i++){
    series.push(series[i]+s1[i])
}
console.log(series[n-1])
  //end-here
});