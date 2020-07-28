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
let strarr = userInput[0].split("")

for(let i=0;i<strarr.length;i++){
    let bool = true
    for(let j=i+1;j<strarr.length;j++){
        if(strarr[j]===strarr[i]){
            bool = false
        }
    }
    if(bool){
        console.log(strarr[i])
        break
    }

}

  //end-here
});