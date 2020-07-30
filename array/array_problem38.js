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
let prices = userInput[1].split(" ").map(val=>+val)
let minindex = 0;

for(let i=0;i<prices.length;i++){
    if(prices[i]<prices[minindex]){
        minindex = i
    }
}

console.log("Dealer"+minindex)

  //end-here
});