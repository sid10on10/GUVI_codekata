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
let numbers = userInput[1].split(" ").map(val=>+val)
let sum = numbers[n-1]+numbers[n-2]+numbers[n-3];

let outarr = []
for(i of numbers){
    outarr.push(i-sum)
}
console.log(outarr.join(" "))



//end-here
});
