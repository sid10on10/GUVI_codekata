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
let series = [3]

for(let i=0;i<n-2;i++){
    series.push(series[i]+2)
}
let outseries = [2]

for(let i=0;i<series.length;i++){
    outseries.push(outseries[i]+series[i])
}
console.log(outseries.join(" "))

  //end-here
});