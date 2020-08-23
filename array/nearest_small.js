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

if(nums.includes(k)){
    console.log(k)
}else{
    nums.push(k)
    nums.sort((a,b)=>a-b)
    if(nums.indexOf(k)==0){
        console.log(-1)
    }else{
         console.log(nums[nums.indexOf(k)-1])
    }
}

  //end-here
});