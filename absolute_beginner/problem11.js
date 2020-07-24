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
const celcius = +userInput[0]
const fahrenheit = (9/5)*celcius+32 
console.log(fahrenheit.toFixed(2))
//end-here
});
