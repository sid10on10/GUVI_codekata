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
let inc = false
let outarr = []

for(let i=0;i<n-1;i++){
    if(nums[i+1]>nums[i]){
        inc = true
        outarr.push(inc)
    }else{
        inc = false
        outarr.push(inc)
    }
}

function checker(arr){
    let flag = false
    for(i=0;i<n-1;i++){
        flag = !flag
        if(arr[i] === !flag){
            return false
        }
    }
    return true
}

if(checker(outarr)===true){
    console.log("yes")
}else{
    console.log("no")
}

  //end-here
});