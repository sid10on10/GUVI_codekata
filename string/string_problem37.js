// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
let string = userInput[0].split("")

for(let i=0;i<string.length;i+=2){
    [string[i], string[i+1]] = [string[i+1], string[i]]
}
console.log(string.join(""))


  //end-here
});