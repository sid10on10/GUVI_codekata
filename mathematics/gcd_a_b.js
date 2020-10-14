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
function gcd(a,b){
    if(b===0){
        return a
    }else{
        return gcd(b,a%b)
    }
}

let [a,b] = userInput[0].split(" ").map(val=>+val)
console.log(gcd(a,b))

  //end-here
});