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
let strs = userInput[0].split(" ")
let str1 = strs[0]
let str2 = strs[1]

if(str1.search(str2)!==-1){
    console.log("Yes")
}else{
    console.log("No")
}

  //end-here
});