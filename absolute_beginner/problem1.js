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
let myarray = userInput.map(val => +val)
let sum = 0
for (let ind=0;ind<myarray.length; ind++){
    sum += myarray[ind]
}
console.log(sum)
//end-here
});