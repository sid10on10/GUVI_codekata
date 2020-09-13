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
let count = 1

for(let i=0;i<n;i++){
    let outarr = []
    for(let j=0;j<count;j++){
        outarr.push(1)
    }
    console.log(outarr.join(" "))
    count += 2
}

  //end-here
});