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
const length = +userInput[0]
const breadth = +userInput[1]
const area = length*breadth
console.log(area)

//end-here
});
