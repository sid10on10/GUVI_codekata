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
let sorted = nums.slice().sort((a,b)=>a-b)
let outarr = []

//console.log(sorted)

if(n%2===0){
    
    for(let i=0;i<n/2;i++){
        outarr.push(sorted[n-1-i])
        outarr.push(sorted[i])
    }

}else{
    
    for(let i=0;i<n/2-1;i++){
        outarr.push(sorted[n-1-i])
        outarr.push(sorted[i])
    }
    outarr.push(sorted[parseInt(n/2)])
    
}
console.log(outarr.join(" "))

  //end-here
});