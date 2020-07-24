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
const number = +userInput[0]
const area = 1/4*(3**(1/2)*number**2)
console.log(area.toFixed(2))

//end-here
});
