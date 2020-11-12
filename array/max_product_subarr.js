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
    for(let j=i+1;j<n+1;j++){
        subarr.push(nums.slice(i,j))
    }
}
function product(arr){
    return arr.reduce((acc,item)=>{
        return acc*=item
    },1)
}
subarr = subarr.map(data=>product(data))
console.log(subarr.sort((a,b)=>b-a)[0])
  //end-here
});