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
let outarray = []
for (let start=1;start<4;start++){
    outarray.push(number*start);
}
console.log(outarray.join(" "));

//end-here
});
