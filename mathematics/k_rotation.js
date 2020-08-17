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

if(k<n){
    let cutarr = nums.splice(0,k)
    let outarr = nums.concat(cutarr)
    console.log(outarr.join(" ")) 
}else{
    k = k%n
    let cutarr = nums.splice(0,k)
    let outarr = nums.concat(cutarr)
    console.log(outarr.join(" ")) 
}

  //end-here
});