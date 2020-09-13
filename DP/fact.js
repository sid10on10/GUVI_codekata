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
let [a,b] = userInput[0].split(" ").map(val=>+val)
let arr = []
for(let i=a;i>b;i--){
    arr.push(i)
}
let result = arr.reduce((acc,item)=>{return acc*=item},1)
console.log(result)


  //end-here
});