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
let n = +userInput[0]
let strarr = []

for(let i=1;i<n+1;i++){
    strarr.push(userInput[i])
}

let flag = false
for(let i=0;i<strarr.length;i++){
    if(strarr[i]==strarr[i+1]){
        flag = true
    }
}
if(flag){
    console.log("yes")
}else{
    console.log("no")
}

  //end-here
});