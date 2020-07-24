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
if (number<0){
    console.log("Error")
} else if (number===0){
    console.log(0)
} else{
    console.log(number*number)
}
//end-here
});
