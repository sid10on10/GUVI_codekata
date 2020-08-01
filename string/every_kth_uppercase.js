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
let strandn = userInput[0].split(" ")
let n = +strandn[1]
let str = strandn[0]
let strarr = str.split("")
strarr.unshift(0)

if(n===0){
    // pass
}else{
for(let i=n;i<strarr.length;i+=n){
    strarr[i] = strarr[i].toUpperCase()
}
}
strarr.shift()
console.log(strarr.join(""))


  //end-here
});