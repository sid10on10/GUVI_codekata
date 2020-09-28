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
let [n,k] = userInput[0].split(" ").map(val=>+val)
let nums = userInput[1].split(" ").map(val=>+val)
let subarr = []

for(let i=0;i<n;i++){
    for(let j=i+1;j<=n;j++){
        subarr.push(nums.slice(i,j))
    }
}

function summer(arr){
    return Math.max(...arr)
}
subarr = subarr.filter(data=>summer(data)>k)
console.log(subarr.length)

  //end-here
});