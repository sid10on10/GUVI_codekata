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
for(let i=2;i<n+1;i+=2){
    if(n%i===0){
        factors.push(i)
    }
}
if(factors.length>0){
    console.log(factors.join(" "))
}else{
    console.log(-1)
}

  //end-here
});