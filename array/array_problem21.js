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
let arr1 = userInput[1].split(" ").map(val=>+val)
let arr2 = userInput[2].split(" ").map(val=>+val)

let myarr = arr1.concat(arr2)
myarr.sort((a,b)=>a-b)
let sum = myarr[n]+myarr[n-1]
console.log(sum)


//end-here
});
