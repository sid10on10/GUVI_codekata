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
let string = userInput[0].split("")
let count = 0

for(i of string){
    count++
}
console.log(count)

//end-here
});
