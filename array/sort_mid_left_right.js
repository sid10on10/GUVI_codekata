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
let middle

if(nums.length%2==1){
    middle = Math.floor((n-1)/2)
}else{
    middle = Math.floor(n/2)
}

let leftarr = nums.slice(0,middle)
let rightarr = nums.slice(middle,n)
//console.log(leftarr,rightarr)
leftarr.sort((a,b)=>a-b)
rightarr.sort((a,b)=>b-a)
let outarr = leftarr.concat(...rightarr)
console.log(outarr.join(" "))


  //end-here
});