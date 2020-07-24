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
const myarray = userInput[0].split(" ").map(val => +val)
const sinterest = (myarray[0]*myarray[1]*myarray[2])/100
console.log(sinterest.toFixed(2))
//end-here
});
