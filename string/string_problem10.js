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
let mystr = userInput[0].split("")
mystr.reverse()
mystr.splice(0,1,mystr[0].toUpperCase())
console.log(mystr.join(""))

//end-here
});
