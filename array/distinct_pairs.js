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
let pairs = []
function cheker(arr,sarr){
    for(i of arr){
        if(i[0]==sarr[0] && i[1]==sarr[1]){
            return true
        }
    }
    return false
}

for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]!=nums[j]&&nums[j]>nums[i]){
            if(cheker(pairs,[nums[i],nums[j]])){
                // pass
            }else{
                pairs.push([nums[i],nums[j]])
            }
        }
    }
}

if(pairs.length>1){
console.log(pairs.length)
}else{
    console.log(-1)
}

  //end-here
});