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

function checkincreasing(arr){
    let flag = true
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            flag = false
            return flag
        }
    }
    return flag
}
function checkdecreasing(arr){
    let flag = true
    for(let i=0;i<arr.length;i++){
        if(arr[i]<arr[i+1]){
            flag = false
            return flag
        }
    }
    return flag
}

if(checkdecreasing(nums)||checkincreasing(nums)){
    console.log("yes")
}else{
    console.log("no")
}
  //end-here
});