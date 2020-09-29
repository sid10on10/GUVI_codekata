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
let subarray = []

for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length+1;j++){
        subarray.push(nums.slice(i,j))
    }
}
function checker(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            return false
        }
    }
    return true
}
let increasing = subarray.filter(arr=>checker(arr))
increasing = increasing.filter(data=>data.length>1)
if(increasing.length>0){
    increasing.sort((a,b)=>b.length-a.length)
    console.log(increasing[0].length)
}else{
    console.log(-1)
}
//end-here
});