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
let k = +userInput[0]
let numsarr = []

for(let i=1;i<=k;i++){
    numsarr.push(userInput[i].split(" ").map(val=>+val))
}

let outarr = []
for(i of numsarr){
    outarr = outarr.concat(i)
}
console.log(outarr.sort((a,b)=>a-b).join(" "))
  //end-here
});