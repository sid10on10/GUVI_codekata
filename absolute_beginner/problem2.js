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
factorial = 1
for (let start=1;start<number+1;start++){
    factorial *= start;
}
console.log(factorial);
//end-here
});