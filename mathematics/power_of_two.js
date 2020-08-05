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
function IsPower(num, k){
    let power = 1
    while(power<num){
        power = power*k
    }
    return power === num
}

let n = +userInput[0]
if(IsPower(n,2)){
    console.log("yes")
}else{
    console.log("no")
}

  //end-here
});