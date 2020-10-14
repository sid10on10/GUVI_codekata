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
let [a,b,c] = userInput[0].split(" ").map(val=>+val)
let series = []

for(let i=1;i<=c;i++){
    let no = a+(i-1)*b
    series.push(no)
}
console.log(series.reduce((acc,item)=>{return acc+=item},0))
  //end-here
});