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
let n = +userInput[0];
let nums = userInput[1].split(" ").map(val=>+val);
let swap = 0;

for(let i=0;i<n;i++){
    let min = i;
    let flag = false
    for(let j=i+1;j<n;j++){
        if(nums[j]<nums[min]){
            min = j
            flag = true
        }
    }
    [nums[i],nums[min]] = [nums[min],nums[i]]
    if(flag){
        swap++;
    }
}
console.log(swap);


  //end-here
});