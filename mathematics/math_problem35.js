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
let factors = []

for(let i=1;i<n+1;i++){
    if(n%i===0){
        factors.push(i)
    }else{
        // pass
    }
}
console.log(factors.join(" "))

  //end-here
});