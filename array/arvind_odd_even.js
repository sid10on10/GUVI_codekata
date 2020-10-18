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

let evens = []
for(let i=0;i<n;i++){
    if(i%2===0){
        evens.push(nums[i])
    }
}
evens.sort((a,b)=>a-b)
for(let i=0;i<n;i+=2){
    nums.splice(i,1,evens[i/2])
}
console.log(nums.join(" "))
  //end-here
});