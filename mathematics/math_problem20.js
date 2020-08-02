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
let andb = userInput[0].split(" ").map(val=>+val)
let a = andb[0]
let b = andb[1]
let diff = a-b;
if(diff%2===0){
    console.log("even")
}else{
    console.log("odd")
}

  //end-here
});