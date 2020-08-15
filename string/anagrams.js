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
let str1arr = userInput[0].split("")
let str2arr = userInput[1].split("")

if(str1arr.sort().join("")==str2arr.sort().join("")){
    console.log(1)
}else{
    console.log(0)
}


  //end-here
});