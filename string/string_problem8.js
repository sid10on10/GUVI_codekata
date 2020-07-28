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
let mystrarr = userInput[0].split(" ")
let numbers = []

for(str of mystrarr){
    if (isNaN(str)){
        
    }else{
        numbers.push(+str)
    }
}
numbers.sort((a,b)=>b-a)
console.log(numbers[0])





//end-here
});
