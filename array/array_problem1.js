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
let sum = 0;
let numbers = userInput[1].split(" ").map(val=>+val)
let n = +userInput[0]

for(i of numbers){
    sum += i
}

if(sum%2 === 0 && sum%3 === 0 && sum%5 === 0){
    console.log(1)
}else{
    console.log(0)
}

//end-here
});
