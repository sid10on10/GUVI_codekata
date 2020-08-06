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
let num = +userInput[0]
let digits = userInput[0].split("").map(val=>+val)
let sum = 0
for(i of digits){
    sum += i
}
let product = 1

for(i of digits){
    product *= i
}

if(num === product+sum){
    console.log("Great")
}else{
    console.log("no")
}



//end-here
});
