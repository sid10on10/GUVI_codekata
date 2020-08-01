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
let strs = []
for(let i=1;i<n+1;i++){
    strs.push(userInput[i])
}
let minimum = strs[0]
for(let i=0;i<strs.length;i++){
    if(strs[i].length<minimum.length){
        minimum = strs[i]
    }
}
console.log(minimum)

  //end-here
});