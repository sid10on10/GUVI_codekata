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
let n = +userInput[0];
let strarr = [];

for(let i=1;i<n+1;i++){
    strarr.push(userInput[i])
}

let anagram = Array.from("kabali").sort()
let count = 0;
let flag = false;

for(i of strarr){
    if(i.split("").sort().join("")===anagram.join("")){
        count++;
        flag = true
    }
}

if(!count){
    console.log(0)
}else{
    console.log(count)
}


  //end-here
});