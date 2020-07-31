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
let outarr = []
numbers.unshift(0)

for(let index=1;index<numbers.length;index+=2){
    outarr.push(numbers.slice(index,index+2).reverse().join(" "))
}
console.log(outarr.join(" "))

//end-here
});
