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
let strarr = userInput[0].split(" ")

function reverser(str){
    let strarr = str.split("")
    return strarr.reverse().join("")
}

let newarr = []
for(i of strarr){
    newarr.push(reverser(i))
}
console.log(newarr.join(" "))
  //end-here
});