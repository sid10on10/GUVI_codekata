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
let myobj = {}

for (let index=0;index<numbers.length;index++){
    myobj[numbers[index]] = index
}

let max = Object.keys(myobj).sort((a,b) => a-b)[numbers.length-1]
let min = Object.keys(myobj).sort((a,b) => a-b)[0]
console.log(myobj[max]-myobj[min])


//end-here
});
