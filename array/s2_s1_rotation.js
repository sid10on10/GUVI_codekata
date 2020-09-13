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
let s1 = userInput[0].split("")
let s2 = userInput[1]

let remstr = s1.splice(0,2)
let newstr = s1.concat(remstr)

if(s2==newstr.join("")){
    console.log(1)
}else{
    console.log(0)
}

  //end-here
});