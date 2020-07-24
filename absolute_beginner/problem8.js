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
let array = userInput[0].split(" ").map(val => +val)
if (array[0]>array[1]){
    console.log(array[1])
} else {
    console.log(array[0])
}
//end-here
});
