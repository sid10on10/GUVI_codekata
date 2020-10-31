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
let flag = false

function summer(arr){
    return arr.reduce((acc,item)=>{return acc+=item},0)
}

for(let i=1;i<nums.length;i++){
    let leftarr = nums.slice(0,i)
    let rightarr = nums.slice(i+1,n)
    if(summer(leftarr)==summer(rightarr)){
        flag = true
    }
}
if(flag){
    console.log("yes")
}else{
    console.log("no")
}
  //end-here
});