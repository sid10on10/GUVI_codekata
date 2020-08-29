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
let nums = userInput[1].split(" ").map(val=>+val)
let uniquearr = []

for(i of nums){
    if(uniquearr.indexOf(i)===-1){
        uniquearr.push(i)
    }else{
        continue
    }
}
console.log(uniquearr.join(" "))

  //end-here
});