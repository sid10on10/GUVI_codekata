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
let n = +userInput[0]
let numbers = userInput[1].split(" ").map(val => +val)
let minimumno = numbers[0];

for (i of numbers){
    if (i < minimumno){
        minimumno = i
    }
}
console.log(minimumno)



//end-here
});
