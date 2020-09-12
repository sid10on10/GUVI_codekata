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

function counter(arr,k){
    return arr.filter((data)=>data===k).length
}

let num = nums.filter((data)=>counter(nums,data)>1)
let unique = []

for(i of num){
    if(unique.includes(i)){
        // pass
    }else{
        unique.push(i)
    }
}

unique.sort((a,b)=>a-b)
console.log(unique.join(" "))

  //end-here
});