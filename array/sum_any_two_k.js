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
let pairs = []

for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        pairs.push([nums[i],nums[j]])
    }
}

function sum(arr){
    return arr[0]+arr[1]
}

if(pairs.some(item=>sum(item)==k)){
    console.log("yes")
}else{
    console.log("no")
}
  //end-here
});