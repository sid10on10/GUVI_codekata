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
let [n,k] = userInput[0].split(" ")

let digitsarr = n.split("")
let karr = digitsarr.filter(data=>data==k)

if(karr.length>0){
    console.log(karr.length)
}else{
    console.log(-1)
}

  //end-here
});