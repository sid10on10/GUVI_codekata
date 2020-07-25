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
let numbers = userInput[1].split(" ").map(val=>+val)
let mynum;

for(num of numbers){
    if (numbers.filter(x => x===num).length === 2){
        mynum = num
    }
}
console.log(mynum)

//end-here
});
