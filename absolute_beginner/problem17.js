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
const coeffs = userInput[0].split(" ").map(val => +val)
const a = coeffs[0]
const b = coeffs[1]
const c = coeffs[2]
const root1 = parseFloat((-b+(b**2-4*a*c)**(1/2))/(2*a));
const root2 = parseFloat((-b-(b**2-4*a*c)**(1/2))/(2*a));
console.log(root1.toFixed(2))
console.log(root2.toFixed(2))
//end-here
});
