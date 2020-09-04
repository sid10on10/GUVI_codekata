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
let nums1 = userInput[1].split(" ").map(val=>+val)
let nums2 = userInput[2].split(" ").map(val=>+val)

let outarr = []
for(let i=0;i<n;i++){
    outarr.push(nums1[i]+nums2[i])
}
console.log(outarr.join(" "))

  //end-here
});