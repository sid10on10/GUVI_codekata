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
let nandk = userInput[0].split(" ").map(val=>+val)
let n = nandk[0]
let k = nandk[1]
let nums = userInput[1].split(" ").map(val=>+val)
if(k>n){
    let move = k%n
    let sliced = nums.splice(n-move,move)
    nums.unshift(...sliced)
    console.log(nums.join(" "))
}else{
    let sliced = nums.splice(n-k,k)
    nums.unshift(...sliced)
    console.log(nums.join(" "))
}

  //end-here
});