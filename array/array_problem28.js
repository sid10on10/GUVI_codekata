const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
//Your code goes here … replace this line with your code logic 
let n = +userInput[0]
let nums = userInput[1].split(" ").map(val=>+val)
let firstsum = nums[0]+nums[1]+nums[2]
let lastsum = nums[n-1]+nums[n-2]+nums[n-3]

if(firstsum===lastsum){
    console.log(1)
}else{
    console.log(0)
}




//end-here
});
