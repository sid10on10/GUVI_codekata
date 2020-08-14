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

function camelcase(string){
    let stringarr = string.split("")
    stringarr[0] = stringarr[0].toUpperCase()
    return stringarr.join("")
}
for(let i=0;i<strarr.length;i++){
    strarr[i] = camelcase(strarr[i])
}
console.log(strarr.join(""))
  //end-here
});