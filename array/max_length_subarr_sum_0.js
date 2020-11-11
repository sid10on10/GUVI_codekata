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
let subarr = []

for(let i=0;i<n;i++){
    for(let j=i+1;j<=n;j++){
        subarr.push(nums.slice(i,j))
    }
}
function summer(arr){
    return arr.reduce((acc,item)=>{return acc+=item},0)
}
let newarr = subarr.filter(data=>summer(data)==0)
newarr.sort((a,b)=>b.length-a.length)

console.log(newarr[0].length)

  //end-here
});