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
let sum = []

function sumarr(arr){
    let sum = arr.reduce((acc,item)=>{ return acc+=item},0)
    return sum
}


for(let i=0;i<n;i++){
    for(let j=i+1;j<n+1;j++){
        sum.push(nums.slice(i,j))
    }
}

let sums = []
for(i of sum){
    sums.push(sumarr(i))
}
console.log(Math.min(...sums))

  //end-here
});