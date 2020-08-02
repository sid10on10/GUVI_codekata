// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
let n = +userInput[0]
let count = 0
// 0 is excluded here 
for(let i=1;i<n+1;i++){
    let str = i.toString().split("")
    let palind = str.slice().reverse()
    if(str.join("")===palind.join("")){
        count++
    }else{
        // pass
    }
}
console.log(count)
  //end-here
});