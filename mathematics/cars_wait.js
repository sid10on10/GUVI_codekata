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
let [cars,x] = userInput[0].split(" ").map(val=>+val)

if(x>10){
    console.log(0)
}else{
    console.log(10*(cars-1)-(cars-1)*x)
}

  //end-here
});