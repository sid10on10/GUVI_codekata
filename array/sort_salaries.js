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
let data = userInput[1].split(" ")
let dataarr = []

for(let i=0;i<2*n;i+=2){
    dataarr.push([data[i],parseInt(data[i+1])])
}
dataarr.sort((a,b)=>a[1]-b[1])
for(i of dataarr){
    console.log(i[0])
}
  //end-here
});