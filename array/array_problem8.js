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
let uniquearr = []
let repeatedarr = []

for (i of numbers ){
    if ( !(uniquearr.includes(i)) ){
        uniquearr.push(i)
    }else{
        repeatedarr.push(i)
    }
}
// console.log(uniquearr)
// console.log(repeatedarr)
console.log(repeatedarr.join(" "))



//end-here
});
