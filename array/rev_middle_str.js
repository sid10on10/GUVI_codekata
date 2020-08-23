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


function rev(string){
    let strarr = string.split("")
    return strarr.reverse().join("")
}
for(let i=1;i<strarr.length-1;i++){
    strarr[i] = rev(strarr[i])
}
console.log(strarr.join(" "))
  //end-here
});