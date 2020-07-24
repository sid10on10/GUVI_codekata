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
const mynumbers = userInput.map(val => +val)
mynumbers.sort()
console.log(mynumbers[2])
//end-here
});
