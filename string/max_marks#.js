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
let [name,marks1,marks2,marks3] = userInput[0].split("#")
let [name1,marks4,marks5,marks6] = userInput[1].split("#")

let sum1 = (+marks1)+(+marks2)+(+marks3)
let sum2 = (+marks4)+(+marks5)+(+marks6)

if(sum1>sum2){
    console.log(name)
}else{
    console.log(name1)   
}

  //end-here
});