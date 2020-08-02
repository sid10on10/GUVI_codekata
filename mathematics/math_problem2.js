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
let num = userInput[0].split("").map(val => +val)
let sum = 0;
for (i of num){
    sum += i
}
if (sum%3===0){
    console.log("yes")
}else{
    console.log("not")
}

//end-here
});
