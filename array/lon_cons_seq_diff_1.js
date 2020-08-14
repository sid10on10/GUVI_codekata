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

nums.sort((a,b)=>a-b)
let seq = []
for(let i=0;i<nums.length;i++){
    if((nums[i+1]-nums[i])==1){
        while((nums[i+1]-nums[i])==1){
            seq.push(nums[i])
            i++;
        }
    }
}
console.log(seq.length+1)
// works but in case of multiple do accordingly

  //end-here
});