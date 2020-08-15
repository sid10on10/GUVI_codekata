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
let str = userInput[0]
if(str!=str.toLowerCase()&&str!=str.toUpperCase()&&str.search("_")==-1){
    console.log("yes")   
}else{
    console.log("no")
}

  //end-here
});